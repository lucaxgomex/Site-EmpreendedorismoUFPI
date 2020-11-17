import axios from '../../configs/apiConfig';

async function submitForm(formData) {
  const { name, email, password, date_of_birth, phone, course, occupation } = formData;

  try {
    await axios.post('auth/register', {
      name,
      email,
      password,
      date_of_birth,
      phone,
      course,
      occupation,
      "is_superuser": false,
      "is_active": true,
      "user_type": "1"
    });

  } catch (err) {
    console.log('Erro na conexão com o servidor');
  }
}

export default submitForm;