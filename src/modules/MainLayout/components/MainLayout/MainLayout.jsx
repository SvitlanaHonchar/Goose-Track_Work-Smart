import React, { Suspense } from 'react';
// import React, { useEffect } from 'react';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router';
import { StyledDiv } from './MainLayout.styled';
// import { useDispatch, useSelector } from 'react-redux';

const MainLayout = () => {
  // -------------------повернути коли буде store-------------------
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (user.name !== null) {
  //     return;
  //   }

  //   dispatch(authGetUserInfo);
  // }, [dispatch, user.name]);
  // -------------------/повернути коли буде store-------------------

  return (
    // Component =>
    // ({ ...props }) => {
    <StyledDiv>
      <Header />
      <SideBar />
      {/* <Component {...props} /> */}
      <Suspense>
        <Outlet />
      </Suspense>
    </StyledDiv>
  );
};
export default MainLayout;
