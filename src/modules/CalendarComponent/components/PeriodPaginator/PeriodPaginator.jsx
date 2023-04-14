import React from 'react';
import { addMonths, addDays, format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const PeriodPaginator = ({ date, period, onDateChange }) => {
  const navigate = useNavigate();

  const calculateNewDate = (amount, unit) =>
    unit === 'month' ? addMonths(date, amount) : addDays(date, amount);

  const updateUrlAndDate = newDate => {
    const urlFormatDate =
      period === 'month'
        ? format(newDate, 'yyyy-MM')
        : format(newDate, 'yyyy-MM-dd');
    navigate(`/calendar/${period}/${urlFormatDate}`);
    onDateChange(newDate);
  };

  const updateDate = (amount, unit) => {
    const newDate = calculateNewDate(amount, unit);
    updateUrlAndDate(newDate);
  };

  const formattedDate =
    period === 'month'
      ? format(date, 'MMMM yyyy').toUpperCase()
      : format(date, ' d MMM yyyy ').toUpperCase();

  console.log('formattedDate : ', formattedDate);

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
        <button
          onClick={() => updateDate(-1, period === 'month' ? 'month' : 'day')}
        >
          Previous
        </button>
        <button
          onClick={() => updateDate(1, period === 'month' ? 'month' : 'day')}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PeriodPaginator;
