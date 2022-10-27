import React from 'react';
import { NavigationListItems } from '../molecules/NavigationListItems';

import './Navigation.css';

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="navigation">
      <NavigationListItems />
    </nav>
  );
};
