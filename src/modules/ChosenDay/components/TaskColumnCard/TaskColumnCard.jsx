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
import clsx from 'clsx';
import TaskToolbar from '../TaskToolbar/TaskToolbar';

const TaskColumnCard = ({ ...task }) => {
  const { priority, title } = task;

  const { userImgUrl } = useSelector(selectUser);

  return (
    <BoxWrapper key={task._id} className="boxWrapperTask">
      <Title>
        <p>{title}</p>
      </Title>
      <InfoBar>
        <UserBar>
          <img src={userImgUrl} alt="avatar" />
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
