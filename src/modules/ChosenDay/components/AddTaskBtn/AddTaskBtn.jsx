import React from 'react';
import sprite from '../../../../shared/icons/sprite.svg';
import { Button } from './AddTaskBtn.styled';

const AddTaskBtn = ({ openTaskModal, checkCurrentDate }) => {
  return (
    <>
      <Button
        className={`${checkCurrentDate ? '' : 'disabled'} addTaskButton`}
        onClick={openTaskModal}
      >
        <svg>
          <use href={sprite + '#icon-plus'} />
        </svg>
        <p>Add task</p>
      </Button>
    </>
  );
};
export default AddTaskBtn;
