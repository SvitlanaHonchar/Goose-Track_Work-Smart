// + 1. Компонент отримує колекцію днів обраного місяця з задачами, вказаними для виконання на відповідні дні.
// 2. Якщо день має заплановані задачі, вони відображаються відповідними блоками всередині комірки дня.
// + 3. Клік по комірці переадресовує юзера на відповідний день по маршруту /calendar/day/:date і показує модуль одного дня ChoosedDay з відповідною датою.
// 4. на стор.404 - переадресація
// 5. календар пейдж - запит за датою з юзпарамс
// Додатково:
// Клік по завданню з комірки, відкриває модалку для редагування даного завдання, заповнену даними з цього завдання.

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CalendarDates from 'calendar-dates';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const calendarDates = new CalendarDates();

function CalendarTable({ tasks, currentMonth }) {
  const [monthMatrix, setMonthMatrix] = useState(null);

  const getAllDayTasks = date => {
    if (tasks === null) {
      return '';
    }
    const todayTasks = tasks.filter(task => task.date === date);
    const todayTasksMarkup =
      todayTasks.length !== 0
        ? todayTasks[0].tasks.map(task => (
            <li key={task._id} className={task.priority}>
              {task.title}
            </li>
          ))
        : '';

    return todayTasksMarkup;
  };

  // function getNextDay(currDate) {
  //   const nextDate = new Date(currDate);
  //   nextDate.setDate(nextDate.getDate() + 1);

  //   return nextDate.toISOString().slice(0, 10);
  // }

  function getNextDay(currDate) {
    currDate = new Date(currDate);
    const nextDate = new Date(currDate.getTime() + 24 * 60 * 60 * 1000);

    return nextDate.toISOString().slice(0, 10);
  }

  // const yesterday = getNextDay('2023-03-26');
  // console.log(yesterday);

  useEffect(() => {
    const mainAsync = async () => {
      const calendarMatrix = await calendarDates.getMatrix(
        new Date(currentMonth)
      );

      setMonthMatrix(calendarMatrix);
    };

    mainAsync();
  }, [currentMonth]);

  // if (monthMatrix !== null) {
  //   // month
  //   console.log('month', monthMatrix);
  //   // week
  //   console.log(monthMatrix[0]);
  //   // day data
  //   console.log(monthMatrix[0][0]);
  //   // day
  //   console.log(monthMatrix[0][0].date);
  // }

  return (
    <div>
      CalendarTable
      <TableContainer
        sx={{
          border: '1px rgba(220, 227, 229, 0.8) solid',
          borderRadius: '8px',
        }}
        // component={Paper}
      >
        <Table aria-label="simple table">
          <TableBody>
            {monthMatrix !== null &&
              monthMatrix.map((week, i) => (
                <TableRow key={i} align="center">
                  {week.map((day, j) => (
                    <TableCell
                      key={j}
                      align="right"
                      sx={{
                        verticalAlign: 'top',
                        border: '1px rgba(220, 227, 229, 0.8) solid',
                        height: 125,
                        width: 155,
                      }}
                    >
                      <NavLink to={`/calendar/day/${getNextDay(day.iso)}`}>
                        {getNextDay(day.iso).slice(8, 10)}
                      </NavLink>
                      <ul>{getAllDayTasks(`${getNextDay(day.iso)}`)}</ul>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

CalendarTable.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          priority: PropTypes.string,
        })
      ),
    }).isRequired
  ).isRequired,
  currentMonth: PropTypes.string.isRequired,
};

export default CalendarTable;
