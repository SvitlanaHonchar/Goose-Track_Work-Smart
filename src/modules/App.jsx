import React, { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { MainLayout } from './MainLayout';
import { authRefresh } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import StartPage from 'pages/StartPage/StartPage';

import SharedLayout from '../shared/components/SharedLayout.js/SharedLayout';
import withAuthRedirect from 'hoc/withAuthRedirect/withAuthRedirect';
import 'redux/tasks/tasksOperations';
import { AppStyled } from './App.styled';
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const NoMatchPage = lazy(() => import('pages/NoMatchPage/NoMatchPage'));
const ChosenMonth = lazy(() => import('./ChosenMonth/components/ChosenMonth'));
const ChosenDay = lazy(() =>
  import('./ChosenDay/components/ChosenDay/ChosenDay')
);

const AccountPageWithRedirect = withAuthRedirect(AccountPage, '/');
const CalendarPageWithRedirect = withAuthRedirect(CalendarPage, '/');

// ----------------------------------------------------
// for gitHub
// const basename = '/Goose-Track_Work-Smart/';

// for work
// const basename = '';
// ----------------------------------------------------

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<SharedLayout />}>
    <Route path="/" element={<SharedLayout />} errorElement={<NoMatchPage />}>
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

      <Route path="*" element={<Navigate to="/calendar" />} />
    </Route>
  )
  // { basename }
);

const App = () => {
  const dispatch = useDispatch();

  // Refresh - success
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('persist:auth')).refreshToken) {
      dispatch(authRefresh());
    }
  }, [dispatch]);

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
