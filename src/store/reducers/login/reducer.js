const INITIAL_STATE = {
  user: {},
}

const login = (state = INITIAL_STATE, action) => {
  const baseAction = '@login/'
  switch (action.type) {
    case `${baseAction}SIGN_IN_SUCESS`:
      return {
        ...state,
        user: action.payload.login
      }
    default:
      return state;
  }
}

export default login;