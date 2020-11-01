import React, { useState } from 'react';

import './styles.css';
import InsertIcon from '../../imgs/icons/inserir.png';

function InsertImage () {

    const [image, setImage] = useState([]);
    const [previewImage, setPreviewImage] = useState([]);

    function handleSelectImage(event) {
        if (!event.target.files) {
            return;
        }

        const selectedImage = Array.from(event.target.files) 

        setImage(selectedImage);

        const selectedImagePreview = selectedImage.map(myImage => {
            return URL.createObjectURL(myImage);
        })

        setPreviewImage(selectedImagePreview);
    }

    return (
        <div id="input-image-block">
            <div id="insert-image-body">
                {previewImage.map(myImage => {
                    return (
                        <img key={myImage} src={myImage} alt={myImage} className="selected-image-preview"/>
                    )
                })}

                <label htmlFor="image[]" className="new-image">
                    <img src={InsertIcon}/>
                    <h2>Inserir Imagem</h2>
                </label>
            </div>
            <input onChange={handleSelectImage} type="file" id="image[]"/>
        </div>   
    );
}

export default InsertImage;