import React from 'react';
import sprite from '../../../../shared/icons/sprite.svg';
import { Button } from './AddTaskBtn.styled';

const AddTaskBtn = ({ openTaskModal }) => {
  // const isTaskCreatedYesterday = () => {
  //   const currentDate = new Date();
  //   const taskDate = new Date(myTaskDetails.date);
  //   const isPastOrPresent = taskDate <= currentDate;
  //   return isPastOrPresent;
  // };

  // const isTaskCreatedYesterday = () => {
  //   const currentDate = new Date();
  //   const taskDate = new Date(myTaskDetails.date);
  //   const isToday =
  //     taskDate.getDate() === currentDate.getDate() &&
  //     taskDate.getMonth() === currentDate.getMonth() &&
  //     taskDate.getFullYear() === currentDate.getFullYear();
  //   return isToday;
  // };

  return (
    <>
      <Button
        // className={isTaskCreatedYesterday() ? '' : 'disabled'}
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
