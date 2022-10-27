import React from 'react';

interface MainTitleContainerProps {
  title: string;
}

export const MainTitleContainer: React.FC<MainTitleContainerProps> = ({
  title,
}) => {
  return <h3 className="main__container--title">{title}</h3>;
};
