import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

function withAuthRedirect(Component, redirectTo) {
  const ComponentWithRedirect = props => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    console.log('isLoggedIn in redirect hoc: ', isLoggedIn);
<<<<<<< HEAD
    return isLoggedIn ? <Component {...props} /> : <Navigate to={redirectTo} />;
=======
    return true ? <Component {...props} /> : <Navigate to={redirectTo} />;
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
  };
  return ComponentWithRedirect;
}

export default withAuthRedirect;
