import React, { useState } from "react";
import {
  passwordValidationMessage,
  validatePassword,
} from "../../../shared/validators";
import { Input } from "../../../shared/components";

const inputs = [
  {
    field: "password",
    label: "Current Password",
    validationMessage: passwordValidationMessage,
    type: "password",
  },
  {
    field: "newPassword",
    label: "New Password",
    validationMessage: passwordValidationMessage,
    type: "password",
  },
];

export const PasswordSettings = () => {
  const [formState, setFormState] = useState({
    password: {
      isValid: false,
      showError: false,
      value: "",
    },
    newPassword: {
      isValid: false,
      showError: false,
      value: "",
    },
  });

  // Handle inputs from user
  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value: value,
      },
    }));
  };

  // validating the field's
  const handleInputValidationOnBlur = (value, field) => {
    let isValid = validatePassword(value);

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const isSubmitButtonDisabled =
    !formState.password.isValid || !formState.newPassword.isValid;

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="settings-form">
      {inputs.map((input) => (
        <Input
          key={input.field}
          field={input.field}
          label={input.label}
          value={formState[input.field].value}
          onBlurHandler={handleInputValidationOnBlur}
          onChangeHandler={handleInputValueChange}
          showErrorMessage={formState[input.field].showError}
          type={input.type}
          validationMessage={input.validationMessage}
        />
      ))}
      <button disabled={isSubmitButtonDisabled} onClick={handleFormSubmit}>
        Save Changes
      </button>
    </form>
  );
};
