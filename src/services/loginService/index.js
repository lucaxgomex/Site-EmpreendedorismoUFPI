import axios from '../../configs/apiConfig';
import { Auth } from '../../store/reducers/auth/actions';

async function loginService(data, dispatch) {
  axios.post('/auth/login', data).then(response => {
    dispatch(Auth(response.data));
    alert("Logado");
  })
    .catch(() => {
      const errorBox = document.getElementById('error-message-login');
      errorBox.style.display = 'block';
      errorBox.innerHTML = `<span>E-mail ou senha incorreta, tente novamente.</span>`
    });
}

export default loginService;