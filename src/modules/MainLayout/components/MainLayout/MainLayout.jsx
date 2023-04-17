import React, { Suspense, useEffect, useState } from 'react';
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

  const [menuStatus, setMenuStatus] = useState('is-closed');

  useEffect(() => {
    if (user.name !== null) {
      return;
    }

    dispatch(authGetUserInfo());
  }, [dispatch, user.name]);

  const theme = useTheme();
  // console.log(theme);

  const openMenu = () => {
    setMenuStatus('is-open');
  };

  const closeMenu = () => {
    setMenuStatus('is-closed');
  };

  return (
    // Component =>
    // ({ ...props }) => {
    <StyledDiv theme={theme}>
      <Box className="mainLayout-frame" sx={{ margin: 0 }}>
        <SideBar menu={menuStatus} onClose={closeMenu} />
        <div className="rigth-frame">
          <Header onBurgerClick={openMenu} />

          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </Box>

      {/* <Component {...props} /> */}
    </StyledDiv>
  );
};
export default MainLayout;
