import React from 'react';
import HeaderDashboard from '../../components/HeaderDashboard';
import InfoCardAccount from '../../components/InfoCardAccount';
import GreenButton from '../../components/Atoms/GreenButton';

import "./styles.css";

import users from '../../imgs/icons/users.png';
import moreNews from '../../imgs/icons/more-news.png';
import moreArticles from '../../imgs/icons/more-articles.png';
import news from '../../imgs/icons/news.png';
import articles from '../../imgs/icons/articles.png';
import coins from '../../imgs/icons/coins.png';
import password from '../../imgs/icons/password.png';
import chefia from '../../assets/img/Ellipse2.png';

function AdminPanel() {
  return (
    <section id="admin-panel-page">
      <HeaderDashboard nameButton="Home"/>
      <div className="body-admin-panel">
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
            <div className="button-my-data-config" >
              <GreenButton >
                <h1>Editar Perfil</h1>
              </GreenButton>
            </div>
          </InfoCardAccount>

          <InfoCardAccount typeCard="common" >
            <div className="general-common-account-card">
              <img src={coins}/>
              <h3>Recargas</h3>
            </div>
          </InfoCardAccount>

          <InfoCardAccount typeCard="common">
            <div className="general-common-account-card">
              <img src={articles}/>
              <h3>Artigos</h3>
            </div>
          </InfoCardAccount>

          <InfoCardAccount typeCard="common">
            <div className="general-common-account-card">
              <img src={news}/>
              <h3>Noticias</h3>
            </div>
          </InfoCardAccount>
        
        </div>

        <div className="info-cards-profile">
          <InfoCardAccount typeCard="common">
              <div className="general-common-account-card">
                <img src={password}/>
                <h3>Alterar Senha</h3>
              </div>
          </InfoCardAccount>
            
          <InfoCardAccount typeCard="common">
              <div className="general-common-account-card">
                <img src={users}/>
                <h3>Usuários</h3>
              </div>
          </InfoCardAccount>

          <InfoCardAccount typeCard="common">
            <div className="general-common-account-card">
              <img src={moreArticles}/>
              <h3>Adicionar artigos</h3>
            </div>
          </InfoCardAccount>

          <InfoCardAccount typeCard="common">
            <div className="general-common-account-card">
              <img src={moreNews}/>
              <h3>Adicionar noticias</h3>
            </div>
          </InfoCardAccount>

        </div>
      </div>
    </section>
  );
}

export default AdminPanel;