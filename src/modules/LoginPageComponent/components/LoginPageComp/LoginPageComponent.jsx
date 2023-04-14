import React from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
import { StyledLoginPageComponent } from './LoginPageComponent.styled';
import theme from 'shared/theme';

const LoginPageComponent = () => {
  return (
    <StyledLoginPageComponent
      sx={{ backgroundColor: theme.palette.primary.dark }}
    >
      <LoginForm />
    </StyledLoginPageComponent>
  );
};

export default LoginPageComponent;
