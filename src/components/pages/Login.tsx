import React from 'react';
import { MainContainer } from '../UI/atoms/MainContainer';
import { LoginForm } from '../UI/organisms/LoginForm';

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};
