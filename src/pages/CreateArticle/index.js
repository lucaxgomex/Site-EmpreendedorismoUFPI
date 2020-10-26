import React, { useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
import { Form } from '@unform/web';

import HeaderDashboard from '../../components/HeaderDashboard';
import FormInput from '../../components/Atoms/FormInput';

import './styles.css';

function CreateArticle() {
  const [title, setTitle] = useState('');

  
  return (
    <>
      <HeaderDashboard />
      <section id="create-article">

        <div className="create-article-container">

          <div className="create-article-title">
            
          </div>
          <CKEditor
            editor={ClassicEditor}
          />
        </div>
      </section>
    </>
  );
}

export default CreateArticle;
