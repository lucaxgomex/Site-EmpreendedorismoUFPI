import React from 'react';
import SmallLogo from "../../assets/icons/small-logo.png";

import ActionButton from '../Atoms/ActionButton';

import './styles.css';

export default function HeaderDashboard() {
  return (
    <header id="header-dashboard">
      <div id="header-dashboard-container">
        <div className="header-dashboard-searchbar">
          <div className="logo-container">
            <img src={SmallLogo} alt="small logo"/>
          </div>
          <div className="search-bar-container">
            <input
              type="text"
              className="search-bar"
              placeholder="Pesquisar artigos ou notícias..."
            />
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="header-dashboard-buttons">
          <ActionButton
            content="Perfil"
            color="blue"
            onClick={() => alert("Funcionado!")}
          />

          <ActionButton
            content="Sair"
            color="red"
          />
        </div>
      </div>
    </header>
  );
}