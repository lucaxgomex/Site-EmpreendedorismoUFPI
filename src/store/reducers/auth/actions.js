export const Auth = (auth) => {
  return {
    type: '@auth/SET_TOKEN',
    payload: { auth }
  }
}
