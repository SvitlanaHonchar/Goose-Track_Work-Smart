import React from 'react';
import CalendarHead from 'modules/CalendarComponent/components/CalendarHead/CalendarHead';
import CalendarTable from './CalendarTable/CalendarTable';

const ChosenMonth = () => {
  return (
    <div className="chosenMonth">
      ChosenMonth
      <CalendarHead />
      <CalendarTable />
    </div>
  );
};

export default ChosenMonth;
