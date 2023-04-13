// + 1. Компонент використовує визначає активну сторінку і використовує відповідне значення заголовку з назвою даної сторінки.
// 2. На планшетній та мобільній версіях відображається кнопка для відкриття бургер меню.
// 3. На сторінціз календарем дня, при наявності не виконаних завдань в цей день, відображається Гусак з мотиваційним повідомленням, так як показано на макеті.
// + 4. Компонент рендерить:
//  - ThemeToggler - перемикач теми світла/темна
//  - UserInfo - блок з інфо про юзера

import React from 'react';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import UserInfo from '../UserInfo/UserInfo';
import { useLocation } from 'react-router';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      {path === '/account' ? <h2>User Profile</h2> : <h2>Calendar</h2>}
      <button type="button" data-menu-open>
        <svg width="40" height="40" aria-label="menu icon">
          <use href="../../../../shared/icons/sprite.svg#menu"></use>
        </svg>
      </button>
      <ThemeToggler />
      <UserInfo />
    </div>
  );
};

export default Header;
