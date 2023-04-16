import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import {
  StyledLoginForm,
  StyledButton,
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

const validationSchema = object({
  email: string().required('Required').email('Invalid email'),
  password: string()
    .required('Required')
    .min(6, 'Password should be 6 chars minimum.'),
});

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
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
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
        {({ values, isSubmitting }) => (
          <div className="FormContainer">
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
              <label className="Inputlabel ">
                <span>Password</span>
                <div className="PasswordInput ">
                  <Field
                    className="InputField InputFieldPassword"
                    name="password"
                    value={values.password}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    type={passwordType}
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
                <svg height="13.5" width="13.5">
                  <use href={sprite + '#loginStartPage'}></use>
                </svg>
              </StyledButton>
            </StyledLoginForm>
          </div>
        )}
      </Formik>
    </StyledContainer>
  );
};
