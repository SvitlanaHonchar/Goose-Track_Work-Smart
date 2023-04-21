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
      return Object.values(tasks).map(tasks2 => {
        return tasks2?.forEach(element => {
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
      flexDirection="row"
      flexWrap="nowrap"
      spacing={2}
      className="darkScrollbarTrack"
      columnGap={{ md: 5, lg: 3.3 }}
      sx={{
        overflowY: 'hidden',
        overflowX: 'auto',
        '&.MuiGrid-container': {
          padding: 0,
          margin: 1,
          marginLeft: 0,
          marginRight: 0,
        },
      }}
    >
      {COLUMN_TASKS.map(column => (
        <TasksColumn
          category={column.categories}
          key={column.categories}
          title={column.title}
          tasks={tasksByCategory[column.categories]}
          currentDay={currentDay}
        />
      ))}
    </GridContainer>
  );
};

export default TasksColumnsList;
