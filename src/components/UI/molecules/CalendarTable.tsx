import dayjs, { Dayjs } from 'dayjs';
import React, { useCallback, useMemo, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CalendarCell } from '../atoms/Calendar/CalendarCell';
import { CalendarFlex } from '../atoms/Calendar/CalendarFlex';

import 'dayjs/locale/fr';
import './CalendarTable.css';
import { FormInput } from '../atoms/Form/FormInput';

interface CalendarTableProps {}

export const CalendarTable: React.FC<CalendarTableProps> = ({}) => {
  const [initialDate, setInitialDate] = useState<Dayjs>(dayjs());

  const currentDay = useMemo(() => dayjs().toDate(), []);

  const firstDayOfTheMonth = useMemo(
    () => initialDate.clone().startOf('month'),
    [initialDate]
  );

  const firstDayOfFirstWeekOfMonth = useMemo(
    () => dayjs(firstDayOfTheMonth).startOf('week'),
    [firstDayOfTheMonth]
  );

  const generateFirstDayOfEachWeek = useCallback((day: Dayjs): Dayjs[] => {
    const dates: Dayjs[] = [day];
    for (let i = 1; i < 6; i++) {
      const date = day.clone().add(i, 'week');
      dates.push(date);
    }
    return dates;
  }, []);

  const generateWeek = useCallback((day: Dayjs): Date[] => {
    const dates: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const date = day.clone().add(i, 'day').toDate();
      dates.push(date);
    }
    return dates;
  }, []);

  const generateWeeksOfTheMonth = useMemo((): Date[][] => {
    const firstDayOfEachWeek = generateFirstDayOfEachWeek(
      firstDayOfFirstWeekOfMonth
    );
    return firstDayOfEachWeek.map((date) => generateWeek(date));
  }, [generateFirstDayOfEachWeek, firstDayOfFirstWeekOfMonth, generateWeek]);

  return (
    <div className="calendar__container">
      <div className="calendar__day-input">
        <label>Date</label>
        <FormInput
          type="text"
          placeholder="Date"
          name="date"
          dateValue={dayjs().format('DD/MM/YYYY')}
        />
      </div>
      <CalendarFlex>
        <h3 className="calendar__title">
          {initialDate.clone().locale('fr').format('MMMM YYYY')}
        </h3>
        <div className="calendar__arrows">
          <MdKeyboardArrowLeft
            size={25}
            onClick={() => setInitialDate((date) => date.subtract(1, 'month'))}
          />
          <MdKeyboardArrowRight
            size={25}
            onClick={() => setInitialDate((date) => date.add(1, 'month'))}
          />
        </div>
      </CalendarFlex>
      <CalendarFlex>
        {generateWeeksOfTheMonth[0].map((day, index) => (
          <CalendarCell
            day={day}
            key={`week-day-${index}`}
            initialDate={initialDate}
            currentDay={currentDay}
          >
            {dayjs(day).format('dd').substring(0, 1)}
          </CalendarCell>
        ))}
      </CalendarFlex>
      {generateWeeksOfTheMonth.map((week, weekIndex) => (
        <CalendarFlex key={`week-${weekIndex}`}>
          {week.map((day, dayIndex) => (
            <CalendarCell
              day={day}
              key={`day-${dayIndex}`}
              initialDate={initialDate}
              currentDay={currentDay}
              rowContent
            >
              {day.getDate()}
            </CalendarCell>
          ))}
        </CalendarFlex>
      ))}
    </div>
  );
};
