import React, { Suspense, useEffect, useState } from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router';
import { StyledDiv, StyledMainContent } from './MainLayout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { authGetUserInfo } from 'redux/auth/authOperations';
import { useTheme } from '@mui/material';

export const MainLayout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [menuStatus, setMenuStatus] = useState('is-closed');

  useEffect(() => {
    if (user.name !== null) {
      return;
    }
    if (!user.email) {
      return;
    }

    dispatch(authGetUserInfo());
  }, [dispatch, user]);

  const theme = useTheme();

  const openMenu = () => {
    setMenuStatus('is-open');
  };

  const closeMenu = () => {
    setMenuStatus('is-closed');
  };

  return (
    <StyledDiv theme={theme} className="mainLayout">
      <SideBar menu={menuStatus} onClose={closeMenu} />
      <StyledMainContent>
        <Header onBurgerClick={openMenu} />

        <Suspense>
          <Outlet />
        </Suspense>
      </StyledMainContent>
    </StyledDiv>
  );
};
