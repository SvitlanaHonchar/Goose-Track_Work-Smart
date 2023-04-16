import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  RegisterFormWrapper,
  RegisterFormEl,
  Container,
  SignUpText,
  StyledButton,
  StyledLink,
  Label,
  StyledField,
  StyledErrorMessage,
  Svg,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { authRegister } from '../../../redux/auth/authOperations';
import sprite from '../../../shared/icons/sprite.svg';
import {
  showExistAcctErrorReg,
  showSuccessReg,
  showUnknwnErrReg,
} from 'shared/utils/notifications';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters long'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
              // alert('Error registering user in try');
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
        {({ isSubmitting, values }) => (
          <RegisterFormWrapper>
            <RegisterFormEl>
              <SignUpText>Sign Up</SignUpText>
              <Label>
                Name
                <StyledField
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
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                />
                <StyledErrorMessage name="email" component="div" />
              </Label>
              <Label>
                Password
                <StyledField
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={values.password}
                />
                <StyledErrorMessage name="password" component="div" />
              </Label>
              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting' : 'Sign Up'}
                <Svg height="13.5" width="13.5">
                  <use href={sprite + '#loginStartPage'}></use>
                </Svg>
              </StyledButton>
            </RegisterFormEl>
          </RegisterFormWrapper>
        )}
      </Formik>
      <StyledLink to="/login">Log In</StyledLink>
    </Container>
  );
};

export default RegisterForm;
