import React, { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//layoutes and pages lazy loading
import MainLayout from 'layouts/MainLayout';
const StartPage = lazy(() => import('pages/StartPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const AccountPage = lazy(() => import('pages/AccountPage'));
const NoMatchPage = lazy(() => import('pages/StartPage'));

//basename for react-router
const basename = 'Goose-Track_Work-Smart';

//router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<StartPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route index element={<MainLayout />}>
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
    <>
      <RouterProvider router={router} />
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default App;
