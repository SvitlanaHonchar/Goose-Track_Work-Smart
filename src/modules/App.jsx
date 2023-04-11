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
// import { authLogin, authRegister } from 'redux/auth/authOperations';
// import { selectUser } from 'redux/auth/authSelectors';
// import { useDispatch, useSelector } from 'react-redux';
import StartPage from 'pages/StartPage/StartPage';
import withAuthRedirect from './Common/withAuthRedirect/withAuthRedirect';
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

//adding private routes with redirect using HOC withAuthRedirect
const AccountPageWithLayoutandRedirect = withAuthRedirect(
  AccountPageWithLayout
);
const CalendarPageWithLayoutandRedirect = withAuthRedirect(
  CalendarPageWithLayout
);
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
  return (
    <div className="App">
      <RouterProvider router={router} />
      <div>
        <Toaster />
      </div>
      Goose Track
    </div>
  );
};

export default App;
