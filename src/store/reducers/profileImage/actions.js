export const ProfileImage = (profileImage) => {
  return {
    type: '@profileImage/INSERT_PROFILE_IMAGE',
    payload: { profileImage }
  }
}