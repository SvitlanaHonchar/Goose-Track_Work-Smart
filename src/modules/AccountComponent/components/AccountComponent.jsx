import React, { useCallback, useEffect, useRef, useState } from 'react';
import UserForm from './UserForm';
import { UserAvatar } from './UserAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Container, Grid, Typography } from '@mui/material';
import ButtonAuth from 'shared/components/ui/ButtonAuth/ButtonAuth';
import { authGetUserInfo, authUpdate } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import {
  showErrorUserUpdate,
  showSuccessUserUpdate,
} from 'shared/utils/notifications';

export const AccountComponent = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const formRef = useRef(null);
  const [formValues, setFormValues] = useState(userData);
  const validate = useCallback(values => {
    const errors = {};
    const emailRegex = /^\S+@\S+.\S+$/;
    const phoneRegex = /^\+380\d{9}$/;
    const birthdayRegex = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])$/;
    if (!values.name?.trim()) {
      errors.name = 'Required';
    } else if (values.name.trim().length > 16) {
      errors.name = 'Must be 16 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (new Date(values.birthday) > new Date()) {
      errors.birthday = 'Invalid date';
    } else if (!birthdayRegex.test(values.birthday)) {
      errors.birthday = 'Invalid date';
    }

    if (values.phone && !phoneRegex.test(values.phone)) {
      errors.phone = 'Invalid phone number';
    }

    if (values.skype?.trim().length !== 0 && values.skype?.trim().length > 16) {
      errors.skype = 'Must be 16 characters or less';
    }

    return errors;
  }, []);

  const formik = useFormik({
    initialValues: formValues,
    validate: validate,
    onSubmit: async values => {
      const formData = new FormData(formRef.current);
      formData.delete('file');
      formData.append('userImgUrl', values.userImgUrl);
      formData.append('birthday', values.birthday);
      const actionResult = await dispatch(authUpdate(formData));
      setFormValues(values);
      if (actionResult.type === 'user/update/fulfilled') {
        showSuccessUserUpdate();
        resetForm({ values });
      } else if (actionResult.type === 'user/update/rejected') {
        showErrorUserUpdate();
        resetForm({ values });
      }
    },
    handleChange: event => {
      const { name, value } = event.target;
      const trimmedValue =
        name === 'name' || name === 'skype' ? value.trim() : value;
      formik.setFieldValue(name, trimmedValue);
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
    resetForm,
  } = formik;

  useEffect(() => {
    dispatch(authGetUserInfo());
    if (!userData.email) return;

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
      <Container
        className="accountContainer"
        sx={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          mt: { xs: 15, md: 8 },
          px: { md: 10, lg: 22 },
          pt: { xs: 17, md: 5 },
          pb: 5,
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
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
      </Container>
    </form>
  );
};
