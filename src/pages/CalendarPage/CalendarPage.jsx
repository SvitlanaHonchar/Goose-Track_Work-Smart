import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { getMonthTasks } from 'redux/tasks/tasksOperations';
import Loader from 'shared/components/Loader/Loader';
import CalendarToolbar from 'modules/CalendarComponent/components/CalendarToolbar/CalendarToolbar';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);

  const [chosenDate] = useState(new Date());

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <CalendarToolbar />
    </div>
  );
};

export default CalendarPage;
