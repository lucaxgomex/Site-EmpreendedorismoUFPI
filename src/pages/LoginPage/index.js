import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from '@unform/web';

import loginService from '../../services/loginService';

import Header from '../../components/Header';
import Button from '../../components/Atoms/Button';
import FormInput from '../../components/Atoms/FormInput';
import LogoLiga from '../../imgs/logo-azul.png';

import './styles.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  login = () => {
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