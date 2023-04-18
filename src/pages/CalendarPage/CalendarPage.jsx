import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navigate,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';

import { getMonthTasks } from 'redux/tasks/tasksOperations';
import {
  selectAllTasks,
  selectIsTasksError,
  selectTasksError,
} from 'redux/tasks/tasksSelectors';

import {
  // selectIsLoggedIn,
  selectIsRefreshed,
  selectIsUserLoading,
  selectIsUserExist,
} from 'redux/auth/authSelectors';
import Loader from 'shared/components/Loader/Loader';
import CalendarComponent from 'modules/CalendarComponent/components/CalendarComponent';
import CalendarToolbar from 'modules/CalendarComponent/components/CalendarToolbar/CalendarToolbar';
import { showAnyError } from 'shared/utils/notifications';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentDay, currentMonth } = useParams();
  // const params = useParams();
  // console.log('params: ', params);
  const taskError = useSelector(selectTasksError);
  const isTaskError = useSelector(selectIsTasksError);
  const isUserLoading = useSelector(selectIsUserLoading);
  const isRefreshed = useSelector(selectIsRefreshed);
  const isUserExist = useSelector(selectIsUserExist);
  // const isLogged = useSelector(selectIsLoggedIn);
  const tasksForSelectedMonth = useSelector(selectAllTasks);
  const isValidDate = dateString => {
    const date = new Date(dateString);
    return !isNaN(date);
  };

  const paramsDate = isValidDate(currentDay)
    ? currentDay
    : `${currentMonth}-01`;
  const year = paramsDate.slice(0, 4);
  const month = paramsDate.slice(5, 7);

  const location = useLocation();
  const path = location.pathname;
  const currentMonthPath = new Date().toISOString().slice(0, 7);

  const hasMatchingDate = tasksForSelectedMonth?.some(task =>
    task.date?.startsWith(currentMonthPath)
  );
  console.log('CALENDARTOOLBAR hasMatchingDate : ', hasMatchingDate);

  useEffect(() => {
    // if (!isLogged && tasksForSelectedMonth  !== null && !isRefreshed && isUserLoading) return;
    if (!isUserExist && !isRefreshed && isUserLoading) return;

    setTimeout(() => {
      dispatch(
        getMonthTasks({
          year: +year,
          month: +month,
        })
      );
    }, 500);
  }, [
    dispatch,
    // isLogged,
    year,
    month,
    //taskData,
    isUserLoading,
    isRefreshed,
    isUserExist,
  ]);

  useEffect(() => {
    if (isTaskError) {
      showAnyError(taskError);
    }
  }, [isTaskError, taskError]);

  if (!isValidDate(paramsDate)) {
    //return <Navigate to="/calendar/month" replace />;
    return navigate(-1);
  }

  return (
    <div className="calendarPage">
      {path.match(/calendar(\/)?$/) ? (
        <Navigate replace to={`/calendar/month/${currentMonthPath}`} />
      ) : (
        <CalendarComponent>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          <CalendarToolbar />
        </CalendarComponent>
      )}
    </div>
  );
};

export default CalendarPage;
