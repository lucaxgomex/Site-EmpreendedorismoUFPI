const INITIAL_STATE = {
  title: '',
  subtitle: '',
  content: ''
};

const news = (state = INITIAL_STATE, action) => {
  const baseAction = '@news/';
  switch (action.type) {
    default:
      return state;
    case `${baseAction}CREATE_NEWS  `:
      return {
        ...state,
        title: action.payload.news.title,
        subtitle: action.payload.news.subtitle,
        content: action.payload.news.content
      };
  }
}

export default news;