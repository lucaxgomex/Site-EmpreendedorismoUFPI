import React from 'react';
import Modal from 'react-modal';
import { Form } from '@unform/web';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { store } from '../../store';

import { ArticleInfo } from '../../store/reducers/articleInfo/actions';

import ActionButton from '../../components/Atoms/ActionButton';
import FormInput from '../../components/Atoms/FormInput';

import styles from './modal.css';
import './styles.css';

Modal.setAppElement('#root');
class ConfirmationModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            category: '',
            value: '',
        }
    }

    handlePostArticle = async() => {
        const { dispatch } = this.props;

        try {
            const schema = Yup.object().shape({
                category: Yup.string().required('Você deve selecionar uma categoria'),
            });

            await schema.validate(this.state, {
                abortEarly: false,
            });

            dispatch(ArticleInfo(this.state));
            
            const article = store.getState().article;

            const data = {
                title: article.title,
                content: article.content,
                category: this.state.category,
                value: this.state.value
            }
            
            console.log(data);

            alert("Tudo certo!")
        } catch (err) {
            err.errors.map(error => alert(error))
        }
    }

    render() {
        return (
            <div id="modal">
                <ActionButton
                  content="Confirmar"
                  color="blue" 
                  onClick={() => this.setState({ modalIsOpen: true })}
                  className="action-button"
                />

                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={() => this.setState({ modalIsOpen: false })}
                    style={
                        {
                            content: styles.content,
                            overlay: styles.overlay,
                        }
                    }
                >
                    <div className="modal-container-block">
                        
                        <i className="fas fa-times" onClick={() => this.setState({ modalIsOpen: false })}></i>
                        

                        <div className="modal-container-wrapper">
                            <h2>Você realmente deseja publicar esse artigo?</h2>

                            <div className="card">

                            </div>

                            <Form>
                                <FormInput 
                                    name="category"
                                    width={22} 
                                    widthFlag={28}
                                    title={"Categoria"} 
                                    required={true}
                                    placeHolder={'...'}
                                    value={this.state.category}
                                    onChange={(e) =>  this.setState({ category: e.target.value }) }
                                />

                                <FormInput 
                                    name="value"
                                    width={22} 
                                    widthFlag={28}
                                    title={"Valor"} 
                                    required={true}
                                    placeHolder={'...'}
                                    value={this.state.value}
                                    onChange={(e) =>  this.setState({ value: e.target.value }) }
                                />
                            </Form>

                            <div className="buttons-modal">
                                <ActionButton
                                    content="Cancelar"
                                    color="red" 
                                    onClick={() => this.setState({ modalIsOpen: false })}
                                    className="action-button"
                                />

                                <ActionButton
                                    content="Publicar"
                                    color="blue" 
                                    onClick={this.handlePostArticle}
                                    className="action-button"
                                />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default connect()(ConfirmationModal);