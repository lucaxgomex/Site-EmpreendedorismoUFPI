import React, { useEffect } from 'react';

import { store } from '../../store';
import HeaderDashboard from '../../components/HeaderDashboard';

import './styles.css';

function ArticlePage() {
  
  const data = store.getState();

  const titleArticle = data.article.title;
  const article = data.article.content;

  useEffect(renderArticle, []);

  function renderArticle() {
    document.getElementById("content-article").innerHTML = article;
  }

  return (
    <section id="article-page">
      <HeaderDashboard />
      <div id="container-article">
        <div id="title-article"><h1>{titleArticle}</h1></div>
        <div id="content-article"></div>
      </div>
    </section>
  )
}

export default ArticlePage;