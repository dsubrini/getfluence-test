import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, UserContext } from '../../../context/userContext';
import { MainContainer } from '../atoms/MainContainer';
import { MainTitleContainer } from '../atoms/MainContainerTitle';
import { LoginForm } from '../molecules/LoginForm';

interface LoginFormContainerProps {}

export const LoginFormContainer: React.FC<LoginFormContainerProps> = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailValue = event.currentTarget.email.value;
    const passwordValue = event.currentTarget.password.value;
    if (emailValue === user!.email && passwordValue === user!.password) {
      setUser((prevstate) => {
        const merge: Partial<User> = {
          isLogged: true,
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ0ZXN0QHRlc3QuZnIiLCJpYXQiOjE3MTExMzkwMjJ9.p4H3fFSQVvZh38_YUfki9UfEv_JerHOsgzs0a6RSHeI',
        };
        return { ...prevstate, ...merge };
      });
      return navigate('/profil');
    }
  };
  return (
    <MainContainer>
      <MainTitleContainer title="Connexion" />
      <LoginForm submitFunction={handleLoginSubmit} />
    </MainContainer>
  );
};
