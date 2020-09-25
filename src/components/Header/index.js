import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import "./styles.css";
import logo from "../../imgs/logo4.png";

class Header extends Component {
    render(){
        return (
            <section id="section-header">
                <header id="headerGeral">
                    <div id="container-logo">
                        <img src={logo} className="logoHeader"></img>
                    </div>
                    <div id="buttons-links">
                        <ul id="list">
                            <li id="item"><Link to='/' className="link">Home</Link></li>
                            <li id="item"><Link to='/sobre' className="link">Quem Somos</Link></li>
                            <li id="item"><Link to='/contato' className="link">Contato</Link></li>
                            <li id="item"><Link to='/servicos' className="link">Serviços</Link></li>
                            <li id="item"><Link to='/eventos' className="link">Eventos</Link></li>
                            <li id="item"><Link to='/login' className="link">Minha conta</Link></li>
                            <li id="item"><Link to='/cadastro' className="link">Cadastre-se</Link></li>
                        </ul>
                    </div>
                    
                </header>

            </section>
            
        );
    }
}

//<li><Link to='/admin'>Painel do admin</Link></li>
//<li><Link to='/usuario'>Painel do usuário</Link></li>

export default Header;