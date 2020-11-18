import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

function ButtonLink (props) {

    const style = {
        width: props.width + 'vw'
    };


    if ((props.type) === 'link') {
        return (
            <Link to={props.link} 
                type="submit"
                id="container-main-button"
                style={style}
            >
                {props.content}
            </Link>
        );
    } else {
        return (
            <div 
                id="container-main-button" 
                style={style}
                onClick={props.onClick}
            >
                    <span>{props.content}</span>
            </div>
        )
    }
}

export default ButtonLink
