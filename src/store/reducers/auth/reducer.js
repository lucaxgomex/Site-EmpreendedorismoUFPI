const INITIAL_STATE = {
  accessToken: '',
  refreshToken: ''
};

const auth = (state = INITIAL_STATE, action) => {
  const baseAction = '@auth/';
  switch (action.type) {
    default:
      return state;
    case `${baseAction}SET_TOKEN`:
      return {
        ...state,
        accessToken: action.payload.auth.accessToken,
        refreshToken: action.payload.auth.refreshToken
      };
  }
}

export default auth;