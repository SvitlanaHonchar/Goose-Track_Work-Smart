import React from 'react';
import { Box, Modal } from '@mui/material';
import { useEffect, useRef } from 'react';
import theme from 'shared/theme';

import { UserAvatar } from './UserInfoComponents/UserAvatar';
import { UserInfoTypography } from './UserInfoComponents/UserInfoTypography';
import { UserInfoModalBtnLogOut } from './UserInfoComponents/UserInfoModalLogoutBtn';
import { UserInfoModalNavLink } from './UserInfoComponents/UserInfoModalNavLink';

const UserInfoModal = ({ name, userImgUrl, onCloseModal }) => {
  const rootRef = useRef();

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
        ref={rootRef}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        onClose={onCloseModal}
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
          </Box>
          <UserInfoModalBtnLogOut />
        </Box>
      </Modal>
    </div>
  );
};
export default UserInfoModal;
