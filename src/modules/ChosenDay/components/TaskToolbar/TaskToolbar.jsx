import React from 'react';
import sprite from '../../../../shared/icons/sprite.svg';
import { TaskToolbarList } from './TaskToolbar.styled';
import useModal from 'shared/hooks/useModal';
import TaskModal from 'shared/components/TaskModal/TaskModal';
// import {
//   showSuccessDeleteTask,
//   showSuccessMoveTask,
// } from 'shared/utils/notifications';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from 'redux/tasks/tasksOperations';

import { COLUMN_TASKS } from 'shared/constants/tasksCategory';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const TaskToolbar = ({ ...taskData }) => {
  const dispatch = useDispatch();

  const checkCurrentDate = () => {};

  const { priority, category, date, title, start, end, _id: id } = taskData;
  const { isOpen, action, closeModal, toggleModal, details } = useModal();

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

  return (
    <>
      <TaskToolbarList>
        <li className={checkCurrentDate ? '' : 'disabled'}>
          <div className="relative">
            <button type="button">
              <FormControl sx={{ width: '16', height: '16' }}>
                <InputLabel id="demo-select-small">
                  <svg>
                    <use href={sprite + '#arrowInCircle'} />
                  </svg>
                </InputLabel>
                <Select
                  inputProps={{ 'aria-label': 'Without label' }}
                  labelId="demo-select-small"
                  id="demo-select-small"
                >
                  {availableCategories.map(category => (
                    <MenuItem
                      key={category.categories}
                      onClick={() => {
                        handleMoveTask(category.categories);
                      }}
                    >
                      {category.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </button>
          </div>
        </li>
        <li className={checkCurrentDate ? '' : 'disabled'}>
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
        <li className={checkCurrentDate ? '' : 'disabled'}>
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
