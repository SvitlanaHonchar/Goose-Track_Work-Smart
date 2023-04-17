<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import {
  StyledLoginForm,
  StyledButton,
<<<<<<< HEAD
  StyledNavLink,
  StyledContainer,
} from './LoginForm.styled.js';
import Icons from '../../../../shared/icons/sprite.svg';
import { authLogin } from 'redux/auth/authOperations.js';
import theme from '../../../../shared/theme.js';
=======
  StyledContainer,
  StyledVisibilityBtn,
} from './LoginForm.styled.js';
import sprite from '../../../../shared/icons/sprite.svg';
import { authLogin } from 'redux/auth/authOperations.js';
import {
  showSuccessLogIn,
  showError,
} from '../../../../shared/utils/notifications';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import theme from 'shared/theme';
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e

const validationSchema = object({
  email: string().required('Required').email('Invalid email'),
  password: string()
    .required('Required')
    .min(6, 'Password should be 6 chars minimum.'),
});

<<<<<<< HEAD
const Icon = ({ name, width, height }) => (
  <svg width={width} height={height}>
    <use className="Icon" xlinkHref={`${Icons}#${name} `} />
  </svg>
);

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <>
=======
export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  return (
    <StyledContainer>
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
<<<<<<< HEAD
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          dispatch(
            authLogin({
              email: values.email,
              password: values.password,
            })
          );

          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isSubmitting }) => (
          <StyledContainer>
=======
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const actionResult = await dispatch(
              authLogin({
                email: values.email,
                password: values.password,
              })
            );

            if (actionResult.type === 'user/login/fulfilled') {
              showSuccessLogIn();
              navigate('/calendar/month');
              setSubmitting(false);
              resetForm();
            } else {
              showError();
            }
          } catch (e) {
            console.log(e);
          }
        }}
      >
        {({ values, isSubmitting, errors, touched }) => (
          <div className="FormContainer">
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
            <StyledLoginForm>
              <p className="Title"> Log in</p>
              <label className="Inputlabel">
                Email
                <Field
<<<<<<< HEAD
                  className="InputField"
=======
                  className={
                    errors.email && touched.email
                      ? 'InvalidInput InputField'
                      : 'ValidInput InputField'
                  }
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="nadiia@gmail.com"
<<<<<<< HEAD
=======
                  required
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="ErrorMessage"
                />
              </label>
<<<<<<< HEAD
              <label className="Inputlabel">
                Password
                <Field
                  className="InputField"
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                />
=======
              <label className="Inputlabel ">
                <span>Password</span>
                <div className="PasswordInput ">
                  <Field
                    className={
                      errors.password && touched.password
                        ? 'InvalidInput InputField InputFieldPassword'
                        : 'ValidInput InputField InputFieldPassword'
                    }
                    name="password"
                    value={values.password}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    type={passwordType}
                    required
                  />
                  <StyledVisibilityBtn type="button" onClick={togglePassword}>
                    {passwordType === 'password' ? (
                      <Visibility sx={{ color: theme.palette.primary.main }} />
                    ) : (
                      <VisibilityOff
                        sx={{ color: theme.palette.primary.main }}
                      />
                    )}
                  </StyledVisibilityBtn>
                </div>
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
                <ErrorMessage
                  className="ErrorMessage"
                  name="password"
                  component="div"
                />
              </label>

              <StyledButton
                type="submit"
                disabled={isSubmitting}
                variant="contained"
              >
                Submit
<<<<<<< HEAD
                <Icon className="Login" name="logIn" width="18" height="18" />
              </StyledButton>
            </StyledLoginForm>
          </StyledContainer>
        )}
      </Formik>
      <StyledNavLink to="/register">Sign in</StyledNavLink>
    </>
=======
                <svg height="13.5" width="13.5">
                  <use href={sprite + '#loginStartPage'}></use>
                </svg>
              </StyledButton>
            </StyledLoginForm>
          </div>
        )}
      </Formik>
    </StyledContainer>
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
  );
};
