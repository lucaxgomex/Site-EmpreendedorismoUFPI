import React from 'react';

import HeaderDashboard from '../../components/HeaderDashboard';
import GeneralInput from '../../components/Atoms/Generalnput';
import InsertImage from '../../components/InsertImage';
import ActionButton from '../../components/Atoms/ActionButton'

import './styles.css';

function CreateArticle() {
  return (
    <section id="create-news">
        <HeaderDashboard />
        <div id="create-news-body">
            <div className="central create-article-central"> 
                <GeneralInput text="Titulo" type="inputText"/>
                <InsertImage/>
                <GeneralInput text="Conteúdo" type="inputEditor" />
                
                <div className="buttons-create-news">
                    <ActionButton content="Cancelar" color="red" className="action-button"/>
                    <ActionButton content="Enviar" color="blue" className="action-button"/>
                </div>
            </div>
        </div>
    </section>
);
}

export default CreateArticle;
