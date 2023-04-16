import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from '@mui/material';
import { Box } from '@mui/system';

const WEEK_DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const CalendarHead = ({ mode, currentDay }) => {
  const options = {};
  if (currentDay) {
    options.selectedDate = new Date(currentDay);
    options.day = options.selectedDate.getDay() - 1;
    options.startWeekDate = options.selectedDate.getDate() - options.day;
  }
  // console.log(window.innerWidth, typeof window.innerWidth);
  // console.log('selectedDate: ', options);
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
        WEEK_DAYS.map(day =>
          WEEK_DAYS.indexOf(day) === options.day ? (
            <ListItem key={day} className="calendarHead__item current">
              <Box
                sx={
                  'display: flex; align-items: center; justify-content: space-between;'
                }
              >
                <span>{window.innerWidth >= 765 ? day : day[0]}</span>
                <span>{options.startWeekDate + WEEK_DAYS.indexOf(day)}</span>
              </Box>
            </ListItem>
          ) : (
            <ListItem key={day} className="calendarHead__item">
              <Box
                sx={
                  'display: flex; align-items: center; justify-content: space-between;'
                }
              >
                <span>{window.innerWidth >= 765 ? day : day[0]}</span>
                <span>{options.startWeekDate + WEEK_DAYS.indexOf(day)}</span>
              </Box>
            </ListItem>
          )
        )}
    </List>
  );
};
CalendarHead.propTypes = {
  mode: PropTypes.string.isRequired,
  currentDay: PropTypes.string,
};

export default CalendarHead;
