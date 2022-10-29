import dayjs from 'dayjs';
import React from 'react';
import { CalendarFlex } from '../atoms/Calendar/CalendarFlex';
import { CalendarHourItem } from '../atoms/Calendar/CalendarHourItem';
import { FormInput } from '../atoms/Form/FormInput';

import './CalendarHourSelector.css';

interface CalendarHourSelectorProps {}

export const CalendarHourSelector: React.FC<CalendarHourSelectorProps> = () => {
  return (
    <div className="calendar__hour-selector">
      <div className="calendar__day-input">
        <label>Heure</label>
        <FormInput
          type="text"
          placeholder="Date"
          name="date"
          dateValue="01:00 AM"
        />
      </div>
      <CalendarFlex column>
        {[...Array(24)].map((item, i) => (
          <CalendarHourItem index={i} key={i} />
        ))}
      </CalendarFlex>
    </div>
  );
};
