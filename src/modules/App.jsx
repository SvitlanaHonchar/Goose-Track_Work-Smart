import React, { lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

//layoutes and pages lazy loading
import MainLayout from './MainLayout/components/MainLayout/MainLayout';
import { authRegister } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import StartPage from 'pages/StartPage/StartPage';
// const StartPage = lazy(() => import('pages/StartPage/StartPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const NoMatchPage = lazy(() => import('pages/NoMatchPage/NoMatchPage'));
const ChoosedMonth = lazy(() => import('pages/ChoosedMonth/ChoosedMonth'));
const ChoosedDay = lazy(() => import('pages/ChoosedDay/ChoosedDay'));

//using MainLayout HOC for adding shared layout
const AccountPageWithLayout = MainLayout(AccountPage);
const CalendarPageWithLayout = MainLayout(CalendarPage);

// ----------------------------------------------------
// for gitHub
// const basename = 'Goose-Track_Work-Smart';

// for work
const basename = '';
// ----------------------------------------------------

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<StartPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="account" element={<AccountPageWithLayout />} />
      <Route path="calendar" element={<CalendarPageWithLayout />}>
        <Route path="month/:currentMonth" element={<ChoosedMonth />} />
        <Route path="day/:currentDay" element={<ChoosedDay />} />
      </Route>

      <Route path="*" element={<NoMatchPage />} />
    </Route>
  ),
  { basename }
);

const App = () => {
  const user = useSelector(selectUser);
  console.log('user: ', user);
  useEffect(() => {
    authRegister({
      name: 'test1',
      email: 'userTest@example.com',
      password: 'qwerty123',
    });
  }, []);
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <RouterProvider router={router} />
      <div>
        <Toaster />
      </div>
      Goose Track
    </div>
  );
};

export default App;
