import React from 'react';
import CalendarToolbar from './CalendarToolbar/CalendarToolbar';
import ChosenDay from 'modules/ChosenDay/components/ChosenDay/ChosenDay';
import ChosenMonth from 'modules/ChosenMonth/components/ChosenMonth';
import { useLocation } from 'react-router';

const CalendarComponent = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      CalendarComponent
      <CalendarToolbar />
      {path.includes('day') ? <ChosenDay /> : <ChosenMonth />}
    </div>
  );
};

export default CalendarComponent;
