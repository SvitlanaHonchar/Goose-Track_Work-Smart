import React from 'react';
import CalendarHead from 'modules/CalendarComponent/components/CalendarHead/CalendarHead';
import CalendarTable from './CalendarTable/CalendarTable';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';

const ChosenMonth = () => {
  const { currentMonth } = useParams();
  const tasks = useSelector(selectAllTasks);
  // console.log('tasks: ', tasks);
  // console.log('currentMonth: ', currentMonth);
  return (
    <div className="chosenMonth">
      ChosenMonth
      <CalendarHead />
      <CalendarTable tasks={tasks} currentMonth={currentMonth} />
    </div>
  );
};

export default ChosenMonth;
