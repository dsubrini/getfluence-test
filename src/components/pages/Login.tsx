import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { LoginFormContainer } from '../UI/organisms/LoginFormContainer';

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user!.isLogged) {
      return navigate('/profil');
    }
  }, []);

  return <LoginFormContainer />;
};
