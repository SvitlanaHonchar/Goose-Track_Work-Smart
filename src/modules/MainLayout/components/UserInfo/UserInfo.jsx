import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsUserLoading, selectUser } from 'redux/auth/authSelectors';
import theme from 'shared/theme';

const UserInfo = () => {
<<<<<<< HEAD
  return <div>UserInfo</div>;
=======
  const { name, userImgUrl } = useSelector(selectUser);
  const isUserLoading = useSelector(selectIsUserLoading);
  console.log('name', name);
  return isUserLoading ? (
    <b>Loading...</b>
  ) : (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {userImgUrl ? (
        <Avatar
          src={userImgUrl}
          alt={`${name} picture`}
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        />
      ) : (
        <Avatar
          alt={`${name} picture`}
          sx={{
            width: 72,
            height: 72,
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        >
          {name?.charAt(0) || ''}
        </Avatar>
      )}

      <Typography>{name?.split(' ')[0] || ''}</Typography>
    </Box>
  );
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
};

export default UserInfo;
