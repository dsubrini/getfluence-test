import React from 'react';
import { Button } from '../atoms/Button';
import { Form } from '../atoms/Form/Form';
import { FormInput } from '../atoms/Form/FormInput';

interface FormContainerProps {
  submitFunction: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const FormContainer: React.FC<FormContainerProps> = ({
  submitFunction,
}) => {
  return (
    <Form submitFunction={submitFunction}>
      <FormInput type="email" placeholder="Email" required />
      <FormInput type="password" placeholder="Mot de passe" required />
      <Button type="submit" text="Se connecter" color="blue" />
    </Form>
  );
};
