import CalendarComponent from 'modules/CalendarComponent/components/CalendarComponent';
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getMonthTasks } from 'redux/tasks/tasksOperations';
import {
  selectIsTasksError,
  selectTasksError,
} from 'redux/tasks/tasksSelectors';
import Loader from 'shared/components/Loader/Loader';
import { showAnyError } from 'shared/utils/notifications';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);

  const [chosenDate] = useState(new Date());

  const location = useLocation();
  const path = location.pathname;

  const currentMonth = new Date().toISOString().slice(0, 7);

  const taskError = useSelector(selectTasksError);
  const taskErrorStatus = useSelector(selectIsTasksError);

  // console.log('taskErrorStatus', taskErrorStatus);

  useEffect(() => {
    if (isLogged) {
      setTimeout(() => {
        dispatch(
          getMonthTasks({
            year: chosenDate.getFullYear(),
            month: chosenDate.getMonth() + 1,
          })
        );
      }, 1000);
    }
  }, [dispatch, isLogged, chosenDate]);

  useEffect(() => {
    if (taskErrorStatus) {
      showAnyError(taskError);
    }
  }, [taskErrorStatus, taskError]);

  return (
    <div>
      Calendar page
      {path === '/calendar' && (
        <Navigate replace to={`/calendar/month/${currentMonth}`} />
      )}
      <CalendarComponent>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </CalendarComponent>
    </div>
  );
};

export default CalendarPage;
