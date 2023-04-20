import { NoMatchPageComponent } from 'modules/NoMatchPageComponent/';
import React from 'react';

import { Navigate, useLocation } from 'react-router';

const NoMatchPage = () => {
  // --for redirect
  const location = useLocation();
  const path = location.pathname;

  const currentMonth = new Date().toISOString().slice(0, 7);
  const currentDay = new Date().toISOString().slice(0, 10);

  return (
    <div>
      {path === '/calendar/month' && (
        <Navigate replace to={`/calendar/month/${currentMonth}`} />
      )}
      {path === '/calendar/day' && (
        <Navigate replace to={`/calendar/day/${currentDay}`} />
      )}
      <NoMatchPageComponent />
    </div>
  );
};

export default NoMatchPage;
