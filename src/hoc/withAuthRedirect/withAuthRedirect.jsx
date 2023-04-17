import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

function withAuthRedirect(Component, redirectTo) {
  const ComponentWithRedirect = props => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    console.log('isLoggedIn in redirect hoc: ', isLoggedIn);
    return true ? <Component {...props} /> : <Navigate to={redirectTo} />;
  };
  return ComponentWithRedirect;
}

export default withAuthRedirect;
