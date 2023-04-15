import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CalendarDates from 'calendar-dates';

const calendarDates = new CalendarDates();

function CalendarTable({ tasks, currentMonth }) {
  const [monthMatrix, setMonthMatrix] = useState(null);

  useEffect(() => {
    const mainAsync = async () => {
      const calendarMatrix = await calendarDates.getMatrix(new Date());
      // console.log(`currMonth`, calendarMatrix);
      setMonthMatrix(calendarMatrix);
    };

    mainAsync();
  }, []);

  if (monthMatrix !== null) {
    // month
    console.log(monthMatrix);
    // week
    console.log(monthMatrix[0]);
    // day data
    console.log(monthMatrix[0][0]);
    // day
    console.log(monthMatrix[0][0].date);
  }

  return (
    <div>
      CalendarTable
      <table>
        <tbody>
          {monthMatrix !== null &&
            monthMatrix.map((week, i) => (
              <tr>
                {week.map((day, j) => (
                  <td>{day.date}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
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
