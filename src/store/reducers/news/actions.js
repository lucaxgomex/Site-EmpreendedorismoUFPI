export const News = (news) => {
  return {
    type: '@news/CREATE_NEWS',
    payload: { news }
  }
}
