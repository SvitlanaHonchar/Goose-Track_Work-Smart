import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Box, Button } from '@mui/material';

import {
  selectIsUserExist,
  selectIsUserLoading,
  selectUser,
} from 'redux/auth/authSelectors';
import Loader from '../../../../shared/components/Loader/Loader';
import theme from 'shared/theme';
import UserInfoModal from './UserInfoModal';
import { changeAvatarColor } from './UserInfoComponents/changeAvatarColor';
import { UserInfoTypography } from './UserInfoComponents/UserInfoTypography';
import { authGetUserInfo } from 'redux/auth/authOperations';

const style = {
  button: {
    minWidth: {
      xs: '32px',
      md: '44px',
    },

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
  const dispatch = useDispatch();
  const isUserExist = useSelector(selectIsUserExist);
  useEffect(() => {
    // if (!isUserExist) return;
    dispatch(authGetUserInfo());
  }, [dispatch, isUserExist]);

  const { name, userImgUrl } = useSelector(selectUser);
  const isUserLoading = useSelector(selectIsUserLoading);

  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  return isUserLoading ? (
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
        <UserInfoTypography name={name} />
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
                  background: changeAvatarColor(name),
                },
                height: {
                  xs: 32,
                  md: 44,
                },
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
