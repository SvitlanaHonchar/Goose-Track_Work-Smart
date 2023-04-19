import React from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
import { StyledLoginPageComponent } from './LoginPageComponent.styled';
import AuthNavigate from 'shared/components/AuthNavigate/AuthNavigate';

import theme from 'shared/theme';

export const LoginPageComponent = () => {
  return (
    <StyledLoginPageComponent
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <div className="ContentContainer">
        <LoginForm />
        <AuthNavigate link="/register" text="Sign up" />
        <div className="ImageContainer">
          <div className="StyledImageGoose"></div>
          <div className="StyledImageMessege">
            <span className="Messege">
              Quickly <span className="MessegeFocus">come in</span> and write
              down your tasks for the day!
            </span>
          </div>
        </div>
      </div>
    </StyledLoginPageComponent>
  );
};
