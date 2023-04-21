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
import { StyledDiv, StyledLi, StyledUl } from './CalendarTable.styled';
import useModal from 'shared/hooks/useModal';
import TaskModal from 'shared/components/TaskModal/TaskModal';

const calendarDates = new CalendarDates();

function CalendarTable({ tasks, currentMonth }) {
  const [monthMatrix, setMonthMatrix] = useState(null);
  const { isOpen, action, closeModal, toggleModal, details } = useModal();
  const handleEditTaskClick = editedTaskDetails => {
    toggleModal('edit', { details: editedTaskDetails });
  };
  const getAllDayTasks = date => {
    if (tasks === null) {
      return '';
    }
    const todayTasks = tasks.filter(task => task.date === date);

    const todayTasksMarkup =
      todayTasks.length !== 0
        ? todayTasks[0].tasks.map(task => (
            <StyledLi key={task._id} className={task.priority}>
              <p>{task.title}</p>
              {isOpen && (
                <TaskModal
                  action={action}
                  onClose={closeModal}
                  isOpen={isOpen}
                  category={task.category}
                  date={date}
                  taskDetails={details ? details.details : {}}
                />
              )}
            </StyledLi>
          ))
        : '';

    return todayTasksMarkup;
  };

  function getNextDay(currDate) {
    currDate = new Date(currDate);
    const nextDate = new Date(currDate.getTime() + 24 * 60 * 60 * 1000);

    return nextDate.toISOString().slice(0, 10);
  }

  useEffect(() => {
    const mainAsync = async () => {
      const calendarMatrix = await calendarDates.getMatrix(
        new Date(currentMonth)
      );

      setMonthMatrix(calendarMatrix);
    };

    mainAsync();
  }, [currentMonth]);

  return (
    <StyledDiv>
      <TableContainer
        className="calendarTable"
        sx={{
          backgroundColor: '#fff',

          borderRadius: '8px',
        }}
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
                        boxSizing: 'border-box',
                        height: 125,
                        width: 155,
                        paddingTop: '18px',
                        paddingRight: '22px',
                        paddingLeft: '8px',
                      }}
                      className={
                        'tableCell ' +
                        (getNextDay(day.iso).slice(5, 7) !==
                        new Date().toISOString().slice(5, 7)
                          ? 'not-current'
                          : '')
                      }
                    >
                      <div className="cell-container">
                        <NavLink
                          to={`/calendar/day/${getNextDay(day.iso)}`}
                          className={
                            getNextDay(day.iso) ===
                            new Date().toISOString().slice(0, 10)
                              ? 'current'
                              : ''
                          }
                        >
                          {getNextDay(day.iso).slice(8, 10) < 10
                            ? getNextDay(day.iso).slice(9, 10)
                            : getNextDay(day.iso).slice(8, 10)}
                        </NavLink>

                        <StyledUl>
                          {getAllDayTasks(`${getNextDay(day.iso)}`).length < 1
                            ? getAllDayTasks(`${getNextDay(day.iso)}`)
                            : getAllDayTasks(`${getNextDay(day.iso)}`).slice(
                                0,
                                1
                              )}
                          {getAllDayTasks(`${getNextDay(day.iso)}`).length >
                            1 && (
                            <NavLink
                              to={`/calendar/day/${getNextDay(day.iso)}`}
                              className="more-btn"
                            >
                              ...more
                            </NavLink>
                          )}
                        </StyledUl>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledDiv>
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
