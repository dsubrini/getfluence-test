import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { CalendarContainer } from '../UI/organisms/CalendarContainer';

interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user!.isLogged) {
      return navigate('/');
    }
  }, []);
  return <CalendarContainer />;
};
