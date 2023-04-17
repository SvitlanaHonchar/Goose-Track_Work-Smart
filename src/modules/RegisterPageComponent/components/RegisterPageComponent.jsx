import React from 'react';
import RegisterForm from './RegisterForm';
import {
  Container,
  ImgWrapper,
  Text,
  RegisterFormWrapper,
  TectAccent,
} from './RegisterPageComponent.styled';
import AuthNavigate from '../../../shared/components/AuthNavigate/AuthNavigate';

const RegisterPageComponent = () => {
  return (
    <>
      <Container>
        <RegisterFormWrapper>
          <RegisterForm />
        </RegisterFormWrapper>
        <AuthNavigate link="/login" text="Log in" />
        <ImgWrapper>
          <Text>
            Quickly <TectAccent>register</TectAccent> and familiarize yourself
            with the application!
          </Text>
        </ImgWrapper>
      </Container>
    </>
  );
};

export default RegisterPageComponent;
