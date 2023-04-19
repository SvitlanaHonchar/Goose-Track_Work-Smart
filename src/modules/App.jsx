import React, { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
// import { selectUserError } from 'redux/auth/authSelectors';
//layoutes and pages lazy loading
import { MainLayout } from './MainLayout';
import { authRefresh } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import StartPage from 'pages/StartPage/StartPage';

import SharedLayout from '../shared/components/SharedLayout.js/SharedLayout';
import withAuthRedirect from 'hoc/withAuthRedirect/withAuthRedirect';
import 'redux/tasks/tasksOperations';
import { AppStyled } from './App.styled';
import { selectUser } from 'redux/auth/authSelectors';

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
const CalendarPageWithRedirect = withAuthRedirect(CalendarPage, '/');

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
        <Route path="account" element={<AccountPageWithRedirect />} />
        <Route path="calendar" element={<CalendarPageWithRedirect />}>
          <Route path="month/:currentMonth" element={<ChosenMonth />} />
          <Route path="day/:currentDay" element={<ChosenDay />} />
        </Route>
      </Route>

      <Route path="*" element={<NoMatchPage />} />
    </Route>
  ),
  { basename }
);

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // Refresh - success
  useEffect(() => {
    if (user.name !== null) return;
    // if (error?.status === 401) {
    //   console.log('401 error');
    // }
    dispatch(authRefresh());
  }, [dispatch, user.name]);

  return (
    <AppStyled className="app">
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
    </AppStyled>
  );
};

export default App;
