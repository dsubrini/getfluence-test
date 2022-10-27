import React from 'react';

import './MainContainer.css';

interface MainContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <section className="main__container">{children}</section>;
};
