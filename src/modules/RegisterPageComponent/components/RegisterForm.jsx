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
  Icon,
  StyledLink,
  Label,
  StyledField,
  StyledErrorMessage,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { authRegister } from '../../../redux/auth/authOperations';
// import theme from '../../../shared/theme';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
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
            } else {
              alert('Error registering user in try');
            }
          } catch (error) {
            if (error.response && error.response.status === 409) {
              alert('This user is already registered.');
            } else {
              alert(
                'Registration failed due to an unexpected error. Please try again later.'
              );
            }
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
                <Icon name="logIn" width="18" height="18" color="#FFFFFF" />
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
