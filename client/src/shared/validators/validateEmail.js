export const validateEmail = () => {
  const regex = /\S+@\S+\. \S+/;
  return regex.test()
}

export const emailValidationMessage = 'Please enter a valid email address.';