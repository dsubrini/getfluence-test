import dayjs from 'dayjs';
import React from 'react';

import './CalendarHourItem.css';

interface CalendarHourItemProps {
  index: number;
}

export const CalendarHourItem: React.FC<CalendarHourItemProps> = ({
  index,
}) => {
  return (
    <span className="calendar__hour-item">
      {dayjs().hour(index).format('hh:00 A')}
    </span>
  );
};
