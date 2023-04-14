import React, { useState } from 'react';
import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';
const CalendarToolbar = ({ period }) => {
  const [periodType, setPeriodType] = useState('month');

  const handlePeriodTypeSelect = type => {
    setPeriodType(type);
  };

  const date = new Date();
  return (
    <div>
      <PeriodPaginator date={date} period={periodType} />
      <PeriodTypeSelect
        selectedType={periodType}
        onTypeSelect={handlePeriodTypeSelect}
      />
    </div>
  );
};

export default CalendarToolbar;
