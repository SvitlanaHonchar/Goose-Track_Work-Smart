import React from 'react';
import CalendarToolbar from './CalendarToolbar/CalendarToolbar';
import { ChosenDay } from 'modules/ChosenDay/index';
import { ChosenMonth } from 'modules/ChosenMonth/index';
import { useLocation } from 'react-router';

export const CalendarComponent = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      <CalendarToolbar />
      {path.includes('day') ? <ChosenDay /> : <ChosenMonth />}
    </div>
  );
};
