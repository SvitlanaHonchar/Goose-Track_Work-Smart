import { Avatar, Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsUserLoading, selectUser } from 'redux/auth/authSelectors';
import Loader from '../../../../shared/components/Loader/Loader';
import theme from 'shared/theme';
import UserInfoModal from './UserInfoModal';

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

export const stringToColor = string => {
  let hash = 0;
  let i;

  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

const UserInfo = () => {
  const { name, userImgUrl } = useSelector(selectUser);
  const isUserLoading = useSelector(selectIsUserLoading);

  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  return isUserLoading ? (
    // <b>Loading...</b>
    <Loader />
  ) : (
    <>
      {openModal && (
        <UserInfoModal
          name={name}
          userImgUrl={userImgUrl}
          onCloseModal={onCloseModal}
        />
      )}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <Typography
          sx={{
            fontWeight: 700,
            color: theme.palette.grey[500],
            lineHeight: {
              xs: 1.29,
              md: 1,
            },

            fontSize: {
              xs: 14,
              md: 18,
            },
          }}
        >
          {name?.split(' ')[0] || ''}
        </Typography>
        <Button sx={style.button} onClick={() => onOpenModal()}>
          {userImgUrl ? (
            <Avatar
              src={userImgUrl}
              alt={`${name} picture`}
              sx={{
                width: {
                  xs: 32,
                  md: 44,
                },
                height: {
                  xs: 32,
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
                  xs: 32,
                  md: 44,
                  background: stringToColor(name),
                },
                height: {
                  xs: 32,
                  md: 44,
                },
                // border: `2px solid ${theme.palette.primary.main}`,
              }}
            >
              {name?.charAt(0) || ''}
            </Avatar>
          )}
        </Button>
      </Box>
    </>
  );
};

export default UserInfo;
