import React from 'react';
import axios from '../../configs/apiConfig';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { News } from '../../store/reducers/news/actions';

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
            content: '',
            redirect: true,
        }
    }


    handleCreateNewsSubmit = async() => {
        const { dispatch } = this.props;

        try {

            const schema = Yup.object().shape({
                title: Yup.string().required('É necessário digitar um título para a notícia.'),
                subtitle: Yup.string().required('É necessário digitar um subtítulo para a notícia.'),
                content: Yup.string().required('O conteúdo da notícia não pode ser vazio.'),
            });

            await schema.validate(this.state, {
                abortEarly: false,
            });

            dispatch(News(this.state));
            alert("Notícia criada com sucesso!");
        } catch (err) {
            err.errors.map(error => alert(error))
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
                            <ActionButton
                                content="Cancelar"
                                color="red" className="action-button"
                            />
                            <ActionButton
                                content="Enviar"
                                color="blue" className="action-button"
                                onClick={this.handleCreateNewsSubmit}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default connect()(CreateNews);