import React from 'react'
import './styles.css'

function Button (props) {

    const style = {
        width: props.width + 'vw'
    };


    if ((props.type) == 'submit') {
        return (
            <button
                type="submit"
                id="container-main-button"
                style={style}
            >
                {props.content}
            </button>
        );
    } else {
        return (
            <div 
                id="container-main-button" 
                style={style}
                onClick={props.onClick}
            >
                {props.content}
            </div>
        )
    }
}

export default Button
