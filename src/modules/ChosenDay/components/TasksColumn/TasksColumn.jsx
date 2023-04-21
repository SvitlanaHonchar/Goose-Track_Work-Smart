import React from 'react';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';
import theme from '../../../../shared/theme';
import { ContainerTask, GridItem, PaperTask } from './TasksColumn.styled';
import useModal from 'shared/hooks/useModal';
import TaskModal from 'shared/components/TaskModal/TaskModal';

const TasksColumn = ({ title, tasks, category, currentDay }) => {
  const { isOpen, action, closeModal, toggleModal, details } = useModal();

  const handleAddTaskClick = () => {
    toggleModal('add', { details: {} });
  };

  const checkCurrentDate = () => {
    const taskCurrentday = new Date(currentDay).toISOString().slice(0, 10);
    const today = new Date().toISOString().slice(0, 10);

    if (taskCurrentday < today) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <ContainerTask className="containerTask">
      <ColumnHeadBar
        title={title}
        openTaskModal={handleAddTaskClick}
        checkCurrentDate={checkCurrentDate()}
      />
      <GridItem
        item
        className="darkScrollbarTrack"
        marginBottom={{ md: 3 }}
        sx={{
          padding: '0',
          margin: '0',
          overflowY: 'auto',
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
            boxShadow: 'none',
            '&.MuiPaper-root': {
              backgroundColor: 'transparent',
            },
          }}
        >
          {tasks && <ColumnsTasksList tasks={tasks} />}
        </PaperTask>
      </GridItem>
      <AddTaskBtn
        openTaskModal={handleAddTaskClick}
        checkCurrentDate={checkCurrentDate()}
      />
      {isOpen && (
        <TaskModal
          action={action}
          onClose={closeModal}
          isOpen={isOpen}
          category={category}
          date={currentDay}
          taskDetails={details ? details.details : {}}
        />
      )}
    </ContainerTask>
  );
};

export default TasksColumn;
