import { combineReducers } from 'redux';

import login from './login/reducer';
import auth from './auth/reducer';

const rootReducer = combineReducers({
  login,
  auth,
});

export default rootReducer;