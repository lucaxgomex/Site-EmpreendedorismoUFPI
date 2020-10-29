import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form } from '@unform/web';
import axios from '../../configs/apiConfig';

import { Auth } from '../../store/reducers/auth/actions';

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

  login = async() => {
    const { dispatch } = this.props;

    axios.post('/auth/login', this.state).then(response => {
      dispatch(Auth(response.data));
      alert("Logado");
    })
      .catch(() => {
        const errorBox = document.getElementById('error-message-login');
        errorBox.style.display = 'block';
        errorBox.innerHTML = `<span>E-mail ou senha incorreta, tente novamente.</span>`
      });
  }

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
                  width={20}
                  widthFlag={12}
                  title={'E-mail'}
                  placeHolder={'seuemail@com.br'}
                  required={true} 
                  type={'email'}
                  onChange={e => { this.setState({ email: e.target.value }) }}
                  value={this.state.email}
                />

                <FormInput
                  name="password"
                  width={20}
                  widthFlag={12}
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
                <Button width={6} content={'Cadastre-se'} />
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