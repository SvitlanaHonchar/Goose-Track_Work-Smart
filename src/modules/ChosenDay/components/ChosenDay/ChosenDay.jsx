import CalendarHead from 'modules/CalendarComponent/components/CalendarHead/CalendarHead';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';
import TasksColumnsList from '../TasksColumnsList/TasksColumnsList';
import Loader from 'shared/components/Loader/Loader';
import { useParams } from 'react-router';

const ChosenDay = () => {
  const [tasksCurrentDay, setTasksCurrentDay] = useState(null);
  const { currentDay } = useParams();
  const tasksAll = useSelector(selectAllTasks);

  useEffect(() => {
    if (!tasksAll) return;
    const currentTasks = tasksAll.find(task => task.date === currentDay)?.tasks;
    if (!currentTasks) return;
    const todoTasks = currentTasks.filter(task => task.category === 'to-do');
    const inProgressTasks = currentTasks.filter(
      task => task.category === 'in-progress'
    );
    const doneTasks = currentTasks.filter(task => task.category === 'done');

    setTasksCurrentDay({ todoTasks, inProgressTasks, doneTasks });
  }, [tasksAll, currentDay]);

  return (
    <>
      <CalendarHead mode="dayMode" currentDay={currentDay} />
      {tasksCurrentDay ? (
        <TasksColumnsList tasks={tasksCurrentDay} currentDay={currentDay} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ChosenDay;
