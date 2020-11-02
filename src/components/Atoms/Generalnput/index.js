import React from 'react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';

import "./styles.css";

class GeneralInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            content: '', 
        }
    }

    handleCKEditorState = (event, editor) => {
        const data = editor.getData();
        this.setState({ content: data})
    }

    render() {

    

        if (this.props.type == 'inputText') {
            return (
                <div id="input-body">
                    <input
                        type="text"
                        className="input-area"
                        value={this.state.text}
                        onChange={e => this.setState({ text: e.target.value })}
                    />
                    <div className="label-body">
                        <label>{this.props.text}</label>
                    </div>
                </div>
            );
        } else if (this.props.type == 'inputEditor') {
            return (
                <div id="input-body-editor">
                    <CKEditor
                        editor={ClassicEditor}
                        onInit={editor => {
                            ///// initializes our application /////
                        }}
                        onChange={this.handleCKEditorState}
                    />
    
                    {console.log(this.state.content)}
                    <div className="label-body">
                        <label>{this.props.text}</label>
                    </div>
                </div>
            );
    }

    
    }

}



export default GeneralInput;