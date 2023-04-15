import React, { useCallback, useRef } from 'react';
import UserForm from './UserForm';
import { UserAvatar } from './UserAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Grid, Typography } from '@mui/material';
import ButtonAuth from 'shared/components/ui/ButtonAuth/ButtonAuth';
import { authUpdate } from 'redux/auth/authOperations';

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
    },
  });

  const {
    values: { phone, name, email, birthday, skype, userImgUrl },
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
  } = formik;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setAvatar = useCallback(file => setFieldValue('userImgUrl', file), []);
  const setBirthday = useCallback(date => {
    setFieldValue('birthday', date);
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
  );
};

export default AccountComponent;
