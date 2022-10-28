import React from 'react';

import './FormInput.css';

export interface FormInputProps {
  type: 'email' | 'password' | 'text';
  placeholder: 'Email' | 'Mot de passe' | 'Ville';
  name: 'email' | 'password' | 'city';
  required?: true;
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  name,
  required,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="form__input"
      required={required}
    />
  );
};
