import React from 'react';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import theme from '../../../../shared/theme';
import { GridItem, PaperTask } from './TasksColumn.styled';
import useModal from 'shared/hooks/useModal';
import TaskModal from 'shared/components/TaskModal/TaskModal';

const TasksColumn = ({ title, tasks, category }) => {
  const { isOpen, action, closeModal, toggleModal, details } = useModal();

  const handleAddTaskClick = () => {
    toggleModal('add', { details: {} });
  };

  return (
    <>
      <GridItem
        item
        sm={12}
        md={6}
        lg={4}
        sx={{
          padding: '0',
          margin: '0',
          overflowY: 'auto',
          maxWidth: '344',
          flexDirection: 'column',
          backgroundColor: theme.palette.primary.body,
        }}
      >
        <PaperTask
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ColumnHeadBar title={title} openTaskModal={handleAddTaskClick} />
          {tasks && <ColumnsTasksList tasks={tasks} />}
          {<AddTaskBtn openTaskModal={handleAddTaskClick} />}
        </PaperTask>
      </GridItem>

      {isOpen && (
        <TaskModal
          action={action}
          onClose={closeModal}
          isOpen={isOpen}
          category={category}
          // date={date}
          taskDetails={details ? details.details : {}}
        />
      )}
    </>
  );
};

export default TasksColumn;
