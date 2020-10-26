import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import AuthContext from '../../contexts/auth';

import Header from '../../components/Header';
import Button from '../../components/Atoms/Button';
import FormInput from '../../components/Atoms/FormInput';
import LogoLiga from '../../imgs/logo-azul.png';

import './styles.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const { signed, user, signIn } = useContext(AuthContext);

  function handleSubmitLogin() {
    signIn(email, password);
    console.log(signed)
  }

  // setTimeout(() => {
  //   if (signed) {
  //     history.push('/');
  //   }
  // }, 2000);

  return (
    <>
      <Header />
      <section id="section-login">
        <div id="container-form-login">
          <div id="form-login">
            <span id="text-entrar">Entrar</span>

            <Form
              onSubmit={handleSubmitLogin}
            >
              <FormInput
                name="userEmail"
                width={20}
                widthFlag={12}
                title={'E-mail'}
                value={email}
                placeHolder={'seuemail@com.br'}
                required={true} 
                type={'email'}
                onChange={(e) => { setEmail(e.target.value) }}
              />

              <FormInput
                name="passwordLogin"
                width={20}
                widthFlag={12}
                title={'Senha'}
                value={password}
                placeHolder={'*****'}
                required={true}
                type={'password'}
                onChange={(e) => { setPassword(e.target.value) }}
              />
              
              <Button width={15} content={'Entrar'} type="submit" ></Button>
            </Form>
            
            <Link to="/recuperar-senha" className="forgot-password">Esqueceu a senha?</Link>

            <div className="create-account-wrapper">
              <span>Você ainda não tem sua conta?</span>
              <Button width={6} content={'Cadastre-se'} />
            </div>
          </div>
        </div>
        <div className="logo-liga-login">
            <img src={LogoLiga} alt="logo-liga" />
        </div>
      </section>
    </>
  )
}

export default LoginPage;