import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';

import theme from 'shared/theme';
import { changeAvatarColor } from './changeAvatarColor';

export const UserAvatar = ({ userImgUrl, name }) => {
  return (
    <>
      {userImgUrl ? (
        <Avatar
          src={userImgUrl}
          alt={`${name} picture`}
          sx={{
            width: {
              xs: 38,
              md: 44,
            },
            height: {
              xs: 38,
              md: 44,
            },

            border: `2px solid ${theme.palette.primary.main}`,
          }}
        />
      ) : (
        <Avatar
          alt={`${name} picture`}
          sx={{
            width: {
              xs: 38,
              md: 44,
            },
            background: changeAvatarColor(name),
            height: {
              xs: 38,
              md: 44,
            },
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
