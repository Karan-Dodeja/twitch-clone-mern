// username should have between 3 and 8 characters without spaces
export const validateUsername = (username) => {
  const regex = /^\S{3,8}$/;
  return regex.test(username);
}

export const usernameValidationMessage = 'Username should have between 3 and 8 characters, Null spaces are allowed.'