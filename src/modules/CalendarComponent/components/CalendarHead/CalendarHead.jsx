import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { ListStyled } from './CalendarHead.styled';

const WEEK_DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const CalendarHead = ({ mode, currentDay }) => {
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
  console.log('options: ', options);

  return (
    <ListStyled
      className={`calendarHead__list ${
        mode === 'monthMode'
          ? 'calendarHead__list--monthMode'
          : 'calendarHead__list--dayMode'
      }`}
    >
      {mode === 'monthMode' &&
        WEEK_DAYS.map((day, index) => (
          <ListItem key={day} className="calendarHead__item">
            <span
              className={`calendarHead__weekDay calendarHead__weekDay--monthMode ${
                index >= 5 && 'calendarHead__weekDay--holiday'
              }`}
            >
              {window.innerWidth >= 765 ? day : day[0]}
            </span>
          </ListItem>
        ))}
      {mode === 'dayMode' &&
        WEEK_DAYS.map((day, index) => {
          const currentDate = new Date(
            new Date(options.startWeekDate).setDate(
              options.startWeekDate.getDate() + index
            )
          );
          console.log('currentDate: ', currentDate.getMonth() + 1);

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
                  gap: { xs: '6px', md: '4px' },
                }}
              >
                <span className="calendarHead__weekDay">
                  {window.innerWidth >= 765 ? day : day[0]}
                </span>
                <Link
                  to={`/calendar/day/${currentDate.getFullYear()}-${
                    currentDate.getMonth() + 1 < 10
                      ? `0${currentDate.getMonth() + 1}`
                      : currentDate.getMonth() + 1
                  }-${
                    currentDate.getDate() < 10
                      ? `0${currentDate.getDate()}`
                      : currentDate.getDate()
                  }`}
                  className="calendarHead__dateLink"
                >
                  {currentDate.getDate()}
                </Link>
              </Box>
            </ListItem>
          );
        })}
    </ListStyled>
  );
};
CalendarHead.propTypes = {
  mode: PropTypes.string.isRequired,
  currentDay: PropTypes.string,
};

export default CalendarHead;
