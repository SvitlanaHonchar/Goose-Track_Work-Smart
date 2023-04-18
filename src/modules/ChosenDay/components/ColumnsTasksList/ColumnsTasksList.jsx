import React from 'react';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { TasksWrapper } from './ColumnsTasksList.styled';

const ColumnsTasksList = ({ tasks }) => {
  const lowTasks = tasks?.filter(task => task.priority === 'low');
  const mediumTasks = tasks?.filter(task => task.priority === 'medium');
  const highTasks = tasks?.filter(task => task.priority === 'high');

  const filteredTasks = [...lowTasks, ...mediumTasks, ...highTasks];

  return (
    <TasksWrapper>
      {filteredTasks.map(task => (
        <TaskColumnCard key={task.id} {...task} />
      ))}
    </TasksWrapper>
  );
};

export default ColumnsTasksList;
