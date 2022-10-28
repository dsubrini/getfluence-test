import React from 'react';
import { Button } from '../atoms/Button';
import { Form } from '../atoms/Form/Form';
import { FormInput } from '../atoms/Form/FormInput';

interface ProfilFormProps {
  submitFunction: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const ProfilForm: React.FC<ProfilFormProps> = ({ submitFunction }) => {
  return (
    <Form submitFunction={submitFunction}>
      <FormInput type="email" placeholder="Email" name="email" />
      <FormInput type="password" placeholder="Mot de passe" name="password" />
      <FormInput type="text" placeholder="Ville" name="city" />
      <Button type="submit" text="Modifier" color="blue" />
    </Form>
  );
};
