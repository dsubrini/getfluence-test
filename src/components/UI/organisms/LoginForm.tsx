import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';
import { MainContainer } from '../atoms/MainContainer';
import { MainTitleContainer } from '../atoms/MainContainerTitle';
import { FormContainer } from '../molecules/FormContainer';

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailValue = event.currentTarget.email.value;
    const passwordValue = event.currentTarget.password.value;
    if (emailValue === user!.email && passwordValue === user!.password) {
      setUser((prevstate) => {
        return { ...prevstate, isLogged: true };
      });
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
