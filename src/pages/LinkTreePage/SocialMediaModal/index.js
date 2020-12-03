import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
import './styles.css';
import { Link } from 'react-router-dom';

import facebookIcon from '../../../assets/icons/facebook-icon.png'
import instagramIcon from '../../../assets/icons/instagram-icon.png'
import twiterIcon from '../../../assets/icons/twiter-icon.png'
import closeIcon from '../../../assets/icons/close-icon.png'

Modal.setAppElement('#root');

export default function SocialMediaModal(props){
    const [width,setWidth] = useState(window.innerWidth);

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [window.innerWidth])


    const styles = {
        content: {
          backgroundColor: '#FAF8F8',
          margin: '0',
          padding: '10px 0',
          borderRadius: '12px',
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }
      }

    const [modalIsOpen,setIsOpen] = [props.modalIsOpen,props.setIsOpen]


  function openModal() {
    setIsOpen(true);
  }
 
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div id="div-modal" >
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
                            to={{ pathname:"https://twitter.com/empreendeufpi?s=11"}}
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



