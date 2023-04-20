import React from 'react';
import CalendarHead from 'modules/CalendarComponent/components/CalendarHead/CalendarHead';
import CalendarTable from './CalendarTable/CalendarTable';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';
import Loader from 'shared/components/Loader/Loader';

export const ChosenMonth = () => {
  const { currentMonth } = useParams();

  const tasks = useSelector(selectAllTasks);

  return (
    <div className="chosenMonth">
      <CalendarHead mode="monthMode" />
      {tasks ? (
        <CalendarTable tasks={tasks} currentMonth={currentMonth} />
      ) : (
        <Loader />
      )}
    </div>
  );
};
