import React, { useState } from 'react'
import { Logo } from './Logo'
import { AuthInput } from './AuthInput'
import { emailValidationMessage, passwordConfValidationMessage, passwordValidationMessage, usernameValidationMessage, validateEmail, validatePassword, validatePasswordConf, validateUsername } from '../shared/validators'
import { useRegister } from '../shared/hooks'

export const Register = ({ switchAuthhandler }) => {

  const { register, isLoading } = useRegister();

  // Set default form state
  const [formState, setFormState] = useState({
    email: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    },
    username: {
      value: '',
      isValid: false,
      showError: false
    },
    passwordConf: {
      value: '',
      isValid: false,
      showError: false
    },
  })

  // Handle inputs from user
  const handleInputValueChange = (value, field) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value: value
      },
    }))
  }

  // validating the field's
  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;

    switch (field) {
      case 'email':
        isValid = validateEmail(value);
        break;
      case 'password':
        isValid = validatePassword(value);
        break;
      case 'username':
        isValid = validateUsername(value);
        break;
      case 'passwordConf':
        isValid = validatePasswordConf(formState.password.value, value);
        break;
      default:
        break;
    }

    setFormState(prevState => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }))
  }

  // handle login hook pass user value through URL on button click
  const handleRegister = (event) => {
    event.preventDefault();
    register(formState.email.value, formState.password.value, formState.username.value)
  }

  const isSubmitButtonDisable = isLoading || !formState.password.isValid || !formState.email.isValid || !formState.username.isValid || formState.password.isValid !== formState.passwordConf.value

  return (
    <div className="register-container" >
      <Logo text={"Sign up to clone"} />

      <form className='auth-form'>

        <AuthInput
          field='email'
          label='Email'
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type='text'
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        />

        <AuthInput
          field='username'
          label='Username'
          value={formState.username.value}
          onChangeHandler={handleInputValueChange}
          type='text'
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.username.showError}
          validationMessage={usernameValidationMessage}
        />

        <AuthInput
          field='password'
          label='Password'
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type='password'
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        />

        <AuthInput
          field='passwordConf'
          label='Password Confirmation'
          value={formState.passwordConf.value}
          onChangeHandler={handleInputValueChange}
          type='password'
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.passwordConf.showError}
          validationMessage={passwordConfValidationMessage}
        />

        <button onClick={handleRegister} disabled={isSubmitButtonDisable}>Register in</button>
      </form>

      <span onClick={switchAuthhandler} className='auth-form-switch-label'>Already have an account ? Sign in</span>

    </div>
  )

}