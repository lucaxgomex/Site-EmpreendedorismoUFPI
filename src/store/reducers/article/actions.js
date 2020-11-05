export const Article = (article) => {
  return {
    type: '@article/CREATE_ARTICLE',
    payload: { article }
  }
}
