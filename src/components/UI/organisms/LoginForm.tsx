import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../atoms/MainContainer';
import { MainTitleContainer } from '../atoms/MainContainerTitle';
import { FormContainer } from '../molecules/FormContainer';

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailValue = event.currentTarget.email.value;
    const passwordValue = event.currentTarget.password.value;
    if (emailValue === 'test@test.fr' && passwordValue === 'test') {
      console.log('test');
      return navigate('/profil');
    }
  };
  return (
    <MainContainer>
      <MainTitleContainer title="Connexion" />
      <FormContainer submitFunction={handleLoginSubmit} />
    </MainContainer>
  );
};
