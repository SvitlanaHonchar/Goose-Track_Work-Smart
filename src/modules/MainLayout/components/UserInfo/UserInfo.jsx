import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Tooltip } from '@mui/material';

import { selectIsUserLoading, selectUser } from 'redux/auth/authSelectors';
import Loader from '../../../../shared/components/Loader/Loader';
import { UserAvatar } from './UserInfoComponents/UserAvatar';
import { UserInfoTypography } from './UserInfoComponents/UserInfoTypography';
import { UserInfoMenu } from './UserInfoMenu';
import BasicPopover from './UserInfoPopover';

const style = {
  button: {
    minWidth: '32px',
    width: {
      xs: '32px',
      md: '44px',
    },

    height: {
      xs: '32px',
      md: '44px',
    },
    padding: 0,
    bgcolor: 'transparent',
  },
};

const UserInfo = () => {
  const { name, userImgUrl } = useSelector(selectUser);
  const isUserLoading = useSelector(selectIsUserLoading);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return isUserLoading ? (
    <Loader />
  ) : (
    <>
      {/* <UserInfoMenu
        name={name}
        userImgUrl={userImgUrl}
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        onClick={handleClose}
      /> */}
      <BasicPopover />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <UserInfoTypography name={name} />

        <Tooltip title="Account settings">
          <Button
            sx={style.button}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <UserAvatar
              name={name}
              userImgUrl={userImgUrl}
              width={window.innerWidth >= 768 ? 44 : 32}
              height={window.innerWidth >= 768 ? 44 : 32}
            />
          </Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default UserInfo;
