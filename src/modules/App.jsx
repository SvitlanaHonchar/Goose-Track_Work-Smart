import React, { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

//layoutes and pages lazy loading
import MainLayout from './MainLayout/components/MainLayout/MainLayout';
import { Box, Typography } from '@mui/material';
// import { authLogin, authRegister } from 'redux/auth/authOperations';
// import { selectUser } from 'redux/auth/authSelectors';
// import { useDispatch, useSelector } from 'react-redux';
import StartPage from 'pages/StartPage/StartPage';

import SharedLayout from '../shared/components/SharedLayout.js/SharedLayout';
import withAuthRedirect from 'hoc/withAuthRedirect/withAuthRedirect';

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
          {/* for use without authoriazation */}
          {/* <Route path="account" element={<AccountPage />} />
        <Route path="calendar" element={<CalendarPage />}> */}
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
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  // console.log('user: ', user);
  // useEffect(() => {
  //   dispatch(
  //     authRegister({
  //       name: 'artemartem',
  //       email: 'artem24232@gmail.com',
  //       password: '13135463442342',
  //     })
  //   );
  // }, [dispatch]);
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h1">
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
      </Typography>
    </Box>
  );
};

export default App;
