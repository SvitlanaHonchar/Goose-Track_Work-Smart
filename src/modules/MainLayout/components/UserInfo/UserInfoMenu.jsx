import React from 'react';
import { Menu, MenuItem } from '@mui/material';

import theme from 'shared/theme';
import { UserAvatar } from './UserInfoComponents/UserAvatar';
import { UserInfoTypography } from './UserInfoComponents/UserInfoTypography';
import { UserInfoMenuNavLink } from './UserInfoComponents/UserInfoMenuNavLink';
import { UserInfoMenuBtnLogOut } from './UserInfoComponents/UserInfoMenuLogoutBtn';

export const UserInfoMenu = ({
  name,
  userImgUrl,
  id,
  handleClose,
  anchorEl,
  open,
}) => {
  return (
    <div>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: 197,
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: '18px',
            paddingRight: '18px',
            backgroundColor: theme.palette.custom.mainWhite,
            borderRadius: '8px',
            height: { xs: 189, md: 203 },
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,

            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
            '& .MuiMenu-list': {
              padding: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: 0,
            paddingBottom: '18px',
            borderBottom: '1px solid rgba(220, 227, 229, 0.3)',
          }}
        >
          <UserAvatar
            name={name}
            userImgUrl={userImgUrl}
            width={window.innerWidth >= 768 ? 44 : 38}
            height={window.innerWidth >= 768 ? 44 : 38}
          />
          <UserInfoTypography name={name} />
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            minHeight: 0,
            mb: {
              xs: '32px',
              md: '40px',
            },
            padding: 0,
            paddingTop: '8px',
            paddingBottom: '8px',
            stroke: theme.palette.grey[400],
            borderBottom: '1px solid rgba(220, 227, 229, 0.3)',
          }}
        >
          <UserInfoMenuNavLink />
        </MenuItem>
        <UserInfoMenuBtnLogOut onClick={handleClose} />
      </Menu>
    </div>
  );
};
