import React from 'react';
import './styles.css';

function Footer () {
    return (
        <section id="section-footer">
            <div id="container-redes">
                <span id="container-redes-text">Teresina, Piauí, Brasil</span>
                <div id="container-redes-item">
                    <div id="icon-container-redes-item-phone"></div>
                    <span id="container-redes-item-text">(86) 99485-1197</span>
                </div>
                <div id="container-redes-item">
                    <div id="icon-container-redes-item-twitter"></div>
                    <span id="container-redes-item-text">@empreendedorismoufpi</span>
                </div>
                <div id="container-redes-item">
                    <div id="icon-container-redes-item-instagram"></div>
                    <span id="container-redes-item-text">@empreendedorismoufpi</span>
                </div>
            </div>
            <div id="container-contato">
                <span id="container-contato-text">Contato</span>
                <div id="container-form-footer">
                    <div id="container-item-form-footer">
                        <div id="container-input-small-form-footer">
                            <input id="input" placeholder="Nome"></input>
                        </div>
                        <div id="container-input-small-form-footer">
                            <input id="input" placeholder="Telefone"></input>
                        </div>
                    </div>

                    <div id="container-item-form-footer">
                        <div id="container-input-form-footer">
                            <input id="input" placeholder="Email"></input>
                        </div>
                    </div>

                    <div id="container-item-big-form-footer">
                        <div id="container-input-big-form-footer">
                            <textarea id="input" placeholder="Mensagem"/>
                        </div>
                    </div>

                    <div id="container-item-form-button">
                        FALE CONOSCO
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Footer