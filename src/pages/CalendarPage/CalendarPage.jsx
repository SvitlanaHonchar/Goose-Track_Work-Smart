import CalendarComponent from 'modules/CalendarComponent/components/CalendarComponent';
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getMonthTasks } from 'redux/tasks/tasksOperations';
import Loader from 'shared/components/Loader/Loader';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);

  const [chosenDate] = useState(new Date());

  useEffect(() =>
    // redirect to /calendar/month/currentdate

    {}, []);

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

  return (
    <div>
      Calendar page
      <CalendarComponent />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CalendarPage;
