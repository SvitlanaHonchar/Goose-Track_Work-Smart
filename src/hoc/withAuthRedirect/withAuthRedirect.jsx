import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import {
  selectIsAccessToken,
  // selectIsLoggedIn,
  // selectIsUserLoading,
} from 'redux/auth/authSelectors';

function withAuthRedirect(Component, redirectTo) {
  const ComponentWithRedirect = props => {
    // const isLoggedIn = useSelector(selectIsLoggedIn);
    // const isLoading = useSelector(selectIsUserLoading);
    const isAccessToken = useSelector(selectIsAccessToken);

    return isAccessToken ? (
      // && !isLoading
      <Component {...props} />
    ) : (
      <Navigate to={redirectTo} />
    );
  };
  return ComponentWithRedirect;
}

export default withAuthRedirect;
