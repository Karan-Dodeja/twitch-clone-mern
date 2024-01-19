export const validatePassword = (password) => {
  const regex = /^\S{6,12}$/;
  return regex.test(password);
};

export const passwordValidationMessage = 'Please enter a valid password, It should be 6 to 12 characters and no spaces are allowed.';