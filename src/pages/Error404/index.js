import React from 'react';
import HeaderDashboard from '../../components/HeaderDashboard';

import avisoImg from '../../imgs/icons/aviso.png';
import './styles.css';

function Error404 () {
    return (
        <div>
            <HeaderDashboard/>
            <div id="body-error-page">
                <div>
                    <img src={avisoImg} alt="warning"/>
                    <h1>ERRO 404</h1>
                    <h1>PÁGINA NÃO ENCONTRADA!</h1>
                </div>    
            </div>
        </div>
    );
}

export default Error404;