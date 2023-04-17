import React from 'react';
import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn';
import { SideBarContainer } from './Sidebar.styled';

function SideBar({ menu, onClose }) {
  return (
    <SideBarContainer className={menu}>
      <UserNav onClick={onClose} />
      <LogoutBtn />
    </SideBarContainer>
  );
}

export default SideBar;
