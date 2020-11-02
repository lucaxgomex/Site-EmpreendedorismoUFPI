import React from 'react';

import "./styles.css";

function TextCard(props) {
  return (
    <div className="container-text-card">
      {props.children}
    </div>
  );
}

export default TextCard;