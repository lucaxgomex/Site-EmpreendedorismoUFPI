import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

function ButtonLink (props) {

    if ((props.type) === 'link') {
        return (
            <Link to={props.link} 
                type="submit"
                id="container-main-button"
            >
                {props.content}
            </Link>
        );
    } else {
        return (
            <div 
                id="container-main-button" 
                onClick={props.onClick}
            >
                    <span>{props.content}</span>
            </div>
        )
    }
}

export default ButtonLink
