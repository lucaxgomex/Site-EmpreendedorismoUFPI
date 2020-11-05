export const loginRequest = (email, password) => {
  return {
    type: '@login/SIGN_IN_REQUEST',
    payload: { email, password },
  }
}