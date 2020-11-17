import React, { useEffect } from 'react';
import { store } from '../../store';

import HeaderDashboard from '../../components/HeaderDashboard';
import ActionButton from '../../components/Atoms/ActionButton';
import ConfirmationModal from '../../components/ConfirmationModal';

import userPhoto from '../../imgs/kauezin.jpg';

import './styles.css';

function ArticlePreviewPage() {
  
  const data = store.getState();

  const titleArticle = data.article.title;
  const article = data.article.content;

  useEffect(renderArticle, []);

  function renderArticle() {
    document.getElementById("content-text-article").innerHTML = article;
  }

  return (
    <section id="article-page">
      <HeaderDashboard nameButton="Home"/>
    
      <div id="container-article">
        <div id="title-article">
          <h1>{titleArticle}</h1>
          <div className="user-info">
            <img src={userPhoto} alt="user"/>
            <span>Kauê Cavalcante - 07/11/2020</span>
          </div>
        </div>

        <div id="content-article-wrapper">
          <div className="article-bg"></div>
          <div id="content-text-article"></div>
        </div>
        
        <div className="buttons-confirm-creation">
          <ActionButton
              content="Cancelar" 
              color="red"
              onClick={() => {}}
              className="action-button"
          />
          <ConfirmationModal />
        </div>           
      </div>

    </section>
  )
}

export default ArticlePreviewPage;