import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { ProfilFormContainer } from '../UI/organisms/ProfilFormContainer';

interface ProfilProps {}

export const Profil: React.FC<ProfilProps> = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user!.isLogged) {
      return navigate('/');
    }
  }, []);
  return <ProfilFormContainer />;
};
