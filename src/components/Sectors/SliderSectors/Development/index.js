import React from 'react';

import ImgSectors from '../../../../assets/img/Img-sectors.png';

import './styles.css';

function Development() {
  return (
    <>
      <div className="development">
        <div className="text-development">
          <h2>Desenvolvimento</h2>
          <p>
            Mercado financeiro é, por definição, um ambiente de compra e venda de valores mobiliários (ações, opções, títulos), câmbio (moedas estrangeiras) e mercadorias (ouro, produtos agrícolas).
          </p>
          <p>
            Nessa negociações, estão envolvidas diversas instituições, que facilitam o encontro entre agentes e regulam e fiscalizam as transações.
          </p>
        </div>
        <div className="img-development">
              <img src={ImgSectors} alt="market" />
        </div>
      </div>
      <div className="clear"></div>
    </>  
  )
}

export default Development;