<<<<<<< HEAD
import React, { useCallback, useRef } from 'react';
=======
import React, { useCallback, useRef, useState } from 'react';
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
import UserForm from './UserForm';
import { UserAvatar } from './UserAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Grid, Typography } from '@mui/material';
import ButtonAuth from 'shared/components/ui/ButtonAuth/ButtonAuth';
import { authUpdate } from 'redux/auth/authOperations';
<<<<<<< HEAD

const AccountComponent = () => {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.auth.user);
  console.log('userData', userData);
  const formRef = useRef(null);

  const formik = useFormik({
    initialValues: userData,
    onSubmit: v => {
      const formData = new FormData(formRef.current);
      formData.delete('file');
      formData.append('userImgUrl', v.userImgUrl);
      dispatch(authUpdate(formData));
=======
import { selectIsUserLoading, selectUser } from 'redux/auth/authSelectors';

const AccountComponent = () => {
  const dispatch = useDispatch();
  const isUserLoading = useSelector(selectIsUserLoading);
  const userData = useSelector(selectUser);
  const formRef = useRef(null);
  const [formValues, setFormValues] = useState(userData);
  const validate = useCallback(values => {
    const errors = {};
    const emailRegex = /^\S+@\S+.\S+$/;
    const phoneRegex = /^\+380\d{9}$/;
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 16) {
      errors.name = 'Must be 16 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    // if (!values.birthday) {
    //   errors.birthday = 'Required';
    // } else if (new Date(values.birthday) > new Date()) {
    //   errors.birthday = 'Invalid date';
    // }

    if (values.phone && !phoneRegex.test(values.phone)) {
      errors.phone = 'Invalid phone number';
    }

    if (values.skype && values.skype.length > 16) {
      errors.skype = 'Must be 16 characters or less';
    }

    return errors;
  }, []);

  const formik = useFormik({
    initialValues: formValues,
    validate: validate,
    onSubmit: values => {
      const formData = new FormData(formRef.current);
      formData.delete('file');
      formData.append('userImgUrl', values.userImgUrl);
      dispatch(authUpdate(formData));
      setFormValues(values);
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
    },
  });

  const {
    values: { phone, name, email, birthday, skype, userImgUrl },
<<<<<<< HEAD
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
=======
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
  } = formik;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setAvatar = useCallback(file => setFieldValue('userImgUrl', file), []);
  const setBirthday = useCallback(date => {
    setFieldValue('birthday', date);
<<<<<<< HEAD
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const userAvatarFormData = { name, userImgUrl };
  const userFormData = { name, birthday, email, phone, skype };

  return (
    <Grid container justifyContent={'center'}>
      <UserAvatar setAvatar={setAvatar} formData={userAvatarFormData} />
      <UserForm
        formData={userData}
        onChange={handleChange}
        setBirthday={setBirthday}
      />
      <ButtonAuth
      // sx={{ color: { md: 'red', lg: 'green' } }}
      >
        <Typography variant="button">Save changes</Typography>
      </ButtonAuth>
    </Grid>
=======
  }, []);
  const userAvatarFormData = { name, userImgUrl };
  const userFormData = { name, birthday, email, phone, skype };
  console.log('dirty', formik.dirty);
  console.log('isValid', formik.isValid);

  return isUserLoading ? (
    <b>Loading user...</b>
  ) : (
    <form onSubmit={handleSubmit} ref={formRef} noValidate>
      <Grid container justifyContent={'center'}>
        <UserAvatar setAvatar={setAvatar} formData={userAvatarFormData} />
        <UserForm
          formData={userFormData}
          errors={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          setBirthday={setBirthday}
        />
        <ButtonAuth
          type="submit"
          disabled={!formik.dirty || !formik.isValid}
          sx={{ borderRadius: '16px', display: 'block', height: 46, mt: 2 }}
        >
          <Typography variant="button">Save changes</Typography>
        </ButtonAuth>
      </Grid>
    </form>
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
  );
};

export default AccountComponent;
