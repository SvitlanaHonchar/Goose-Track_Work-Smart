import React from 'react';
import PropTypes from 'prop-types';

function CalendarTable({ tasks, currentMonth }) {
  return <div>CalendarTable</div>;
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
