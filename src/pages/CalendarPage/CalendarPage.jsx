import CalendarComponent from 'modules/CalendarComponent/components/CalendarComponent';
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation, useParams } from 'react-router';
import {
  selectIsLoggedIn,
  selectIsRefreshed,
  selectIsUserLoading,
} from 'redux/auth/authSelectors';
import { getMonthTasks } from 'redux/tasks/tasksOperations';
import {
  selectAllTasks,
  selectIsTasksError,
  selectTasksError,
} from 'redux/tasks/tasksSelectors';
import Loader from 'shared/components/Loader/Loader';
import CalendarToolbar from 'modules/CalendarComponent/components/CalendarToolbar/CalendarToolbar';
import { showAnyError } from 'shared/utils/notifications';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);
  const taskData = useSelector(selectAllTasks);
  // console.log(taskData);
  // const [chosenDate] = useState(new Date());

  // --data for dispatch getMonthTasks
  const params = useParams();
  const paramsFormat = Object.keys(params).join('');
  const paramsDate =
    paramsFormat === 'currentDay'
      ? new Date(params.currentDay)?.toISOString().slice(0, 7)
      : new Date(`${params.currentMonth}-01`)?.toISOString().slice(0, 7);
  const yearParams = paramsDate.slice(0, 4);
  const monthParams =
    paramsDate.slice(5, 7) < 10
      ? paramsDate.slice(6, 7)
      : paramsDate.slice(5, 7);

  // --/data for dispatch getMonthTasks

  const location = useLocation();
  const path = location.pathname;

  const currentMonth = new Date().toISOString().slice(0, 7);

  const taskError = useSelector(selectTasksError);
  const taskErrorStatus = useSelector(selectIsTasksError);
  const isUserLoading = useSelector(selectIsUserLoading);
  // console.log('taskErrorStatus', taskErrorStatus);
  const isRefreshed = useSelector(selectIsRefreshed);

  useEffect(() => {
    if (!isLogged && !isRefreshed && taskData !== null && isUserLoading) return;

    setTimeout(() => {
      dispatch(
        getMonthTasks({
          year: +yearParams,
          month: +monthParams,
        })
      );
      // dispatch(
      //   getMonthTasks({
      //     year: chosenDate.getFullYear(),
      //     month: chosenDate.getMonth() + 1,
      //   })
      // );
    }, 500);
  }, [
    dispatch,
    isLogged,
    yearParams,
    monthParams,
    taskData,
    isUserLoading,
    isRefreshed,
  ]);

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
    </div>
  );
};

export default CalendarPage;
