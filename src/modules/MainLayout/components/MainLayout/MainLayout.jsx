import React, { Suspense } from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router';

const MainLayout = () => (
  // Component =>
  // ({ ...props }) => {
  <>
    <Header />
    <SideBar />
    {/* <Component {...props} /> */}
    <Suspense>
      <Outlet />
    </Suspense>
  </>
);

export default MainLayout;
