import React, { useState } from "react";
import {
  usernameValidationMessage,
  avatarUrlValidationMessage,
  descriptionValidationMessage,
  titleValidationMessage,
} from "../../../shared/validators";
import { Input } from "../../../shared/components";

const inputs = [
  {
    field: "username",
    label: "Username",
    validationMessage: usernameValidationMessage,
    type: "text",
  },
  {
    field: "title",
    label: "Title",
    validationMessage: titleValidationMessage,
    type: "text",
  },
  {
    field: "avatarUrl",
    label: "Avatar Url",
    validationMessage: avatarUrlValidationMessage,
    type: "text",
  },
  {
    field: "description",
    label: "Description",
    validationMessage: descriptionValidationMessage,
    type: "text",
    textarea: true,
  },
];

export const ChannelSettings = ({ settings }) => {
  const [formState, setFormState] = useState({
    title: {
      isValid: false,
      showError: false,
      value: settings.title,
    },
    Username: {
      isValid: false,
      showError: false,
      value: settings.Username,
    },
    avatarUrl: {
      isValid: false,
      showError: false,
      value: settings.avatarUrl,
    },
    description: {
      isValid: false,
      showError: false,
      value: settings.description,
    },
  });
  return (
    <form className="settings-form">
      {inputs.map((input) => {
        <Input
          key={input.field}
          field={input.field}
          label={input.label}
          value={formState[input.field].value}
          onChangeHandler={() => {}}
          onBlurHandler={() => {}}
          showErrorMessage={formState[input.field].showError}
          validationMessage={input.validationMessage}
          type={input.type}
          textarea={input.textarea}
        />;
      })}
    </form>
  );
};
