import React from 'react';
import { Button } from '../atoms/Button';
import { Form } from '../atoms/Form/Form';
import { FormInput } from '../atoms/Form/FormInput';

interface LoginFormProps {
  submitFunction: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ submitFunction }) => {
  return (
    <Form submitFunction={submitFunction}>
      <FormInput type="email" placeholder="Email" name="email" required />
      <FormInput
        type="password"
        placeholder="Mot de passe"
        name="password"
        required
      />
      <Button type="submit" text="Se connecter" color="blue" />
    </Form>
  );
};
