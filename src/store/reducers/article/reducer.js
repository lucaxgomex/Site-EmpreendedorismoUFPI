const INITIAL_STATE = {
  title: '',
  content: ''
};

const article = (state = INITIAL_STATE, action) => {
  const baseAction = '@article/';
  switch (action.type) {
    default:
      return state;
    case `${baseAction}CREATE_ARTICLE`:
      return {
        ...state,
        title: action.payload.article.title,
        content: action.payload.article.content
      };
  }
}

export default article;