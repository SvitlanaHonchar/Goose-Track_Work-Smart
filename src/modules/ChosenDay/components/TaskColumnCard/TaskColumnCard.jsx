import React from 'react';
import {
  BoxWrapper,
  InfoBar,
  Title,
  UserBar,
  AvatarUser,
  Priority,
} from './TaskColumnCard.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import clsx from 'clsx';
import TaskToolbar from '../TaskToolbar/TaskToolbar';
import { changeAvatarColor } from 'modules/MainLayout/components/UserInfo/UserInfoComponents/changeAvatarColor';

const TaskColumnCard = ({ ...task }) => {
  const { priority, title } = task;

  const { name, userImgUrl } = useSelector(selectUser);

  return (
    <BoxWrapper key={task._id} className="boxWrapperTask">
      <Title>
        <p>{title}</p>
      </Title>
      <InfoBar>
        <UserBar>
          {userImgUrl ? (
            <AvatarUser
              src={userImgUrl}
              alt={`${name} picture`}
              sx={{ width: '32px', height: '32px' }}
            />
          ) : (
            <AvatarUser
              alt={`${name} picture`}
              sx={{
                width: '32px',
                height: '32px',
                background: changeAvatarColor(name),
              }}
            >
              {name?.charAt(0) || ''}
            </AvatarUser>
          )}
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
