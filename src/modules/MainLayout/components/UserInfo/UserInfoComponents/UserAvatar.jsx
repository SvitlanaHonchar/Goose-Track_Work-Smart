import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';

import theme from 'shared/theme';
import { changeAvatarColor } from './changeAvatarColor';

export const UserAvatar = ({ userImgUrl, name, width, height }) => {
  return (
    <>
      {userImgUrl ? (
        <Avatar
          src={userImgUrl}
          alt={`${name} picture`}
          sx={{
            width: width,
            height: height,
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        />
      ) : (
        <Avatar
          alt={`${name} picture`}
          sx={{
            width: width,
            background: changeAvatarColor(name),
            height: height,
          }}
        >
          {name?.charAt(0) || ''}
        </Avatar>
      )}
    </>
  );
};

UserAvatar.propTypes = {
  userImgUrl: PropTypes.string,
  name: PropTypes.string,
};
