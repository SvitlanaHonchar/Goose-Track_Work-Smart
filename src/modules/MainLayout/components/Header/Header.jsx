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
import goosePic2x from '../../../../shared/images/header/desktop_goose_header@2x.png';
import goosePic from '../../../../shared/images/header/desktop_goose_header.png';

import { Button, Typography } from '@mui/material';
import { StyledHeader } from './Header.styled';
import UserInfo from '../UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';

const Header = ({ onBurgetClick }) => {
  const location = useLocation();
  // console.log(location);
  const path = location.pathname;

  // pulling all tasks for month
  const monthTasks = useSelector(selectAllTasks);

  if (monthTasks) {
    // get current date - замінити на дату з ChosenDay
    // const currentDate = new Date().toISOString().slice(0, 10);
    // ----for positive result:
    const testDate = '2023-04-17';

    // find todays tasks
    const todayTasks = monthTasks.filter(task => task.date === testDate);

    if (todayTasks.length > 0) {
      // find if there are not done tasks
      var tasksNotDone = todayTasks[0].tasks.some(
        task => task.category === 'to-do' || task.category === 'in-progress'
      );
    } else {
      console.log('no tasks for this date');
    }
  }

  return (
    <StyledHeader>
      {/* burger-btn */}
      <Button
        onClick={onBurgetClick}
        type="button"
        sx={{
          height: '32px',
          width: '32px',
        }}
      >
        <svg width="32px" height="32px">
          <use href={`${icons}#menu`} className="header_burger-btn_icon"></use>
        </svg>
      </Button>

      {/* left part of the header */}
      <div className="header__left-container">
        {/* page title - User Profile */}
        {path === '/account' && (
          <Typography variant="h2" component="h2">
            User Profile
          </Typography>
        )}

        {/* motivational quote */}
        {path === '/calendar' ? (
          <div className="header-calendar">
            {tasksNotDone && (
              <picture>
                <source
                  // srcset="./images/imgfirst.jpg 1x, ./images/imgfirst@2x.jpg 2x"
                  srcSet={`${goosePic} 1x, ${goosePic2x} 2x`}
                />
                <img
                  src={`${goosePic2x}`}
                  alt="motivational goose"
                  width="70px"
                  className="header-motivation"
                />
              </picture>
            )}
            <div>
              {/* page title - Calendar */}
              <Typography
                variant="h2"
                component="h2"
                className="header-title__calendar"
              >
                Calendar
              </Typography>
              {tasksNotDone && (
                <>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    className="header-motivation header-motivation__quote"
                  >
                    <Typography variant="subtitle1" component="span">
                      Let go
                    </Typography>{' '}
                    of the past and focus on the present!
                  </Typography>
                </>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="header__right-container">
        <ThemeToggler />
        <UserInfo />
      </div>
    </StyledHeader>
  );
};

export default Header;
