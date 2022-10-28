import React from 'react';

interface FormProps {
  children: JSX.Element | JSX.Element[];
  submitFunction: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({ children, submitFunction }) => {
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        submitFunction(e);
      }}
    >
      {children}
    </form>
  );
};
