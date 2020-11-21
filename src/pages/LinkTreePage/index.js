import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import ButtonLink from './ButtonLink';
import FormInput from '../../components/Atoms/FormInput';
import LogoLiga from '../../imgs/logo.png';
import SocialMediaModal from "./SocialMediaModal"
import './styles.css';

export default function LinkTreePage() {
    const [modalIsOpen,setIsOpen] = useState(false)
    return(
        <>
        <div id="div-link-tree">
             <SocialMediaModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
             <div id="container-link-tree">  
                <div id="logo-liga">
                    <img src={LogoLiga} alt="logo-liga" />
                </div>

                <div id="div-ig">
                    <span id="text-ig">@empreendedorismoufpi</span>
                </div>
                

                <div id="div-button-links">
                    
                    <ButtonLink width={32} content={'Redes Sociais'} onClick={(e) => setIsOpen(true)} />

                    <ButtonLink width={32} content={'Sobre a Liga'} link="/sobre" type="link" />

                    <ButtonLink width={32} content={'Contatos'}  link="/contato" type="link" />

                    <ButtonLink width={32} content={'Processo Seletivo'} link="/processo-seletivo" type="link" />

                
                </div>
            </div>
           

        </div>
      </>
    )
}