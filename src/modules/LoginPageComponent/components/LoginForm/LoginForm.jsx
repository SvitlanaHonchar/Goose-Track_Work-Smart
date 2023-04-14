import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import {
  StyledLoginForm,
  StyledButton,
  StyledNavLink,
  StyledContainer,
} from './LoginForm.styled.js';
import Icons from '../../../../shared/icons/sprite.svg';
import { authLogin } from 'redux/auth/authOperations.js';
import theme from '../../../../shared/theme.js';

const validationSchema = object({
  email: string().required('Required').email('Invalid email'),
  password: string()
    .required('Required')
    .min(6, 'Password should be 6 chars minimum.'),
});

const Icon = ({ name, width, height }) => (
  <svg width={width} height={height}>
    <use className="Icon" xlinkHref={`${Icons}#${name} `} />
  </svg>
);

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
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
            <StyledLoginForm>
              <p className="Title"> Log in</p>
              <label className="Inputlabel">
                Email
                <Field
                  className="InputField"
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="nadiia@gmail.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="ErrorMessage"
                />
              </label>
              <label className="Inputlabel">
                Password
                <Field
                  className="InputField"
                  type="password"
                  name="password"
                  value={values.password}
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                />
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
                <Icon className="Login" name="logIn" width="18" height="18" />
              </StyledButton>
            </StyledLoginForm>
          </StyledContainer>
        )}
      </Formik>
      <StyledNavLink to="/register">Sign in</StyledNavLink>
    </>
  );
};
