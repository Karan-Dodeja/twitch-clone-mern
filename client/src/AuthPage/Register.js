import React, { useState } from 'react'
import { Logo } from './Logo'
import { AuthInput } from './AuthInput'
import { emailValidationMessage, passwordConfValidationMessage, passwordValidationMessage, usernameValidationMessage, validateEmail, validatePassword, validatePasswordConf, validateUsername } from '../shared/validators'

export const Register = ({ switchAuthhandler }) => {

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

        <button
          disabled={!formState.password.isValid || !formState.email.isValid || !formState.username.isValid || formState.password.isValid != formState.passwordConf.value}>Register in</button>

      </form>

      <span onClick={switchAuthhandler} className='auth-form-switch-label'>Already have an account ? Sign in</span>

    </div>
  )

}