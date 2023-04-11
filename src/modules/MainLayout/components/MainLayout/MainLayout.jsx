import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

const MainLayout =
  Component =>
  ({ ...props }) => {
    return (
      <>
        <Header />
        <SideBar />
        <Component {...props} />
      </>
    );
  };

export default MainLayout;
