import React, { useEffect, useState } from 'react';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { useLocation, useParams } from 'react-router';
import icons from '../../../../shared/icons/sprite.svg';
import goosePic2x from '../../../../shared/images/header/desktop_goose_header@2x.png';
import goosePic from '../../../../shared/images/header/desktop_goose_header.png';

import { Button, Typography } from '@mui/material';
import { StyledHeader } from './Header.styled';
import UserInfo from '../UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { selectAllTasks } from 'redux/tasks/tasksSelectors';
// import { showSuccessDoneTasks } from 'shared/utils/notifications';

const Header = ({ onBurgerClick }) => {
  const location = useLocation();
  const path = location.pathname;
  // console.log(location);
  const params = useParams();
  // console.log('params:', params);

  const [tasksStatus, setTasksStatus] = useState(null);

  // pulling all tasks for month
  const monthTasks = useSelector(selectAllTasks);

  useEffect(() => {
    if (monthTasks && path.includes('day')) {
      const currentDate = path.includes('day') && params.currentDay;
      // ----for positive result:
      // const currentDate = '2023-04-17';

      // find todays tasks
      const todayTasks = monthTasks.filter(task => task.date === currentDate);

      if (todayTasks.length > 0) {
        // find if there are not done tasks
        var tasksNotDone = todayTasks[0].tasks.some(
          task => task.category === 'to-do' || task.category === 'in-progress'
        );
      }
      // else {
      // showSuccessDoneTasks();
      // }
    }

    setTasksStatus(tasksNotDone);
  }, [monthTasks, path, params.currentDay]);

  return (
    <StyledHeader className="headerLayout">
      {/* burger-btn */}
      <Button
        type="button"
        sx={{
          height: '32px',
          width: '32px',
        }}
        onClick={onBurgerClick}
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
        {path.includes('/calendar') ? (
          <div className="header-calendar">
            {tasksStatus && path.includes('/calendar/day') && (
              <picture>
                <source srcSet={`${goosePic} 1x, ${goosePic2x} 2x`} />
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
              {tasksStatus && path.includes('/calendar/day') && (
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
