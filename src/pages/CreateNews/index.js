import React from 'react';
import HeaderDashboard from '../../components/HeaderDashboard';
import GeneralInput from '../../components/Atoms/Generalnput';
import InsertImage from '../../components/InsertImage';

import "./styles.css";
import ActionButton from '../../components/Atoms/ActionButton';

function CreateNews () {
    return (
        <div>
            <HeaderDashboard />
            <div id="create-news-body">
                <div className="central"> 
                    <GeneralInput text="Titulo"/>
                    <GeneralInput text="Subtitulo"/>
                    <InsertImage/>
                    <GeneralInput text="Conteúdo"> 

                    </GeneralInput>
                    <div className="buttons">
                        <ActionButton content="Cancelar" color="red" className="action-button"/>
                        <ActionButton content="Enviar" color="blue" className="action-button"/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CreateNews;