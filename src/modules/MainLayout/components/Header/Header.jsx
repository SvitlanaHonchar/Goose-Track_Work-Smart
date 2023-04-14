import React, { useEffect, useState } from 'react';
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
import { showSuccessDoneTasks } from 'shared/utils/notifications';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  const [tasksStatus, setTasksStatus] = useState(null);

  // pulling all tasks for month
  const monthTasks = useSelector(selectAllTasks);

  useEffect(() => {
    if (monthTasks) {
      // get current date - замінити на дату з ChosenDay
      // const currentDate = new Date().toISOString().slice(0, 10);
      // ----for positive result:
      const testDate = '2023-04-10';

      // find todays tasks
      const todayTasks = monthTasks.filter(task => task.date === testDate);

      if (todayTasks.length > 0) {
        // find if there are not done tasks
        var tasksNotDone = todayTasks[0].tasks.some(
          task => task.category === 'to-do' || task.category === 'in-progress'
        );
      } else {
        showSuccessDoneTasks();
      }
    }

    setTasksStatus(tasksNotDone);
  }, [monthTasks]);

  return (
    <StyledHeader>
      {/* burger-btn */}
      <Button
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
            {tasksStatus && (
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
              {tasksStatus && (
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
