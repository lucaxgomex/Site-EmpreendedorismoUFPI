import React from 'react';

import './styles.css';

function ConselhoCard(props) {
    return (
        <div id="body-conselho-card">
            {props.children}
        </div>
    );
}

export default ConselhoCard;