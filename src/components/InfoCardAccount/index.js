import React from 'react';
import './styles.css';

function InfoCardAccount(props) {
  return (
    <section className="info-card" id={props.typeCard}>
      <div className="body-info-card">
        {props.children}
      </div>
    </section >
  );
}

export default InfoCardAccount;