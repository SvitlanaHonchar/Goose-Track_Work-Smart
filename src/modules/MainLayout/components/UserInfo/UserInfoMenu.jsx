import React, { useState, useEffect } from 'react';
import { Menu, MenuItem } from '@mui/material';

import theme from 'shared/theme';
import { UserAvatar } from './UserInfoComponents/UserAvatar';
import { UserInfoTypography } from './UserInfoComponents/UserInfoTypography';
import { UserInfoMenuNavLink } from './UserInfoComponents/UserInfoMenuNavLink';
import { UserInfoMenuBtnLogOut } from './UserInfoComponents/UserInfoMenuLogoutBtn';
import { checkDarkTheme } from 'shared/utils/checkDarkTheme';

export const UserInfoMenu = ({
  name,
  userImgUrl,
  id,
  handleClose,
  anchorEl,
  open,
}) => {
  const [darkTheme, setDarkTheme] = useState();
  useEffect(() => {
    setDarkTheme(checkDarkTheme());
  }, []);

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
            borderRadius: '8px',
            height: { xs: 189, md: 203 },
            overflow: 'visible',
            filter: darkTheme
              ? 'drop-shadow (4px 2px 16px rgba(136, 165, 191, 0.48))'
              : `drop-shadow(1px solid ${theme.palette.custom.pagDarkBorder})`,
            mt: 1.5,

            backgroundColor: darkTheme
              ? `${theme.palette.grey[800]}`
              : `${theme.palette.custom.mainWhite}`,

            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
              backgroundColor: darkTheme
                ? `${theme.palette.grey[800]}`
                : `${theme.palette.custom.mainWhite}`,
            },
            '& .MuiMenu-list': {
              padding: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          className="Name"
          onClick={handleClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: 0,
            paddingBottom: '18px',
            borderBottom: '1px solid rgba(220, 227, 229, 0.3)',
            color: darkTheme
              ? `${theme.palette.custom.mainWhite}`
              : `${theme.palette.grey[500]}`,
          }}
        >
          <UserAvatar
            name={name}
            userImgUrl={userImgUrl}
            width={window.innerWidth >= 768 ? 44 : 38}
            height={window.innerWidth >= 768 ? 44 : 38}
          />
          <UserInfoTypography
            className=""
            name={name}
            sx={{
              color: darkTheme
                ? `${theme.palette.custom.mainWhite}`
                : `${theme.palette.grey[500]}`,
            }}
          />
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
            borderBottom: '1px solid rgba(220, 227, 229, 0.3)',

            color: darkTheme
              ? `${theme.palette.custom.mainWhite}`
              : `${theme.palette.grey[400]}`,

            stroke: darkTheme
              ? `${theme.palette.custom.mainWhite}`
              : `${theme.palette.grey[400]}`,
          }}
        >
          <UserInfoMenuNavLink />
        </MenuItem>
        <UserInfoMenuBtnLogOut onClick={handleClose} />
      </Menu>
    </div>
  );
};
