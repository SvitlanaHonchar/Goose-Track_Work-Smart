// + 1. Компонент використовує визначає активну сторінку і використовує відповідне значення заголовку з назвою даної сторінки.
// + 2. На планшетній та мобільній версіях відображається кнопка для відкриття бургер меню.
// 3. На сторінціз календарем дня, при наявності не виконаних завдань в цей день, відображається Гусак з мотиваційним повідомленням, так як показано на макеті.
// + 4. Компонент рендерить:
//  - ThemeToggler - перемикач теми світла/темна
//  - UserInfo - блок з інфо про юзера

import React from 'react';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';
import { useLocation } from 'react-router';
import { StyledHeader } from './Header.styled';
import icons from '../../../../shared/icons/sprite.svg';
import goosePic from '../../../../shared/images/header/desktop_goose_header@2x.png';
const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <StyledHeader>
      <button type="button">
        <svg width="32px" height="32px">
          <use href={`${icons}#menu`} className="header_burger-btn"></use>
        </svg>
      </button>

      <div
        className="header-motivation"
        // style={{ display: 'none' }}
      >
        <img src={`${goosePic}`} alt="motivational goose" />
        <p>Let go of the past and focus on the present!</p>
      </div>

      {path === '/account' ? <h2>User Profile</h2> : <h2>Calendar</h2>}

      <ThemeToggler />
      <UserInfo />
    </StyledHeader>
  );
};

export default Header;
