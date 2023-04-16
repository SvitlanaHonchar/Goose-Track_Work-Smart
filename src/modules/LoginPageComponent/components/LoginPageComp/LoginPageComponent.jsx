import React from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
import { StyledLoginPageComponent } from './LoginPageComponent.styled';
import theme from 'shared/theme';

const LoginPageComponent = () => {
  return (
    <StyledLoginPageComponent
      sx={{ backgroundColor: theme.palette.custom.blue }}
    >
      <div className="ContentContainer">
        <LoginForm />
        <div className="ImageContainer">
          <div className="StyledImageGoose"></div>
          <div className="StyledImageMessage">
            <span className="Message">
              Quickly <span className="MessageFocus">come in</span> and write
              down your tasks for the day!
            </span>
          </div>
        </div>
      </div>
    </StyledLoginPageComponent>
  );
};

export default LoginPageComponent;
