import React, { useState } from 'react';

const PeriodPaginator = ({ date, period, onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(date);

  const updateDate = (amount, unit) => {
    const dateCopy = new Date(currentDate);
    if (unit === 'month') {
      dateCopy.setMonth(dateCopy.getMonth() + amount);
    } else {
      dateCopy.setDate(dateCopy.getDate() + amount);
    }
    setCurrentDate(dateCopy);
    // onDateChange(dateCopy);
  };

  const formatDate = (date, format) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return format === 'month'
      ? `${monthNames[monthIndex].toUpperCase()} ${year}`
      : `${day} ${monthNames[monthIndex].toUpperCase()} ${year}`;
  };

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
        {formatDate(currentDate, period)}
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
