import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

const WEEK_DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const CalendarHead = ({ mode, currentDay }) => {
  console.log('currentDay: ', currentDay);
  const options = {};
  if (currentDay) {
    options.selectedDate = new Date(currentDay);
    options.day =
      options.selectedDate.getDay() === 0
        ? 6
        : options.selectedDate.getDay() - 1;
    options.startWeekDate = new Date(
      new Date(options.selectedDate).setDate(
        options.selectedDate.getDate() - options.day
      )
    );
  }
  // console.log(window.innerWidth, typeof window.innerWidth);
  console.log('selectedDate: ', options);
  return (
    <List
      className="calendarHead__list"
      sx={'display: flex; align-items: center; justify-content: space-between;'}
    >
      {mode === 'monthMode' &&
        WEEK_DAYS.map(day => (
          <ListItem key={day} className="calendarHead__item">
            {window.innerWidth >= 765 ? day : day[0]}
          </ListItem>
        ))}
      {mode === 'dayMode' &&
        WEEK_DAYS.map((day, index) => {
          const currentDate = new Date(
            new Date(options.startWeekDate).setDate(
              options.startWeekDate.getDate() + index
            )
          );
          console.log('currentDate: ', currentDate);

          return (
            <ListItem
              key={day}
              className={`calendarHead__item ${
                WEEK_DAYS.indexOf(day) === options.day ? 'current' : ''
              }`}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span>{window.innerWidth >= 765 ? day : day[0]}</span>
                <Link
                  to={`/calendar/day/${currentDay.slice(
                    0,
                    -2
                  )}${currentDate.getDate()}`}
                >
                  {currentDate.getDate()}
                </Link>
              </Box>
            </ListItem>
          );
        })}
    </List>
  );
};
CalendarHead.propTypes = {
  mode: PropTypes.string.isRequired,
  currentDay: PropTypes.string,
};

export default CalendarHead;
