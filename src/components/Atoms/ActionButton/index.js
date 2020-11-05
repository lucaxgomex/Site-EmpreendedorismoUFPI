import React from 'react';

import './styles.css';

export default function ActionButton({ content, color, onClick }) {

  const styleRed = {
    backgroundColor: '#EB5757'
  } 

  const styleBlue = {
    backgroundColor: '#313A8A'
  }

  if (color == 'red') {
    return (
      <button
        id="action-button"
        style={styleRed}
      >
        {content}
      </button>
    );
  } else {
    return (
      <button
        id="action-button"
        style={styleBlue}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

}