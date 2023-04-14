import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Loader from 'shared/components/Loader/Loader';

const CalendarPage = () => {
  return (
    <div>
      Calendar page
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CalendarPage;
