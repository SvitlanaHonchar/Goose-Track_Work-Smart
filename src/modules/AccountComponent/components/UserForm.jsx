import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  Avatar,
  Button,
} from '@mui/material';
import styled from 'styled-components';

// import { saveUser, deleteAvatar } from 'slices/user';
import theme from 'shared/theme';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const UserForm = () => {
  // const dispatch = useDispatch();
  const user = {};
  // useSelector(state => state.user.data);
  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAddPicture, setOpenAddPicture] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [fileInput, setFileInput] = useState(null);
  function readFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onFileChange = async event => {
    const selectedFile = event.target.files[0];
    setImageSrc(selectedFile);
    // switch (true) {
    //   case selectedFile && selectedFile.size > MAX_SIZE:
    //     setAvatarError(true);
    //     break;
    //   case !ALLOWED_FILE_TYPES.includes(selectedFile.type):
    //     setAvatarError(true);
    //     break;
    //   default:
    //     const file = await readFile(selectedFile);
    //     setImageSrc(file);
    //     setOpenAddPicture(false);
    //     setAvatarError(false);
    //     break;
    // }
  };

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }, [user.firstName, user.lastName]);

  useEffect(() => {
    if (imageSrc) {
      setOpenAddPicture(true);
    }
  }, [imageSrc]);

  const handleAddPicture = () => {
    if (fileInput) {
      fileInput.click();
    }
  };

  // const handleCancelConfirm = () => {
  //   setOpen(false);
  //   setFirstName(user.firstName);
  //   setLastName(user.lastName);
  //   setLastNameError(false);
  //   setFirstNameError(false);
  //   setIsEditing(false);
  // };

  // const handleConfirm = (imgUrl, isDeleteAvatar) => {
  //   setOpenAddPicture(false);
  //   setIsEditing(false);
  //   setOpen(false);
  //   if (isDeleteAvatar) {
  //     dispatch(deleteAvatar(user.id));
  //   } else {
  //     dispatch(
  //       saveUser({
  //         ...user,
  //         firstName,
  //         lastName,
  //         avatar: imgUrl,
  //         text: imgUrl ? 'Picture is uploaded' : 'Picture is removed',
  //       })
  //     );
  //   }
  // };

  const handleFirstNameChange = event => {
    const value = event.target.value;
    setFirstName(value);
    // if (regex.test(value)) {
    //   setFirstName(value);
    // }
    // if (!value) {
    //   setFirstNameError(true);
    // } else {
    //   setFirstNameError(false);
    // }
    // if (regex.test(value)) {
    //   setIsEditing(true);
    // }
  };

  const handleLastNameChange = event => {
    const value = event.target.value;
    setLastName(value);
    // if (regex.test(value)) {
    //   setLastName(value);
    // }
    if (value) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
    // if (regex.test(value)) {
    //   setIsEditing(true);
    // }
  };

  const handleSaveChanges = () => {
    if (!firstName) {
      setFirstNameError(true);
      return;
    }
    if (!lastName) {
      setLastNameError(true);
      return;
    }
    if (firstName && lastName) {
      setIsEditing(false);

      // dispatch(
      //   saveUser({ ...user, firstName, lastName, avatar: fileInput.files[0] })
      // );
    }
  };

  // const userAvatarFixed = user.avatar + '?fix-amazon-cache-issue';

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3} sx={{ p: 3 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h3">User Profile</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {!user.avatar ? (
              <Avatar
                sx={{
                  width: 88,
                  height: 88,
                  background: theme.palette.grey[400],
                  color: theme.palette.grey[200],
                }}
              >
                {firstName ? firstName.charAt(0) : ''}
              </Avatar>
            ) : (
              <Avatar
                src={user.avatar}
                sx={{
                  width: 88,
                  height: 88,
                }}
              />
            )}
            <Box sx={{ maxWidth: 225 }}>
              <input
                type="file"
                onChange={onFileChange}
                accept=".jpg, .jpeg, .png"
                className="avatar-input"
                ref={input => setFileInput(input)}
              />
              {/* <ImgCropModal
                defaultImgSrc={imageSrc || userAvatarFixed}
                imageSrc={imageSrc || userAvatarFixed}
                open={openAddPicture}
                onClose={() => setOpenAddPicture(false)}
                onOpen={() => setOpenAddPicture(true)}
                onConfirm={handleConfirm}
                fileInput={fileInput}
                title={!user.avatar ? 'Add picture' : 'Edit picture'}
              /> */}
              {!user.avatar ? (
                <Button
                  onClick={handleAddPicture}
                  sx={{ pl: 0, fontWeight: 600 }}
                >
                  Add picture
                </Button>
              ) : (
                <Button
                  onClick={() => setOpenAddPicture(true)}
                  sx={{ pl: 0, fontWeight: 600 }}
                >
                  Edit picture
                </Button>
              )}
            </Box>
          </Box>{' '}
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="overline"
            color={firstNameError && theme.palette.error.main}
          >
            User Name
          </Typography>
          <TextField
            size="small"
            variant="outlined"
            color="secondary"
            fullWidth
            value={firstName || ''}
            onChange={handleFirstNameChange}
            error={firstNameError}
            sx={{ pt: 1 }}
          />
          {firstNameError && (
            <Typography variant="overline" color="error">
              Name is a required field.
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="overline"
            color={lastNameError && theme.palette.error.main}
          >
            Skype
          </Typography>
          <TextField
            size="small"
            variant="outlined"
            color="secondary"
            fullWidth
            value={lastName || ''}
            onChange={handleLastNameChange}
            error={lastNameError}
            sx={{ pt: 1 }}
          />
          {lastNameError && (
            <Typography variant="overline" color="error">
              Last name is a required field.
            </Typography>
          )}
        </Grid>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Grid>

      <Button
        variant="contained"
        fullWidth
        type="submit"
        // sx={{ color: { md: 'red', lg: 'green' } }}
      >
        Submit
      </Button>
      <StyledDiv $theme={theme} variant="outlined">
        hello
      </StyledDiv>
    </form>
  );
};

const StyledDiv = styled(Button)`
  color: ${p => p.$theme.palette.secondary.dark};
`;
