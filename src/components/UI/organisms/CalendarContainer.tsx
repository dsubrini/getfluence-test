import React from 'react';

import './Calendar.css';
import { MainContainer } from '../atoms/MainContainer';
import { CalendarTable } from '../molecules/CalendarTable';
import { MainTitleContainer } from '../atoms/MainContainerTitle';

interface CalendarContainerProps {}

export const CalendarContainer: React.FC<CalendarContainerProps> = () => {
  return (
    <MainContainer>
      <MainTitleContainer title="Programmer une réponse" />
      <CalendarTable />
    </MainContainer>
  );
};
