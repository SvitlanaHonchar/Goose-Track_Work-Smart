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

<<<<<<< HEAD
  useEffect(() => {
    if (!tasksAll) return;

    const currentTasks = tasksAll.find(task => task.date === currentDay)?.tasks;

    const todoTasks = currentTasks.filter(task => task.category === 'to-do');
    const inProgressTasks = currentTasks.filter(
      task => task.category === 'in-progress'
    );
    const doneTasks = currentTasks.filter(task => task.category === 'done');

    setTasksCurrentDay({ todoTasks, inProgressTasks, doneTasks });
  }, [tasksAll, currentDay]);
=======
  // useEffect(() => {
  //   if (!tasksAll) return;
  //   const currentTasks = tasksAll.find(task => task.date === currentDay)?.tasks;
  //   const todoTasks = currentTasks.filter(task => task.category === 'to-do');
  //   const inProgressTasks = currentTasks.filter(
  //     task => task.category === 'in-progress'
  //   );
  //   const doneTasks = currentTasks.filter(task => task.category === 'done');

  //   setTasksCurrentDay({ todoTasks, inProgressTasks, doneTasks });
  // }, [tasksAll, currentDay]);
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e

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
