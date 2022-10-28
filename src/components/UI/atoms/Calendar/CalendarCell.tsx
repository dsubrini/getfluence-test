import dayjs from 'dayjs';
import React from 'react';

import './CalendarCell.css';

interface CalendarCellProps {
  children: React.ReactNode | React.ReactNode[];
  day: Date;
  rowContent?: true;
  initialDate: dayjs.Dayjs;
  currentDay: Date;
}

export const CalendarCell: React.FC<CalendarCellProps> = ({
  children,
  day,
  rowContent,
  initialDate,
  currentDay,
}) => {
  return (
    <div
      className={`cell ${
        rowContent
          ? `calendar-content ${
              initialDate.clone().toDate().getMonth() > day.getMonth()
                ? 'previousMonth'
                : initialDate.clone().toDate().getMonth() < day.getMonth()
                ? 'nextMonth'
                : dayjs(currentDay).isSame(day, 'date')
                ? 'today'
                : 'default'
            }`
          : `calendar-week`
      }`}
    >
      {children}
    </div>
  );
};
