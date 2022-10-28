import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user!.isLogged) {
      return navigate('/');
    }
  }, []);
  return <div>Test page calendrier</div>;
};
