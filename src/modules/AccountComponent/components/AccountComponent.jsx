import React, { useCallback, useEffect, useRef, useState } from 'react';
import UserForm from './UserForm';
import { UserAvatar } from './UserAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Grid, Typography } from '@mui/material';
import ButtonAuth from 'shared/components/ui/ButtonAuth/ButtonAuth';
import { authGetUserInfo, authUpdate } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

const AccountComponent = () => {
  const dispatch = useDispatch();
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
      formData.append('birthday', values.birthday);
      dispatch(authUpdate(formData));
      setFormValues(values);
    },
  });
  const {
    values: { phone, name, email, birthday, skype, userImgUrl },
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
  } = formik;

  useEffect(() => {
    // TODO: delete timeout, when register is ready
    setTimeout(() => dispatch(authGetUserInfo()), 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setFormValues(userData);
    setValues(userData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setAvatar = useCallback(file => setFieldValue('userImgUrl', file), []);
  const setBirthday = useCallback(date => {
    setFieldValue('birthday', date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const userAvatarFormData = { name, userImgUrl };
  const userFormData = { name, birthday, email, phone, skype };

  return (
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
  );
};

export default AccountComponent;
