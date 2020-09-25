import React, { useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { parse, isDate } from 'date-fns';

import Header from '../../components/Header';
import Button from '../../components/Atoms/Button';
import FormInput from '../../components/Atoms/FormInput';
import LogoLiga from '../../imgs/logo-azul.png';
import './styles.css';

function RegisterPage() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const firstFormData = {
    name,
    date,
    phone,
    course,
    job
  };

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

  function parsedDateString(value, originalValue) {
    const parsedDate = isDate(originalValue)
      ? originalValue
      : parse(originalValue, "yyyy-MM-dd", new Date());

    return parsedDate;
  } 

  async function handleSubmitForm(secondFormdata) {
    const data = Object.assign(firstFormData,secondFormdata)
    const today = new Date();
    
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
                  .email('Digite um e-mail válido')
                  .required('O e-mail é obrigatório'),
        phone: Yup.string().required('Número de telefone é obrigatório'),
        password: Yup.string()
                     .min(8, 'A senha deve ter no mínimo 8 caracteres')
                     .required('A senha é obrigatória'),
        date: Yup.date().transform(parsedDateString).max(today),
        
      })

      await schema.validate(data, {
        abortEarly: false,
      });

      document.location.reload();

    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);
      }
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
              id="name"
              width={22} 
              widthFlag={28}
              title={"Nome Completo"} 
              required={true}
              placeHolder={'Seu nome...'}
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
            
            <FormInput 
              name="date"
              title={"Data de Nascimento"} 
              width={22} 
              widthFlag={34} 
              required={true}
              placeHolder={'dd/mm/aaaa...'}
              value={date}
              onChange={(e) => { setDate(e.target.value) }}
            />
            
            <FormInput 
              name="phone"
              title={"Celular"} 
              width={22}
              widthFlag={14} 
              required={true}
              placeHolder={'(00)00000-0000...'}
              value={phone}
              onChange={(e) => { setPhone(e.target.value) }}
            />

            <FormInput
              name="course"
              title={"Curso"}
              width={22}
              widthFlag={12}
              placeHolder={'Seu curso...'}
              value={course}
              onChange={(e) => { setCourse(e.target.value) }}  
            />

            <FormInput
              name="job"
              title={"Emprego"} 
              width={22} 
              widthFlag={16}
              placeHolder={'Seu emprego...'}
              value={job}
              onChange={(e) => { setJob(e.target.value) }}
            />

            <Button width={14} content={'Próximo'} onClick={changeForm} />
          </Form>
          
          <Form
            id="second-form"
            className="form-signin"
            onSubmit={handleSubmitForm}
          >
            <div className="title-form">
              <i onClick={backToFirstForm} className="fas fa-arrow-left"></i>
              <span className="text-signin">Cadastre-se</span>
            </div>

            <FormInput
              name="email"
              title={"E-mail"} 
              type={"email"} 
              width={22} 
              widthFlag={14} 
              required={true} 
              placeHolder={'Seu e-mail...'}
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
            />

            <FormInput
              name="password"
              title={"Senha"}
              type={"password"}
              width={22}
              widthFlag={14}
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