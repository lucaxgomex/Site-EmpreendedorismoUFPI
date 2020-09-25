import React from 'react';
import './styles.css';

import logo from "../../imgs/logo.png";

function InitialAbout() {
    return (
        <section id="section">
            <div id="container-logo-initial">
                <img src={logo} className="logoHeader"></img>
            </div>
            <p id="text-title-initial">ATRÁS DE DESAFIOS</p><br></br>
            <span id="text-initial">SOMOS A PRIMEIRA  LIGA DE EMPREENDEDORISMO E MERCADO FINANCEIRO DO PIAUÍ,</span>
            <span id="text-initial">QUE BUSCA TRANSFORMAR A REALIDADE DO NOSSO ESTADO</span>
        </section>
    )
}

export default InitialAbout