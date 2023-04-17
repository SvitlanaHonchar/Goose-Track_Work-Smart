import React from 'react';
import sprite from '../../../../shared/icons/sprite.svg';
import { TaskToolbarList } from './TaskToolbar.styled';
import useModal from 'shared/hooks/useModal';
import TaskModal from 'shared/components/TaskModal/TaskModal';
import { showSuccessDeleteTask } from 'shared/utils/notifications';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from 'redux/tasks/tasksOperations';

import { COLUMN_TASKS } from 'shared/constants/tasksCategory';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const TaskToolbar = ({ ...taskData }) => {
  const dispatch = useDispatch();

  const { category, date, _id: id } = taskData;
  const { isOpen, action, closeModal, toggleModal, details } = useModal();

  const availableCategories = COLUMN_TASKS.filter(
    item => item.categories !== category
  );

  const handleMoveTask = newCategories => {
    dispatch(updateTask({ id, taskData }));
    console.log('handleMoveTask', newCategories);
  };

  const handleEditTaskClick = () => {
    toggleModal('edit', { details: taskData });
  };

  const handleDeleteTask = taskId => {
    dispatch(deleteTask(taskId));
    showSuccessDeleteTask(category);
    console.log('deleteTask');
  };

  return (
    <>
      <TaskToolbarList>
        <li>
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
        <li>
          <button
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
