import React from 'react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';

import "./styles.css";

function GeneralInput(props) {
    if (props.type == 'inputText') {
        return (
            <div id="input-body">
                <input
                    type="text"
                    className="input-area"
                    value={props.value}
                    onChange={props.onChange}
                />
                <div className="label-body">
                    <label>{props.text}</label>
                </div>
            </div>
        );
    } else if (props.type == 'inputEditor') {
        return (
            <div id="input-body-editor">
                <CKEditor
                    editor={ClassicEditor}
                    onInit={editor => {
                        ///// initializes our application /////
                    }}
                    onChange={props.onChange}
                />
                <div className="label-body">
                    <label>{props.text}</label>
                </div>
            </div>
        );
    }
}

export default GeneralInput;