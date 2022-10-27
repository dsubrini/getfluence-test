import React from 'react';
import { Button } from '../atoms/Button';
import { Form } from '../atoms/Form/Form';
import { FormInput } from '../atoms/Form/FormInput';

interface FormContainerProps {}

export const FormContainer: React.FC<FormContainerProps> = ({}) => {
  return (
    <Form>
      <FormInput type="email" placeholder="Email" required />
      <FormInput type="password" placeholder="Mot de passe" required />
      <Button type="submit" text="Se connecter" color="blue" />
    </Form>
  );
};
