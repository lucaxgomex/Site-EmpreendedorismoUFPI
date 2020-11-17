import React from 'react';
import axios from '../../configs/apiConfig';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { store } from '../../store';

import { Article } from '../../store/reducers/article/actions';

import HeaderDashboard from '../../components/HeaderDashboard';
import GeneralInput from '../../components/Atoms/Generalnput';
import InsertImage from '../../components/InsertImage';
import ActionButton from '../../components/Atoms/ActionButton'

import './styles.css';

class CreateArticle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
        }
    }

    handleCKEditorState = (event, editor) => {
        const data = editor.getData();
        this.setState({ content: data})
    }

    handleCreateArticleSubmit = async() => {
        const { dispatch } = this.props;

        try {
            const schema = Yup.object().shape({
                title: Yup.string().required('É necessário digitar um título para o artigo.'),
                content: Yup.string().required('O conteúdo do artigo não pode ser vazio.'),
            });

            await schema.validate(this.state, {
                abortEarly: false,
            });

            dispatch(Article(this.state));
            this.props.history.push('/article-preview');
        } catch (err) {
            err.errors.map(error => alert(error))
        }

    }

    render() {
        return (
            <section id="create-news">
                <HeaderDashboard nameButton="Home"/>
                <div id="create-news-body">
                    <div className="central create-article-central"> 
                        <GeneralInput
                            text="Titulo"
                            type="inputText"
                            value={this.state.title}
                            onChange={(e) => this.setState({ title: e.target.value })}
                        />
                        <InsertImage/>
                        <GeneralInput
                            text="Conteúdo"
                            type="inputEditor"
                            onChange={this.handleCKEditorState}
                        />
                        
                        <div className="buttons-create-article">
                            <ActionButton
                                content="Cancelar" 
                                color="red"
                                className="action-button"
                            />
                            <ActionButton
                                content="Enviar"
                                color="blue" 
                                onClick={this.handleCreateArticleSubmit}
                                className="action-button"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect()(CreateArticle);
