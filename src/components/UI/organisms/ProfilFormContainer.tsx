import React, { useContext } from 'react';
import { User, UserContext } from '../../../context/userContext';
import { MainContainer } from '../atoms/MainContainer';
import { MainTitleContainer } from '../atoms/MainContainerTitle';
import { ProfilForm } from '../molecules/ProfilForm';

interface ProfilFormContainerProps {}

export const ProfilFormContainer: React.FC<ProfilFormContainerProps> = () => {
  const { user, setUser } = useContext(UserContext);

  const handleProfilSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailValue = event.currentTarget.email.value || user?.email;
    const passwordValue = event.currentTarget.password.value || user?.password;
    const cityValue = event.currentTarget.city.value || user?.city;

    setUser((prevstate) => {
      const merge: Partial<User> = {
        email: emailValue,
        password: passwordValue,
        city: cityValue,
      };
      return { ...prevstate, ...merge };
    });
  };

  return (
    <MainContainer>
      <MainTitleContainer title="Profil" />
      <ProfilForm submitFunction={handleProfilSubmit} />
    </MainContainer>
  );
};
