import React from 'react';

import LoginPageComponent from 'modules/LoginPageComponent/components/LoginPageComp/LoginPageComponent';
import AuthNavigate from 'shared/components/AuthNavigate/AuthNavigate';

const LoginPage = () => {
  return (
    <div>
      <AuthNavigate />
      <LoginPageComponent />
    </div>
  );
};

export default LoginPage;
