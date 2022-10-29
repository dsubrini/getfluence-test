import React from 'react';

import './FormInput.css';

export interface FormInputProps {
  type: 'email' | 'password' | 'text' | 'date';
  placeholder: 'Email' | 'Mot de passe' | 'Ville' | 'Date';
  name: 'email' | 'password' | 'city' | 'date';
  dateValue?: string;
  required?: true;
  readonly?: true;
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  name,
  dateValue,
  required,
  readonly,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="form__input"
      required={required}
      readOnly={readonly}
      defaultValue={dateValue}
    />
  );
};
