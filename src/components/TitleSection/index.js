import React from 'react';
import "./styles.css";


function TitleSection(props) {
    return (
        <div className="container">
            <h2>{props.title}</h2>
            <hr/>
        </div>
    );
}

export default TitleSection;