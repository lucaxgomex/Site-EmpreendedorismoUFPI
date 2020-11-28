import React, { useState, useRef } from 'react';
import { render, cleanup } from '@testing-library/react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";

import submitForm from '../../services/registerService';

import Header from '../../components/Header';
import Button from '../../components/Atoms/Button';
import FormInput from '../../components/Atoms/FormInput';
import LogoLiga from '../../imgs/logo-azul.png';

import Succesfuly from '../../imgs/icons/success.png';

import './styles.css';


function RegisterPage() {
  const history = useHistory();
  const formRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [occupation, setOccupation] = useState('');

  const [secondFormData, setSecondFormData]  = useState({});

  function changeForm() {
    const first_form = document.getElementById('first-form');
    const second_form = document.getElementById('second-form');

    first_form.style.display = 'none';
    second_form.style.display = 'flex';
  }

  function backToFirstForm() {
    const first_form = document.getElementById('first-form');
    const second_form = document.getElementById('second-form');

    first_form.style.display = 'flex';
    second_form.style.display = 'none';
  }

  function hideForm() {
    const second_form = document.getElementById('second-form');

    second_form.style.display = 'none';
  }


  async function handleSubmitForm() {
    const data = {
      name,
      email,
      password,
      date_of_birth,
      phone,
      course,
      occupation
    }
    
    try {
      const today = new Date();

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
                  .email('Digite um e-mail válido')
                  .required('O e-mail é obrigatório'),
        phone: Yup.string().required('O número de telefone é obrigatório.'),
        password: Yup.string()
                      .min(8, 'A senha deve ter no mínimo 8 caracteres')
                      .required('A senha é obrigatória'),
        date_of_birth: Yup.date().max(today).typeError('Você não preencheu o campo \'Data de Nascimento\' corretamente'),
        course: Yup.string(),
        occupation: Yup.string(),
      });
  
      await schema.validate(data, {
        abortEarly: false,
      });

      submitForm(data);

      hideForm()

      render(
        <div className="succesfuly-signin">
          <img src={Succesfuly} alt="success" />
          <span className="succesfuly-message">Cadastrado realizado com sucesso!</span>
        </div>
      )
       
      setTimeout(() => (cleanup(), history.push('/login')), 3000);

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const listErrors = err.errors

        render(
          <div className="error-message-container">
            {listErrors.map(messageError => <div key={messageError} className="error-message">{messageError}</div>)}
          </div>
        ) 
      }

      const messages = document.getElementsByClassName('error-message');
      
      setTimeout(() => Object.values(messages)
                            .forEach((message) => message.style.display="none"), 3600);
    }
  }

  
  return (
    <div className="signin">
      <Header/>
      <section id="section-signin" className="section-signin">
      <div className="logo-liga">
            <img src={LogoLiga} alt="logo-liga" />
      </div>
        <div className="container-form-signin">
          <Form
            id="first-form"
            className="form-signin"
          >
            <span className="text-signin">Cadastre-se</span>

            <FormInput 
              name="name" 
              title={"Nome Completo"} 
              required={true}
              placeHolder={'Seu nome...'}
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
            
            <FormInput 
              name="date"
              title={"Data de Nascimento"}   
              required={true}
              type="date"
              value={date_of_birth}
              onChange={(e) => { setDateOfBirth(e.target.value) }}
            />
            
            <FormInput 
              name="phone"
              title={"Celular"}  
              required={true}
              placeHolder={'(00)00000-0000...'}
              value={phone}
              onChange={(e) => { setPhone(e.target.value) }}
            />

            <FormInput
              name="course"
              title={"Curso"}
              placeHolder={'Seu curso...'}
              value={course}
              onChange={(e) => { setCourse(e.target.value) }}  
            />

            <FormInput
              name="job"
              title={"Emprego"}  
              placeHolder={'Seu emprego...'}
              value={occupation}
              onChange={(e) => { setOccupation(e.target.value) }}
            />

            <Button width={14} content={'Próximo'} onClick={changeForm} />
          </Form>
          
          <Form
            id="second-form"
            className="form-signin"
            ref={formRef}
            onSubmit={handleSubmitForm}
          >
            <div className="title-form">
              <i onClick={backToFirstForm} className="fas fa-arrow-left"></i>
              <span className="text-signin">Cadastre-se</span>

              <p>Agora só falta seu e-mail e senha!</p>
            </div>

            <FormInput
              name="email"
              title={"E-mail"} 
              type={"email"}   
              required={true} 
              placeHolder={'Seu e-mail...'}
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />

            <FormInput
              name="password"
              title={"Senha"}
              type={"password"}
              required={true}
              placeHolder={'Sua senha...'}
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />

            <Button
              content={"Cadastrar"}
              width={14}
              type={"submit"}
            />
          </Form>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;