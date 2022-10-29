import React from 'react';
import { NavigationItem } from '../atoms/NavigationItem';

import './NavigationListItems.css';

interface NavigationListItemsProps {}

export const NavigationListItems: React.FC<NavigationListItemsProps> = () => {
  return (
    <ul className="navigation__list">
      <NavigationItem name="connexion" url="/" />
      <NavigationItem name="profil" url="/profil" />
      <NavigationItem name="calendrier" url="/calendar" />
    </ul>
  );
};
