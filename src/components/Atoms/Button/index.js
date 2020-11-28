import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Button (props) {

    if ((props.type) === 'submit') {
        return (
            <button
                type="submit"
                id="container-main-button"
            >
                {props.content}
            </button>
        );
    } else if ((props.type) === 'link') {
        return (
            <Link
                to={props.to}
                id="container-main-button"
            >
                <span>{props.content}</span>
            </Link>
        );
    } else {
        return (
            <button 
                id="container-main-button" 
                type="button"
                onClick={props.onClick}
            >
                <span>{props.content}</span>
            </button>
        )
    }
}

export default Button
