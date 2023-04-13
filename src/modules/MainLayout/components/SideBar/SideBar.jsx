import React from 'react';
import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn';
import { SideBarContainer } from './Sidebar.styled';

function SideBar() {
  return (
    <SideBarContainer>
      <UserNav />
      <LogoutBtn />
    </SideBarContainer>
  );
}

export default SideBar;
