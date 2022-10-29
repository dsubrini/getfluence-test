import React from 'react';

import './Calendar.css';
import { MainContainer } from '../atoms/MainContainer';
import { CalendarTable } from '../molecules/CalendarTable';
import { MainTitleContainer } from '../atoms/MainContainerTitle';
import { Button } from '../atoms/Button';
import { CalendarHourSelector } from '../molecules/CalendarHourSelector';

interface CalendarContainerProps {}

export const CalendarContainer: React.FC<CalendarContainerProps> = () => {
  return (
    <MainContainer>
      <MainTitleContainer title="Planifier une réponse" />
      <div className="calendar__main-components">
        <CalendarTable />
        <CalendarHourSelector />
      </div>
      <div className="calendar__buttons">
        <Button type="button" text="Planifier" color="blue" />
        <Button type="button" text="Annuler" color="white" />
      </div>
    </MainContainer>
  );
};
