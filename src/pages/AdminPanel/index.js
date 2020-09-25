import React from 'react';
import {Link} from 'react-router-dom'

function AdminPanel() {
  return (
    <div>
      <h2>Painel do admin</h2>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/sobre'>Quem Somos!</Link></li>
        <li><Link to='/contato'>Contato</Link></li>
        <li><Link to='/servicos'>Serviços</Link></li>
        <li><Link to='/eventos'>Eventos</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/cadastro'>Cadastro</Link></li>
        <li><Link to='/admin'>Painel do admin</Link></li>
        <li><Link to='/usuario'>Painel do usuário</Link></li>
      </ul>
    </div>
  );
}

export default AdminPanel;