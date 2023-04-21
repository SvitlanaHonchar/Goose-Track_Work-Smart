import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  RegisterFormEl,
  Container,
  SignUpText,
  StyledButton,
  Label,
  StyledField,
  StyledErrorMessage,
  Svg,
  PasswordInput,
  StyledVisibilityBtn,
} from './RegisterForm.styled';
import { authRegister } from '../../../../redux/auth/authOperations';
import sprite from '../../../../shared/icons/sprite.svg';
import {
  showExistAcctErrorReg,
  showSuccessReg,
  showUnknwnErrReg,
} from 'shared/utils/notifications';
import theme from '../../../../shared/theme';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters long')
    .matches(/^\S*$/, 'Name must not contain spaces'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    .matches(/^\S*$/, 'Password must not contain spaces'),
});

const RegisterForm = () => {
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
    <Container>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const resultAction = await dispatch(authRegister(values));
            if (resultAction.type === 'user/register/fulfilled') {
              navigate('/calendar/month');
              showSuccessReg();
            } else {
              showExistAcctErrorReg();
            }
          } catch (error) {
            // if (error.response && error.response.status === 409) {
            //   alert('This user is already registered.');
            // } else {
            showUnknwnErrReg();
            // }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values, errors, touched }) => (
          <RegisterFormEl>
            <SignUpText>Sign Up</SignUpText>
            <Label>
              Name
              <StyledField
                className={
                  errors.name && touched.name ? 'InvalidInput' : 'ValidInput'
                }
                type="text"
                name="name"
                placeholder="Enter your name"
                value={values.name}
              />
              <StyledErrorMessage name="name" component="div" />
            </Label>
            <Label>
              Email
              <StyledField
                className={
                  errors.email && touched.email ? 'InvalidInput' : 'ValidInput'
                }
                type="email"
                name="email"
                placeholder="Enter email"
                value={values.email}
              />
              <StyledErrorMessage name="email" component="div" />
            </Label>
            <Label>
              Password
              <PasswordInput>
                <StyledField
                  className={
                    errors.password && touched.password
                      ? 'InvalidInput'
                      : 'ValidInput'
                  }
                  type={passwordType}
                  name="password"
                  placeholder="Enter password"
                  value={values.password}
                />

                <StyledVisibilityBtn type="button" onClick={togglePassword}>
                  {passwordType === 'password' ? (
                    <Visibility sx={{ color: theme.palette.primary.main }} />
                  ) : (
                    <VisibilityOff sx={{ color: theme.palette.primary.main }} />
                  )}
                </StyledVisibilityBtn>
              </PasswordInput>
              <StyledErrorMessage name="password" component="div" />
            </Label>
            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting' : 'Sign Up'}
              <Svg height="18" width="18">
                <use href={sprite + '#loginStartPage'}></use>
              </Svg>
            </StyledButton>
          </RegisterFormEl>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterForm;
