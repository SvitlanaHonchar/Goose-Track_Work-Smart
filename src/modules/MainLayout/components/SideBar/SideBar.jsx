import React, { useRef } from 'react';
import UserNav from './UserNav';
import LogoutBtn from './LogoutBtn';
import { SideBarContainer } from './Sidebar.styled';

function SideBar({ menu, onClose }) {
  const screenWidth = useRef(window.innerWidth);
  console.log('screen width', screenWidth <= 768);

  return (
    <SideBarContainer className={menu}>
      <UserNav onClick={onClose} />
      <LogoutBtn />
    </SideBarContainer>
  );
}

export default SideBar;
