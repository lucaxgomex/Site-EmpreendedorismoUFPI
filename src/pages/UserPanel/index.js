import React from 'react';
import GreenButton from '../../components/Atoms/GreenButton';
import HeaderDashboard from '../../components/HeaderDashboard';
import InfoCardAccount from '../../components/InfoCardAccount';
import logo from '../../imgs/logo.png';
import coins from '../../imgs/icons/coins.png';
import password from '../../imgs/icons/password.png';
import chefia from '../../assets/img/Ellipse2.png';
import './styles.css';

function UserPanel() {
  return (
    <section id="profile-user-page">
      <HeaderDashboard/>
      <div className="body-profile-user">
        <div className="info-cards-profile">
          <InfoCardAccount typeCard="my-data">
            <h1>Meus dados</h1>
            <div className="data-with-image-my-data-card">
              <img src={chefia}/>
              <div className="data-without-image">
                <h2>André Oliveira</h2>
                <p>andreluisoliveira@gmail.com</p>
              </div>
            </div>
            <div className="button-my-data-config">
              <GreenButton >
                <h1>Editar Perfil</h1>
              </GreenButton>
            </div>
          </InfoCardAccount>
          <InfoCardAccount typeCard="common">
            <h1>Saldo</h1>
            <div className="infos-common-account-card">
              <img src={coins}/>
              <strong>1M</strong>
            </div>
            <div className="button-common-account-card">
              <GreenButton >
                <h1>Recarregar</h1>
              </GreenButton>
            </div>
          </InfoCardAccount>
          <InfoCardAccount typeCard="common">
            <div className="final-common-account-card">
              <img src={password}/>
              <h3>Alterar Senha</h3>
            </div>
          </InfoCardAccount>
          <img src={logo} className="image-panel-user"/>
        </div>
      </div>
    </section >
  );
}

export default UserPanel;

