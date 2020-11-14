import React from 'react'
import './styles.css'

function Button (props) {

    const style = {
        width: props.width + 'vw'
    };


    if ((props.type) === 'submit') {
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
            <button 
                id="container-main-button" 
                type="button"
                style={style}
                onClick={props.onClick}
            >
                <span>{props.content}</span>
            </button>
        )
    }
}

export default Button
