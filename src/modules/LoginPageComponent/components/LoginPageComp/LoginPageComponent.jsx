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
      <div className="ImageContainer">
        <div className="StyledImageGoose"></div>
        <div className="StyledImageMessage">
          <span className="Message">
            Quickly <span className="MessageFocus">come in</span> and write down
            your tasks for the day!
          </span>
        </div>
      </div>
    </StyledLoginPageComponent>
  );
};

export default LoginPageComponent;
