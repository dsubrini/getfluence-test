import React from 'react';
import { MainContainer } from '../atoms/MainContainer';
import { MainTitleContainer } from '../atoms/MainContainerTitle';

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <MainContainer>
      <MainTitleContainer title="Connexion" />
    </MainContainer>
  );
};
