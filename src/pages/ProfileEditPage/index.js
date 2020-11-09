import React, { useState } from 'react';
import { Form } from '@unform/web';

import { store } from '../../store';

import HeaderDashboard from '../../components/HeaderDashboard';
import Button from '../../components/Atoms/Button';
import FormInput from '../../components/Atoms/FormInput';
import InsertProfileImage from '../../components/Atoms/InsertProfileImage';

import './styles.css';

class ProfileEditPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date_of_birth: '',
      phone: '',
      course: '',
      occupation: '',
    }
  }

  handleFormEditSubmit = () => {
    const profileImage = store.getState().profileImage.image;
    const data = this.state;

    alert("Perfil editado com sucesso!")
  }

  render() {
    return (
      <section id="profile-edit">
        <HeaderDashboard />
        <div className="container-form-edit-profile">
          <Form onSubmit={this.handleFormEditSubmit}>
  
            <InsertProfileImage/>
  
            <FormInput 
              name="name"
              width={22} 
              widthFlag={28}
              title={"Nome Completo"} 
              required={true}
              placeHolder={'Seu nome...'}
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
              
            <FormInput 
              name="date"
              title={"Data de Nascimento"} 
              width={22} 
              widthFlag={34} 
              required={true}
              type="date"
              value={this.state.date_of_birth}
              onChange={(e) => this.setState({
                date_of_birth: e.target.value
              }) }
            />
            
            <FormInput 
              name="phone"
              title={"Celular"} 
              width={22}
              widthFlag={14} 
              required={true}
              placeHolder={'(00)00000-0000...'}
              value={this.state.phone}
              onChange={(e) => this.setState({
                phone: e.target.value
              }) }
            />
  
            <FormInput
              name="course"
              title={"Curso"}
              width={22}
              widthFlag={12}
              placeHolder={'Seu curso...'}
              value={this.state.course}
              onChange={(e) => this.setState({
                course: e.target.value
              }) }  
            />
  
            <FormInput
              name="job"
              title={"Emprego"} 
              width={22} 
              widthFlag={16}
              placeHolder={'Seu emprego...'}
              value={this.state.occupation}
              onChange={(e) => this.setState({
                occupation: e.target.value
              }) }
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


export default ProfileEditPage;