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
import withAuthRedirect from './Common/withAuthRedirect/withAuthRedirect';
import SharedLayout from './Common/SharedLayout.js/SharedLayout';
// const StartPage = lazy(() => import('pages/StartPage/StartPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const NoMatchPage = lazy(() => import('pages/NoMatchPage/NoMatchPage'));
const ChoosedMonth = lazy(() => import('pages/ChoosedMonth/ChoosedMonth'));
const ChoosedDay = lazy(() => import('pages/ChoosedDay/ChoosedDay'));

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
          <Route path="month/:currentMonth" element={<ChoosedMonth />} />
          <Route path="day/:currentDay" element={<ChoosedDay />} />
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
    <Box sx={{ backgroundColor: theme.palette.primary.main }}>
      <Typography variant="h1" color={theme.palette.common.white}>
        <RouterProvider router={router} />
        <div>
          <Toaster />
        </div>
      </Typography>
    </Box>
  );
};

export default App;
