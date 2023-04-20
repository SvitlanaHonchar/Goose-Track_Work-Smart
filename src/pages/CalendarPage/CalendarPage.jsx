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
  selectIsTasksError,
  selectTasksError,
} from 'redux/tasks/tasksSelectors';
import {
  selectIsRefreshed,
  selectIsUserLoading,
  selectIsUserExist,
} from 'redux/auth/authSelectors';
import Loader from 'shared/components/Loader/Loader';
import { CalendarComponent } from 'modules/CalendarComponent/index';
import CalendarToolbar from 'modules/CalendarComponent/components/CalendarToolbar/CalendarToolbar';
import { showAnyError } from 'shared/utils/notifications';
import { authGetUserInfo } from 'redux/auth/authOperations';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentDay, currentMonth } = useParams();
  const paramsFormat = Object.keys(useParams()).join('');
  const taskError = useSelector(selectTasksError);
  const isTaskError = useSelector(selectIsTasksError);
  const isUserLoading = useSelector(selectIsUserLoading);
  const isRefreshed = useSelector(selectIsRefreshed);
  const isUserExist = useSelector(selectIsUserExist);

  const isValidDate = dateString => {
    const date = new Date(dateString);
    return !isNaN(date);
  };

  const urlString =
    paramsFormat === 'currentDay' ? currentDay : `${currentMonth}-01`;

  const year = urlString.slice(0, 4);
  const month = urlString.slice(5, 7);

  const location = useLocation();
  const path = location.pathname;
  const currentMonthPath = new Date().toISOString().slice(0, 7);

  useEffect(() => {
    if (!isUserExist && !isRefreshed && isUserLoading) return;
    if (!+year || !+month) return;

    setTimeout(() => {
      dispatch(
        getMonthTasks({
          year: +year,
          month: +month,
        })
      );
    }, 500);
  }, [dispatch, year, month, isUserLoading, isRefreshed, isUserExist]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(authGetUserInfo());
    }, 500);
  }, []);

  useEffect(() => {
    if (isTaskError) {
      showAnyError(taskError);
    }
  }, [isTaskError, taskError]);

  if (!isValidDate(urlString)) {
    return navigate(-1);
  }
  if (path.match(/calendar(\/)?$/)) {
    return <Navigate replace to={`/calendar/month/${currentMonthPath}`} />;
  }
  return (
    <div className="calendarPage">
      <CalendarComponent>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <CalendarToolbar />
      </CalendarComponent>
    </div>
  );
};

export default CalendarPage;
