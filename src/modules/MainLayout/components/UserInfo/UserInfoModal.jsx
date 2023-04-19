import React from 'react';
import { Box, Avatar, Modal, Button } from '@mui/material';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { authLogout } from 'redux/auth/authOperations';
// import { useDispatch } from 'react-redux';

import theme from 'shared/theme';
// import { stringToColor } from './UserInfo';
import { useEffect, useRef } from 'react';
import sprite from '../../../../shared/icons/sprite.svg';
import { NavLink } from 'react-router-dom';
import { UserAvatar } from './UserInfoComponents/UserAvatar';
import { UserInfoTypography } from './UserInfoComponents/UserInfoTypography';
import { UserInfoModalBtnLogOut } from './UserInfoComponents/UserInfoModalLogoutBtn';
import { UserInfoModalNavLink } from './UserInfoComponents/UserInfoModalNavLink';

const style = {
  buttonLogOut: {
    minWidth: {
      xs: '108px',
    },
    alignItems: 'center',
    justifyContent: 'center',
    width: '108px',
    height: '37px',
    gap: '8px',
    bgcolor: theme.palette.primary.main,
    boxShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
    borderRadius: '8px',
    fontSize: 14,
    lineHeight: 1.29,
    letterSpacing: '-0.02em',
    color: theme.palette.custom.mainWhite,
    stroke: theme.palette.custom.mainWhite,
  },
};

const UserInfoModal = ({ name, userImgUrl, onCloseModal }) => {
  const rootRef = useRef();
  // const dispatch = useDispatch();

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  return (
    <div>
      <Modal
        // sx={style.container}
        ref={rootRef}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 197,
            paddingTop: '14px',
            paddingBottom: '18px',
            paddingLeft: '14px',
            paddingRight: '14px',
            backgroundColor: theme.palette.custom.mainWhite,
            boxShadow: '0px 4px 16 rgba(17, 17, 17, 0.1)',
            borderRadius: '8px',
            height: { xs: 189, md: 203 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              paddingBottom: '18px',
              borderBottom: '1px solid rgba(220, 227, 229, 0.3)',
            }}
          >
            <UserAvatar name={name} userImgUrl={userImgUrl} />
            <UserInfoTypography name={name} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: {
                xs: '32px',
                md: '40px',
              },
              paddingTop: '8px',
              paddingBottom: '8px',
              stroke: theme.palette.grey[400],
              borderBottom: '1px solid rgba(220, 227, 229, 0.3)',
            }}
          >
            <UserInfoModalNavLink onCloseModal={onCloseModal} />
            {/* <svg height="20" width="20">
              <use href={sprite + '#userCheck'}></use>
            </svg>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 14,
                lineHeight: 1.21,
                color: theme.palette.grey[400],
              }}
            >
              <NavLink to="/account" onClick={onCloseModal}>
                {' '}
                My account
              </NavLink>
            </Typography> */}
          </Box>
          <UserInfoModalBtnLogOut />
          {/* <Button
            variant="contained"
            sx={style.buttonLogOut}
            onClick={() => dispatch(authLogout())}
          >
            Log out
            <svg height="16" width="16">
              <use href={sprite + '#logOut'}></use>
            </svg>
          </Button> */}
        </Box>
      </Modal>
    </div>
  );
};
export default UserInfoModal;
