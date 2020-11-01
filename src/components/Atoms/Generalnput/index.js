import React from 'react';

import "./styles.css";

function GeneralInput(props) {
    return(
        <div id="input-body">
            <input type="text" className="input-area"/>
            <div className="label-body">
                <label>{props.text}</label>
            </div>
        </div>
    );
}



export default GeneralInput;