import React, { Suspense, useEffect } from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router';
import { StyledDiv } from './MainLayout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { authGetUserInfo } from 'redux/auth/authOperations';

const MainLayout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.name !== null) {
      return;
    }

    dispatch(authGetUserInfo);
  }, [dispatch, user.name]);

  return (
    // Component =>
    // ({ ...props }) => {
    <StyledDiv>
      <div className="mainLayout-frame">
        <Header />
        <SideBar />
      </div>

      {/* <Component {...props} /> */}
      <Suspense>
        <Outlet />
      </Suspense>
    </StyledDiv>
  );
};
export default MainLayout;
