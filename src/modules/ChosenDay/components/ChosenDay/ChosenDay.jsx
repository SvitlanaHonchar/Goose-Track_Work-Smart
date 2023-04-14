import CalendarHead from 'modules/CalendarComponent/components/CalendarHead/CalendarHead';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
import Loader from 'shared/components/Loader/Loader';
import { useParams } from 'react-router';

const ChosenDay = () => {
  const tasksAll = useSelector(selectAllTasks);
  console.log('tasksAll: ', tasksAll);
  const tasksCurrentDay = null;
  const { currentDay } = useParams();
  console.log('currentDay: ', currentDay);
  return (
    <>
      <CalendarHead />
      {tasksCurrentDay ? (
        <TasksColumnsList tasks={tasksCurrentDay} currentDay={currentDay} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ChosenDay;
