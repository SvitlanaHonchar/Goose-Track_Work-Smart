import React from 'react';
import TasksColumn from '../TasksColumn/TasksColumn';
import { COLUMN_TASKS } from 'shared/constants/tasksCategory';
import { GridContainer } from './TasksColumnsList.styled';

const TasksColumnsList = ({ tasks, currentDay }) => {
  const allTask = [];

  const tasksList = Object.keys(tasks).map(taskKey => {
    return { [taskKey]: tasks[taskKey] };
  });

  const taskColumn = () => {
    tasksList?.map(tasks => {
      Object.values(tasks).map(tasks2 => {
        tasks2?.forEach(element => {
          allTask.push(element);
        });
      });
    });
  };
  taskColumn();

  const categories = ['to-do', 'in-progress', 'done'];
  const tasksByCategory = categories.reduce((acc, category) => {
    acc[category] = allTask?.filter(task => task.category === category);
    return acc;
  }, {});

  return (
    <GridContainer
      container
      justifyContent="center"
      spacing={2}
      sx={{
        overflowX: 'auto',
        flexDirection: 'column',
        maxWidth: '1087',
        height: '568',
      }}
    >
      {COLUMN_TASKS.map(column => (
        <TasksColumn
          category={column.categories}
          key={column.categories}
          title={column.title}
          tasks={tasksByCategory[column.categories]}
        />
      ))}
    </GridContainer>
  );
};

export default TasksColumnsList;
