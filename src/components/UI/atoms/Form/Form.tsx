import React from 'react';

interface FormProps {
  children: JSX.Element | JSX.Element[];
}

export const Form: React.FC<FormProps> = ({ children }) => {
  return <form>{children}</form>;
};
