import React, { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

//layoutes and pages lazy loading
import MainLayout from './MainLayout/components/MainLayout/MainLayout';
const StartPage = lazy(() => import('pages/StartPage/StartPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const NoMatchPage = lazy(() => import('pages/NoMatchPage/NoMatchPage'));
const ChoosedMonth = lazy(() => import('pages/ChoosedMonth/ChoosedMonth'));
const ChoosedDay = lazy(() => import('pages/ChoosedDay/ChoosedDay'));

// ----------------------------------------------------
// for gitHub
const basename = 'Goose-Track_Work-Smart';

// for work
// const basename = '';
// ----------------------------------------------------

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<StartPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route element={<MainLayout />}>
        <Route path="account" element={<AccountPage />} />
        <Route path="calendar" element={<CalendarPage />}>
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
