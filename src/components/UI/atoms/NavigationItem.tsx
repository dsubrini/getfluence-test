import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationItem.css';

interface NavigationItemProps {
  name: string;
  url: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  name,
  url,
}) => {
  return (
    <li className="navigation__list--item">
      <Link to={url}>{name}</Link>
    </li>
  );
};
