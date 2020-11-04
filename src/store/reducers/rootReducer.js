import { combineReducers } from 'redux';

import login from './login/reducer';
import auth from './auth/reducer';
import article from './article/reducer';

const rootReducer = combineReducers({
  login,
  auth,
  article,
});

export default rootReducer;