import React from 'react';
import PropTypes from 'prop-types';

const WEEK_DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const CalendarHead = ({ mode, currentDay }) => {
  const options = {};
  if (currentDay) {
    options.selectedDate = new Date(currentDay);
    options.day = options.selectedDate.getDay() - 1;
    options.startWeekDate = options.selectedDate.getDate() - options.day;
  }

  console.log('selectedDate: ', options);
  return (
    <ul className="calendarHead__list">
      {mode === 'monthMode' &&
        WEEK_DAYS.map(day => (
          <li key={day} className="calendarHead__item">
            {day}
          </li>
        ))}
      {mode === 'dayMode' &&
        WEEK_DAYS.map(day =>
          WEEK_DAYS.indexOf(day) === options.day ? (
            <li key={day} className="calendarHead__item current">
              <span>{day}</span>
              <span>{options.startWeekDate + WEEK_DAYS.indexOf(day)}</span>
            </li>
          ) : (
            <li key={day} className="calendarHead__item">
              <span>{day}</span>
              <span>{options.startWeekDate + WEEK_DAYS.indexOf(day)}</span>
            </li>
          )
        )}
    </ul>
  );
};
CalendarHead.propTypes = {
  mode: PropTypes.string.isRequired,
  currentDay: PropTypes.string,
};

export default CalendarHead;
