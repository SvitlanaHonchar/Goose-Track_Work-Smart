<<<<<<< HEAD
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getMonthTasks } from 'redux/tasks/tasksOperations';
import Loader from 'shared/components/Loader/Loader';
=======
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
import CalendarToolbar from 'modules/CalendarComponent/components/CalendarToolbar/CalendarToolbar';
import { showAnyError } from 'shared/utils/notifications';
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e

const CalendarPage = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);

  const [chosenDate] = useState(new Date());

<<<<<<< HEAD
=======
  const location = useLocation();
  const path = location.pathname;

  const currentMonth = new Date().toISOString().slice(0, 7);

  const taskError = useSelector(selectTasksError);
  const taskErrorStatus = useSelector(selectIsTasksError);

  // console.log('taskErrorStatus', taskErrorStatus);

>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
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

<<<<<<< HEAD
  return (
    <div>
      Calendar page
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
=======
  useEffect(() => {
    if (taskErrorStatus) {
      showAnyError(taskError);
    }
  }, [taskErrorStatus, taskError]);

  return (
    <div>
      {path === '/calendar' && (
        <Navigate replace to={`/calendar/month/${currentMonth}`} />
      )}
      <CalendarComponent>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <CalendarToolbar />
      </CalendarComponent>
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
    </div>
  );
};

export default CalendarPage;
