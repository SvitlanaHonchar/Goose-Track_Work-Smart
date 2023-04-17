import React from 'react';
import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

const ColumnsTasksList = ({ tasks }) => {
  const lowTasks = tasks?.filter(task => task.priority === 'low');
  const mediumTasks = tasks?.filter(task => task.priority === 'medium');
  const highTasks = tasks?.filter(task => task.priority === 'high');

  const filteredTasks = [...lowTasks, ...mediumTasks, ...highTasks];

  return (
    <ul>
      {filteredTasks.map(task => (
        <TaskColumnCard key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default ColumnsTasksList;
