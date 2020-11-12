import React from 'react';
import { Form } from '@unform/web';

import HeaderDashboard from '../../components/HeaderDashboard';
import FormInput from '../../components/Atoms/FormInput';
import Button from '../../components/Atoms/Button';

import padlock from '../../imgs/icons/cadeado.png';

import './styles.css';

class PasswordChangePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      old_password: '',
      new_password: '',
      new_password_confirmation: '',
    }
  }

  render() {
    return (
      <section id="password-change">
        <HeaderDashboard />

        <div className="container-form-password-change">
          <div className="container-form-password-padlock">
            <img src={padlock} alt="cadeado" />
          </div>
          <h3>Alterar senha</h3>
          <Form>
            <FormInput 
                name="password"
                width={22} 
                widthFlag={28}
                title={"Senha antiga"} 
                required={true}
                placeHolder={'*******'}
                type={'password'}
                value={this.state.old_password}
                onChange={(e) => this.setState({ old_password: e.target.value })}
              />

            <FormInput
              name="new-password"
              width={22} 
              widthFlag={28}
              title={"Nova senha"} 
              required={true}
              placeHolder={'*******'}
              type={'password'}
              value={this.state.new_password}
              onChange={(e) => this.setState({ new_password: e.target.value })}
            />

            <FormInput 
              name="new-password-confirmation"
              width={22} 
              widthFlag={28}
              title={"Confirmar senha"} 
              required={true}
              placeHolder={'*******'}
              type={'password'}
              value={this.state.new_password_confirmation}
              onChange={(e) => this.setState({ new_password_confirmation: e.target.value })}
            />

            <Button
              content={"Salvar"}
              width={18}
              type={"submit"}
            />
  
            <Button
              content={"Cancelar"}
              width={18}
              type={"submit"}
            />   
          </Form>
        </div>  
      </section>
    );
  }
}

export default PasswordChangePage;