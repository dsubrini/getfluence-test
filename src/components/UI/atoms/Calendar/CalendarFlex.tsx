import React from 'react';

import './CalendarFlex.css';

interface CalendarFlexProps {
  children: JSX.Element | JSX.Element[];
  column?: true;
}

export const CalendarFlex: React.FC<CalendarFlexProps> = ({
  children,
  column,
}) => {
  return <div className={`flex${column ? ' column' : ''}`}>{children}</div>;
};
