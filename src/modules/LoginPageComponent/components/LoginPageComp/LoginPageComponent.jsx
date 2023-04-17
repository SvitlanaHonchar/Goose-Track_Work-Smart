import React from 'react';
import { LoginForm } from '../LoginForm/LoginForm';
import { StyledLoginPageComponent } from './LoginPageComponent.styled';
<<<<<<< HEAD
=======
import AuthNavigate from 'shared/components/AuthNavigate/AuthNavigate';

>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
import theme from 'shared/theme';

const LoginPageComponent = () => {
  return (
    <StyledLoginPageComponent
<<<<<<< HEAD
      sx={{ backgroundColor: theme.palette.custom.blue }}
    >
      <LoginForm />
      <div className="ImageContainer">
        <div className="StyledImageGoose"></div>
        <div className="StyledImageMessage">
          <span className="Message">
            Quickly <span className="MessageFocus">come in</span> and write down
            your tasks for the day!
          </span>
=======
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <div className="ContentContainer">
        <LoginForm />
        <AuthNavigate link="/register" text="Sign up" />
        <div className="ImageContainer">
          <div className="StyledImageGoose"></div>
          <div className="StyledImageMessage">
            <span className="Message">
              Quickly <span className="MessageFocus">come in</span> and write
              down your tasks for the day!
            </span>
          </div>
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
        </div>
      </div>
    </StyledLoginPageComponent>
  );
};

export default LoginPageComponent;
