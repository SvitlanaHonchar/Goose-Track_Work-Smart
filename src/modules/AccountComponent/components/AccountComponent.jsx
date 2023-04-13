import React, { useCallback, useRef } from 'react';
import UserForm from './UserForm';
import { UserAvatar } from './UserAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Grid, Typography } from '@mui/material';
import ButtonAuth from 'shared/components/ui/ButtonAuth/ButtonAuth';

const AccountComponent = () => {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.auth.user);

  const formRef = useRef(null);

  const formik = useFormik({
    initialValues: userData,
    onSubmit: v => {
      const formData = new FormData(formRef.current);
      formData.delete('file');
      formData.append('userImgUrl', v.userImgUrl);
      // dispatch(updateUser(formData));
    },
  });

  const {
    values: { phone, name, email, birthday, skype, userImgUrl },
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
  } = formik;

  const setAvatar = useCallback(file => setFieldValue('userImgUrl', file), []);
  const setBirthday = useCallback(date => {
    setFieldValue('birthday', date);
    // eslint-disable-next-line
  }, []);
  const userAvatarFormData = { name, userImgUrl };
  const userFormData = { name, birthday, email, phone, skype };

  return (
    <Grid container>
      <UserAvatar setAvatar={setAvatar} formData={userAvatarFormData} />
      <UserForm
        formData={userFormData}
        onChange={handleChange}
        setBirthday={setBirthday}
      />
      <ButtonAuth
      // sx={{ color: { md: 'red', lg: 'green' } }}
      >
        <Typography variant="button">Save changes</Typography>
      </ButtonAuth>

      {/* <StyledDiv $theme={theme} variant="outlined">
        hello
      </StyledDiv> */}
    </Grid>
  );
};
// const StyledDiv = styled(ButtonAuth)`
//   color: ${p => p.$theme.palette.secondary.dark};
// `;
export default AccountComponent;
