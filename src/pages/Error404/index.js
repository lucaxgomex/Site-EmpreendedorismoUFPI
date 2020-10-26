import React from 'react';

import avisoImg from '../../imgs/icons/aviso.png';
import './styles.css';

function Error404 () {
    return (
        <div id="pagina-geral">
            <div>
                <img src={avisoImg}/>
                <h1>ERRO 404</h1>
                <h1>PÁGINA NÃO ENCONTRADA!</h1>
            </div>    
        </div>
    );
}

export default Error404;