import React from 'react';
import axios from '../../configs/apiConfig';
import { connect } from 'react-redux';

import HeaderDashboard from '../../components/HeaderDashboard';
import GeneralInput from '../../components/Atoms/Generalnput';
import InsertImage from '../../components/InsertImage';
import ActionButton from '../../components/Atoms/ActionButton';

import "./styles.css";

class CreateNews extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            subtitle: '',
            content: ''
        }
    }

    handleCKEditorState = (event, editor) => {
        const data = editor.getData();
        this.setState({ content: data})
    }

    render() {
        return (
            <section id="create-news">
                <HeaderDashboard />
                <div id="create-news-body">
                    <div className="central"> 
                        <GeneralInput
                            text="Titulo"
                            type="inputText"
                            value={this.state.title}
                            onChange={(e) => this.setState({ title: e.target.value })}
                        />
                        <GeneralInput
                            text="Subtitulo"
                            type="inputText"
                            value={this.state.subtitle}
                            onChange={(e) => this.setState({ subtitle: e.target.value })}    
                        />
                        <InsertImage/>
                        <GeneralInput
                            text="Conteúdo"
                            type="inputEditor" 
                            onChange={this.handleCKEditorState}
                        />
                        
                        <div className="buttons-create-news">
                            <ActionButton content="Cancelar" color="red" className="action-button"/>
                            <ActionButton content="Enviar" color="blue" className="action-button"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default connect()(CreateNews);