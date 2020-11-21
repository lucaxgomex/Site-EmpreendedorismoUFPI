import React from 'react';
import { connect } from 'react-redux';

import { ProfileImage } from '../../../store/reducers/profileImage/actions';

import placeholderProfile from '../../../imgs/icons/placeholder_profile.jpg';

import './styles.css';

class InsertProfileImage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      image: placeholderProfile,
      previewImage: placeholderProfile,
    }
  }

  handleInputImageChange = async (event) => {
    const { dispatch } = this.props;

    if (!event.target.files) {
      return;
    }

    const selectedImage = event.target.files[0];
    const selectedImagePreview = URL.createObjectURL(selectedImage);

    this.setState({ image: selectedImagePreview, previewImage: selectedImagePreview });

    dispatch(ProfileImage(this.state.image));
  }
  
  render() {
    return (
      <div id="insertProfileImage-block">
  
        <label htmlFor="profileImage-input">
          <div className="profileImage-container">
            <img src={this.state.previewImage} alt="profile"/>
          </div>
          <div id="changeImage-button">
            <i className="fas fa-pen"></i>
          </div>
        </label>
  
        <input onChange={this.handleInputImageChange} type="file" id="profileImage-input"/>
      </div>
    );
  }
}


export default connect()(InsertProfileImage);