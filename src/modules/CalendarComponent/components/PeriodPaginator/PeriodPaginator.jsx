import React from 'react';
import PropTypes from 'prop-types';
import { addMonths, addDays, format } from 'date-fns';

const PeriodPaginator = ({ date, period, onDateChange }) => {
  const updateDate = amount => {
    const newDate =
      period === 'month' ? addMonths(date, amount) : addDays(date, amount);
    onDateChange(newDate);
  };

  const formattedDate =
    period === 'month'
      ? `${format(date, 'MMMM yyyy').toUpperCase()}`
      : `${format(date, ' d MMM yyyy ').toUpperCase()}`;

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <span
        style={{
          color: 'red',
          backgroundColor: 'yellow',
          display: 'inline-block',
          padding: '20px',
          fontSize: '20px',
        }}
      >
        {formattedDate}
      </span>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <button onClick={() => updateDate(-1)}>Previous</button>
        <button onClick={() => updateDate(1)}>Next</button>
      </div>
    </div>
  );
};

export default PeriodPaginator;

PeriodPaginator.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  period: PropTypes.oneOf(['month', 'day']).isRequired,
  onDateChange: PropTypes.func.isRequired,
};
