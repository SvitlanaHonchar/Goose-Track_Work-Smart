import React, { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';

//layoutes and pages lazy loading
import MainLayout from './MainLayout/components/MainLayout/MainLayout';
import {
  // authGetUserInfo,
  authLogin,
  // authLogout,
  authRefresh,
  authRegister,
  // authUpdate,
} from 'redux/auth/authOperations';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import StartPage from 'pages/StartPage/StartPage';

import SharedLayout from '../shared/components/SharedLayout.js/SharedLayout';
import withAuthRedirect from 'hoc/withAuthRedirect/withAuthRedirect';
import // createTask,
// deleteTask,
// getMonthTasks,
// updateTask,
'redux/tasks/tasksOperations';

// const StartPage = lazy(() => import('pages/StartPage/StartPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const NoMatchPage = lazy(() => import('pages/NoMatchPage/NoMatchPage'));
const ChosenMonth = lazy(() => import('./ChosenMonth/components/ChosenMonth'));
const ChosenDay = lazy(() =>
  import('./ChosenDay/components/ChosenDay/ChosenDay')
);

//using MainLayout HOC for adding shared layout
// const AccountPageWithLayout = MainLayout(AccountPage);
// const CalendarPageWithLayout = MainLayout(CalendarPage);

//adding private routes with redirect using HOC withAuthRedirect

const AccountPageWithRedirect = withAuthRedirect(AccountPage, '/');
// const CalendarPageWithRedirect = withAuthRedirect(CalendarPage, '/');

// ----------------------------------------------------
// for gitHub
// const basename = 'Goose-Track_Work-Smart';

// for work
const basename = '';
// ----------------------------------------------------

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<StartPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route element={<MainLayout />}>
        {/*// <Route path="account" element={<AccountPageWithRedirect />} />
        {/*  <Route path="calendar" element={<CalendarPageWithRedirect />}>*/}
        {/* for use without authoriazation */}
        <Route path="account" element={<AccountPage />} />
        <Route path="calendar" element={<CalendarPage />}>
          <Route path="month/:currentMonth" element={<ChosenMonth />} />
          <Route path="day/:currentDay" element={<ChosenDay />} />{' '}
          {/*!!!!! currentDay format: '2023-04-14'*/}
        </Route>
      </Route>

      <Route path="*" element={<NoMatchPage />} />
    </Route>
  ),
  { basename }
);

const App = () => {
  //!Testing API
  // const isLogged = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  // Register- success
  // useEffect(() => {
  //   dispatch(
  //     authRegister({
  //       name: 'Marina',
  //       email: 'lolol@gmail.com',
  //       password: 'mari123mari',
  //     })
  //   );
  // }, [dispatch]);

  //login-
  //login- success
  useEffect(() => {
    dispatch(
      authLogin({
        email: 'lolol@gmail.com',
        password: 'mari123mari',
      })
    );
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(
  //     authLogin({
  //       // name: 'Avataghtr',
  //       email: 'smth5@gmail.com',
  //       password: '1234567',
  //     })
  //   );
  // }, [dispatch]);

  //logout
  // useEffect(() => {
  //   console.log('isLogged: ', isLogged);
  //   if (isLogged) dispatch(authLogout());
  // }, [dispatch, isLogged]);
  // const theme = useTheme();

  // Refresh - success
  useEffect(() => {
    dispatch(authRefresh());
  }, [dispatch]);

  //Get user info -success
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (isLogged) dispatch(authGetUserInfo());
  //   }, 1000);
  // }, [dispatch, isLogged]);

  //Update user
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (isLogged)
  //       dispatch(
  //         authUpdate({
  //           name: 'One',
  //           phone: 38094383377,
  //           birthday: null,
  //           skype: 'One1',
  //           userImgUrl: 'image.jpg',
  //         })
  //       );
  //   }, 1000);
  // }, [dispatch, isLogged]);

  //Get month tasks - success
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (isLogged) dispatch(getMonthTasks({ year: 2023, month: 3 }));
  //   }, 1000);
  // }, [dispatch, isLogged]);

  //Create task - success
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (isLogged) {
  //       dispatch(
  //         createTask({
  //           title: 'new',
  //           start: '9-00',
  //           end: '14-00',
  //           priority: 'low',
  //           category: 'to-do',
  //           date: '2023-04-18',
  //         })
  //       );
  //     }
  //   }, 1000);
  // }, [dispatch, isLogged]);

  // Update task
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (isLogged) {
  //       dispatch(
  //         updateTask({
  //           taskId: '6437ec67a7f30f6c375288f9',
  //           taskData: {
  //             title: 'updated',
  //             start: '8-00',
  //             end: '16-00',
  //             priority: 'high',
  //             category: 'to-do',
  //             date: '2023-04-20',
  //           },
  //         })
  //       );
  //     }
  //   }, 1000);
  // }, [dispatch, isLogged]);

  //Delete task
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (isLogged) {
  //       dispatch(deleteTask('6437f3a7a7f30f6c37528c15'));
  //     }
  //   }, 2000);
  // }, [dispatch, isLogged]);

  //!Testing API

  return (
    <>
      <RouterProvider router={router} />

      <div>
        <Toaster
          position="top-right"
          reverseOrder={true}
          toastOptions={{
            duration: 5000,
            style: {
              background: '#F7F7F7',
              color: '#111111',
              fontSize: '14px',
              lineHeight: '1.17',
            },

            success: {
              iconTheme: {
                primary: '#3E85F3',
                secondary: '#FFFFFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#EA3D65',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default App;
