import React from 'react';

import './FormInput.css';

export interface FormInputProps {
  type: 'email' | 'password';
  placeholder: 'Email' | 'Mot de passe';
  required?: true;
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  required,
}) => {
  return (
    <input
      type={type}
      name={type}
      placeholder={placeholder}
      className="form__input"
      required={required}
    />
  );
};
