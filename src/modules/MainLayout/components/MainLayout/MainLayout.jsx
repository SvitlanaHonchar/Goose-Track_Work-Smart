import React, { Suspense, useEffect } from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router';
import { StyledDiv } from './MainLayout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { authGetUserInfo } from 'redux/auth/authOperations';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material';

const MainLayout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.name !== null) {
      return;
    }

    dispatch(authGetUserInfo);
  }, [dispatch, user.name]);

  const theme = useTheme();
  console.log(theme);

  return (
    // Component =>
    // ({ ...props }) => {
    <StyledDiv theme={theme}>
      <Box className="mainLayout-frame">
        <Header />
        <SideBar />
      </Box>

      {/* <Component {...props} /> */}
      <Suspense>
        <Outlet />
      </Suspense>
    </StyledDiv>
  );
};
export default MainLayout;
