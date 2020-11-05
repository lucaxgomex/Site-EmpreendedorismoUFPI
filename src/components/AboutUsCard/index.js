import React from 'react';
import "./styles.css";


function AboutUsCard(props) {
    return (
        <section className="section-about-us" id={props.idSection}>
            <div className="tittle-text" id={props.idTitle}>
                <h2>{props.title}</h2>
            </div>
            <div className="div-columns" id={props.idColumns}>
                    <p className="primary-column">A Liga de empreendedorismo da UFPI nasceu no segundo semestre de 2018 com o objetivo de disseminar o conhecimento sobre mercado financeiro e unir uma rede de investidores em torno da proposta.</p>
                    <p className="secundary-column">Formada por alunos e professores da Universidade Federal do Piauí, o projeto ganhou cada vez mais adesão de piauienses, especialmente entre os 18 e 34 anos, que formam 83% do público.</p>
            </div>
        </section>
    );
}


export default AboutUsCard;