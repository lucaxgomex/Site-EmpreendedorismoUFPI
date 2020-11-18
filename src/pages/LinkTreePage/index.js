import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import ButtonLink from './ButtonLink';
import FormInput from '../../components/Atoms/FormInput';
import LogoLiga from '../../imgs/logo.png';

import './styles.css';

export default function LinkTreePage() {

    return(
        <>
        <div id="div-link-tree">
            <div id="container-link-tree">  

                <div id="logo-liga">
                    <img src={LogoLiga} alt="logo-liga" />
                </div>

                <div id="div-ig">
                    <span id="text-ig">@empreendedorismoufpi</span>
                </div>
                

                <div id="div-button-links">
                    
                    <ButtonLink width={32} content={'Redes Sociais'}  />

                    <ButtonLink width={32} content={'Sobre a Liga'} link="/about" type="link" />

                    <ButtonLink width={32} content={'Contatos'}  link="/contact" type="link" />

                    <ButtonLink width={32} content={'Processo Seletivo'} link="/processo-seletivo" type="link" />

                
                </div>
            </div>
           

        </div>
      </>
    )
}