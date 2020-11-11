const INITIAL_STATE = {
  category: '',
  value: ''
};

const articleInfo = (state = INITIAL_STATE, action) => {
  const baseAction = '@articleInfo/';
  switch (action.type) {
    default:
      return state;
    case `${baseAction}ADD_ARTICLE_INFO`:
      return {
        ...state,
        title: action.payload.articleInfo.category,
        content: action.payload.articleInfo.value
      };
  }
}

export default articleInfo;