const INITIAL_STATE = {
  image: '',
}

const profileImage = (state = INITIAL_STATE, action) => {
  const baseAction = '@profileImage/';
  switch (action.type) {
    default:
      return state;
    case `${baseAction}INSERT_PROFILE_IMAGE`:
      return {
        ...state,
        image: action.payload.profileImage
      }
  };

}

export default profileImage;