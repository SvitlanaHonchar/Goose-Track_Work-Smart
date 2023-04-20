import React, { useState } from 'react';
import sprite from '../../../../shared/icons/sprite.svg';
import {
  CategoryTitle,
  MenuItemColumn,
  MenuList,
  TaskToolbarList,
} from './TaskToolbar.styled';
import useModal from 'shared/hooks/useModal';
import TaskModal from 'shared/components/TaskModal/TaskModal';
// import {
//   showSuccessDeleteTask,
//   showSuccessMoveTask,
// } from 'shared/utils/notifications';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from 'redux/tasks/tasksOperations';

import { COLUMN_TASKS } from 'shared/constants/tasksCategory';
import { Button } from '@mui/material';
import theme from 'shared/theme';

const TaskToolbar = ({ ...taskData }) => {
  const dispatch = useDispatch();

  const checkCurrentDate = () => {};

  const { priority, category, date, title, start, end, _id: id } = taskData;
  const { isOpen, action, closeModal, toggleModal, details } = useModal();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const editedTaskDetails = {
    id,
    title,
    start,
    end,
    priority,
  };

  const availableCategories = COLUMN_TASKS.filter(
    item => item.categories !== category
  );

  const handleMoveTask = newCategory => {
    const updatingTask = {
      ...taskData,
      category: newCategory,
    };
    dispatch(updateTask({ taskId: id, taskData: updatingTask }));
  };

  const handleEditTaskClick = () => {
    toggleModal('edit', { details: editedTaskDetails });
  };

  const handleDeleteTask = taskId => {
    dispatch(deleteTask(taskId));
  };

  const isMobile = theme.breakpoints.values.xs;

  return (
    <>
      <TaskToolbarList>
        <li>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ minWidth: 16 }}
          >
            <svg>
              <use href={sprite + '#arrowInCircle'} />
            </svg>
          </Button>
          <MenuList
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            transformOrigin={
              isMobile
                ? { horizontal: 'right', vertical: 'top' }
                : { horizontal: 'left', vertical: 'top' }
            }
            anchorOrigin={
              isMobile
                ? { horizontal: 'right', vertical: 'bottom' }
                : { horizontal: 'left', vertical: 'bottom' }
            }
          >
            {availableCategories.map(category => (
              <MenuItemColumn
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10',
                }}
                key={category.categories}
                onClick={() => {
                  handleMoveTask(category.categories);
                }}
              >
                <CategoryTitle>{category.title}</CategoryTitle>
                <svg>
                  <use href={sprite + '#arrowInCircle'} />
                </svg>
              </MenuItemColumn>
            ))}
          </MenuList>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              handleEditTaskClick();
            }}
          >
            <svg>
              <use href={sprite + '#pencil'} />
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              handleDeleteTask(id);
            }}
          >
            <svg>
              <use href={sprite + '#trash'} />
            </svg>
          </button>
        </li>
      </TaskToolbarList>

      {isOpen && (
        <TaskModal
          action={action}
          onClose={closeModal}
          isOpen={isOpen}
          category={category}
          date={date}
          taskDetails={details ? details.details : {}}
        />
      )}
    </>
  );
};

export default TaskToolbar;
