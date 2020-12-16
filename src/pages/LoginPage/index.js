import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from '@unform/web';
import CryptoJS from 'crypto-js';
import loginService from '../../services/loginService';

import Header from '../../components/Header';
import Button from '../../components/Atoms/Button';
import FormInput from '../../components/Atoms/FormInput';
import LogoLiga from '../../imgs/logo-azul.png';

import './styles.css';

import BLC from '../../services/BCL-v1.0/main'

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }


  login = async () => {
    let array = JSON.stringify(['/x0053', '/x8732', '/x7833', '/x875656', '/x73382', '/x78323',
    '/x83274', '/x838263', '/x98323', '/x93823']);

    let arrayCripto = CryptoJS.AES.encrypt(array, 'TESTE').toString();

    let clientKey = await BLC.init(arrayCripto);

    let serverKey = BLC.changeKeys(clientKey);

    const data = this.state;
    const { dispatch } = this.props;

    loginService(data, dispatch);
  };

  render() {
    return (
      <>
        <Header />
        <section id="section-login">
          <div id="container-form-login">
            <div id="form-login">
              <span id="text-entrar">Entrar</span>

              <Form
                onSubmit={this.login}
              >
                <FormInput
                  name="email"
                  title={'E-mail'}
                  placeHolder={'seuemail@com.br'}
                  required={true} 
                  type={'email'}
                  onChange={e => { this.setState({ email: e.target.value }) }}
                  value={this.state.email}
                />

                <FormInput
                  name="password"
                  title={'Senha'}
                  value={this.state.password}
                  placeHolder={'*****'}
                  required={true}
                  type={'password'}
                  onChange={e => { this.setState({ password: e.target.value }) }}
                />

                <div id="error-message-login">
                </div>
                
                <Button width={15} content={'Entrar'} type="submit" ></Button>
              </Form>

              
              <Link to="/recuperar-senha" className="forgot-password">Esqueceu a senha?</Link>

              <div className="create-account-wrapper">
                <span>Você ainda não tem sua conta?</span>
                <Button type="link" to="/cadastro" content={'Cadastre-se'} onClick=""/>
              </div>
            </div>
          </div>
          <div className="logo-liga-login">
              <img src={LogoLiga} alt="logo-liga" />
          </div>
        </section>
      </>
    );
  }
}

export default connect()(LoginPage);