import { combineReducers } from 'redux';

import login from './login/reducer';
import auth from './auth/reducer';
import article from './article/reducer';
import news from './news/reducer';
import profileImage from './profileImage/reducer';

const rootReducer = combineReducers({
  login,
  auth,
  article,
  news,
  profileImage,
});

export default rootReducer;