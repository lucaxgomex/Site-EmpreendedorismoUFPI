import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import './styles.css';

function FormInput (props) {
    const inputRef = useRef(null);
    const { fieldName, registerField } = useField(props.name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    const style = {
        width: props.width + 'vw',
        
    }
    const styleFlag = {
        width: (props.widthFlag / 3) + 'vw'
    }

    const styleInput = {
        border: '#000 1px solid'
    }

    if (props.required) {
        return (
            <div id="container-main-formInput" style={style}>
                <div id="line-flags">
                    <div id="container-flag-formInput" style={styleFlag}>
                        <span>{props.title}</span>
                    </div>

                    <div id="flag-required-formInput"></div>

                </div>
                
                <div id="container-input-formInput" style={styleInput}>
                    <input 
                        id="input-formInput" 
                        type={props.type} 
                        placeholder={props.placeHolder}
                        ref={inputRef}
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>
    
            </div>
        )
    }
    else {
        return (
            <div id="container-main-formInput" style={style}>
                <div id="container-flag-formInput" style={styleFlag}>
                    <span>{props.title}</span>
                </div>
                <div id="container-input-formInput" style={styleInput}>
                    <input
                        id="input-formInput"
                        type={props.type}
                        placeholder={props.placeHolder}
                        ref={inputRef}
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>
    
            </div>
        )
        
    }
}

export default FormInput