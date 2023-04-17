import React from 'react';
import UserNav from './UserNav';
import { SideBarContainer } from './Sidebar.styled';
import LogoutBtn from './LogoutBtn';

function SideBar({ menu, onClose }) {
  return (
    <SideBarContainer className={menu}>
      <UserNav onClick={onClose} />
      <LogoutBtn />
    </SideBarContainer>
  );
}

export default SideBar;
