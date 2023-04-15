// 1. Компонент отримує колекцію днів обраного місяця з задачами, вказаними для виконання на відповідні дні.
// 2. Якщо день має заплановані задачі, вони відображаються відповідними блоками всередині комірки дня.
// 3. Клік по комірці переадресовує юзера на відповідний день по маршруту /calendar/day/:date і показує модуль одного дня ChoosedDay з відповідною датою.
// Додатково:
// Клік по завданню з комірки, відкриває модалку для редагування даного завдання, заповнену даними з цього завдання.

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CalendarDates from 'calendar-dates';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

const calendarDates = new CalendarDates();

function CalendarTable({ tasks, currentMonth }) {
  const [monthMatrix, setMonthMatrix] = useState(null);

  useEffect(() => {
    const mainAsync = async () => {
      // !!! new Date - замінити на дані з пропсів
      const calendarMatrix = await calendarDates.getMatrix(new Date());
      setMonthMatrix(calendarMatrix);
    };

    mainAsync();
  }, []);

  // if (monthMatrix !== null) {
  //   // month
  //   console.log(monthMatrix);
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
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {monthMatrix !== null &&
              monthMatrix.map((week, i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {week.map((day, j) => (
                    <TableCell key={j}>{day.date}</TableCell>
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
