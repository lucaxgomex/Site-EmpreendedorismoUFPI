import React from 'react';
import './styles.css';

function GreenButton(props) {
  return (
    <button id="green-button">
        {props.children}
    </button >
  );
}

export default GreenButton;