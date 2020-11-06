import React, { useState } from 'react';
import { Form } from '@unform/web';

import Header from '../../../components/Header';
import Button from '../../../components/Atoms/Button';
import FormInput from '../../../components/Atoms/FormInput';
import LogoLiga from '../../../imgs/logo-azul.png';

import Shield from '../../../assets/icons/mdi_shield-check.png';

import './styles.css';


function PasswordRecovery() {

  const [email, setEmail] = useState('');

  // function hideForm() {
  //   const second_form = document.getElementById('second-form');

  //   second_form.style.display = 'none';
  // }
  
  return (
    <div className="recovery-password">
      <Header/>
      <section id="section-recovery-password" className="section-recovery-password">
      <div className="logo-liga">
            <img src={LogoLiga} alt="logo-liga" />
      </div>
        <div className="container-form-password-recovery">
          <Form
            id="first-form"
            className="form-password-recovery"
          >
            <img src={Shield} alt="yellow-shield" />
            <span className="text-password-recovery">Recuperar senha</span>

            <div className="recovery-text">
              <span>Problemas para entrar?</span>
              <p>Insira o seu e-mail e enviaremos um link para você voltar a acessar sua conta.</p>
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

            <Button
              content={"Recuperar"}
              width={14}
              type={"submit"}
            />
          </Form>
        </div>
      </section>
    </div>
  );
}

export default PasswordRecovery;