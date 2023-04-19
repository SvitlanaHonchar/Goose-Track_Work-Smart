import React from 'react';
import {
  BoxWrapper,
  InfoBar,
  Title,
  UserBar,
  Priority,
} from './TaskColumnCard.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import TaskToolbar from '../TaskToolbar/TaskToolbar';
import clsx from 'clsx';

const TaskColumnCard = ({ ...task }) => {
  const { priority, title } = task;

  const { userImgUrl } = useSelector(selectUser);

  // const checkCurrentDate = () => {
  //   const currentDate = new Date();
  //   const taskDate = new Date(task.date);
  //   const isToday =
  //     taskDate.getDate() === currentDate.getDate() &&
  //     taskDate.getMonth() === currentDate.getMonth() &&
  //     taskDate.getFullYear() === currentDate.getFullYear();
  //   return isToday;
  // };

  return (
    <BoxWrapper>
      <Title>
        <p>{title}</p>
      </Title>
      <InfoBar>
        <UserBar>
          <img src={userImgUrl} />
          <Priority
            className={clsx({
              low: priority === 'low',
              medium: priority === 'medium',
              high: priority === 'high',
            })}
          >
            {priority}
          </Priority>
        </UserBar>
        <TaskToolbar {...task} />
      </InfoBar>
    </BoxWrapper>
  );
};

export default TaskColumnCard;
