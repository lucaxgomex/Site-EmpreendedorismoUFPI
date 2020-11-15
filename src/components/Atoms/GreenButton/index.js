import React from 'react';
import './styles.css';

function GreenButton(props) {
  return (
    <div id="green-button">
        {props.children}
    </div >
  );
}

export default GreenButton;