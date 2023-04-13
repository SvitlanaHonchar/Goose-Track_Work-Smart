// + 1. Компонент використовує визначає активну сторінку і використовує відповідне значення заголовку з назвою даної сторінки.
// + 2. На планшетній та мобільній версіях відображається кнопка для відкриття бургер меню.
// 3. На сторінціз календарем дня, при наявності не виконаних завдань в цей день, відображається Гусак з мотиваційним повідомленням, так як показано на макеті.
// + 4. Компонент рендерить:
//  - ThemeToggler - перемикач теми світла/темна
//  - UserInfo - блок з інфо про юзера

import React from 'react';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { useLocation } from 'react-router';
import icons from '../../../../shared/icons/sprite.svg';
import goosePic from '../../../../shared/images/header/desktop_goose_header@2x.png';
import { Button } from '@mui/material';
import { StyledHeader } from './Header.styled';
import UserInfo from '../UserInfo/UserInfo';
import { useTheme } from '@mui/system';

const Header = () => {
  const location = useLocation();
  console.log(location);
  const path = location.pathname;

  const theme = useTheme();
  console.log('theme:', theme);
  return (
    <StyledHeader theme={theme}>
      <Button
        type="button"
        sx={{
          height: '32px',
          width: '32px',
        }}
      >
        <svg width="32px" height="32px">
          <use href={`${icons}#menu`} className="header_burger-btn"></use>
        </svg>
      </Button>

      {path === '/account' ? (
        <h2>User Profile</h2>
      ) : (
        <>
          <div
            className="header-motivation"
            // style={{ display: 'none' }}
          >
            <img src={`${goosePic}`} alt="motivational goose" />
            <p>Let go of the past and focus on the present!</p>
          </div>
          <h2>Calendar</h2>
        </>
      )}

      <ThemeToggler />
      <UserInfo />
    </StyledHeader>
  );
};

export default Header;
