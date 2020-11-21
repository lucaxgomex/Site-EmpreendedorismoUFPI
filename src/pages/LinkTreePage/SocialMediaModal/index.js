import React from 'react';
import Modal from 'react-modal';
import styles from './modal.css';
import './styles.css';
import { Link } from 'react-router-dom';

import facebookIcon from '../../../assets/icons/facebook-icon.png'
import instagramIcon from '../../../assets/icons/instagram-icon.png'
import twiterIcon from '../../../assets/icons/twiter-icon.png'
import closeIcon from '../../../assets/icons/close-icon.png'

Modal.setAppElement('#root');
export default function SocialMediaModal(props){
    const [modalIsOpen,setIsOpen] = [props.modalIsOpen,props.setIsOpen]

  function openModal() {
    setIsOpen(true);
  }
 
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          style={
            {
                content: styles.content,
                overlay: styles.overlay,      
            }
         }
        >
            <div id="modal">
                <div id="div-close">
                    <img 
                        src={closeIcon} 
                        alt="close" 
                        height={35}
                        onClick={(e)=>setIsOpen(false)}
                         />
                </div>

                <div id="div-tittle">
                    <span>
                        Redes Sociais
                    </span>
                </div>

                <div id="div-social-media-links">
                    <Link id="social-media-link"
                          to={{ pathname: "" }}
                          target="_blank"
                    >
                        <div id="logo">
                            <img src={facebookIcon} alt="logo-facebook" height={35} />
                        
                        </div>

                        <span>
                            Facebook
                        </span>
                    </Link>

                    <Link id="social-media-link"
                            to={{ pathname:"https://www.instagram.com/empreendedorismoufpi/"}}
                            target="_blank"
                    >
                        <div id="logo">
                            <img src={instagramIcon} alt="logo-instagram" height={35} />
                        
                        </div>

                        <span>
                            Instagram
                        </span>
                  
                    </Link>

                    <Link id="social-media-link"
                            to={{ pathname:""}}
                            target="_blank"
                    >
                        <div id="logo">
                            <img src={twiterIcon} alt="logo-Twitter" height={35} />
                        
                        </div>

                        <span>
                            Twitter
                        </span>
                        
                    </Link >
                    
                </div>
                
            </div>

        </Modal>
      </div>
    );
}



