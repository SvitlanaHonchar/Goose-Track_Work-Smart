import { Avatar, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import theme from 'shared/theme';

const setFileUrl = (file, cbSetFileUrl) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    cbSetFileUrl(fileReader.result);
  };
};

export const UserAvatar = ({ setAvatar, formData }) => {
  const { userImgUrl, name } = formData;

  const [curImageUrl, setCurImageUrl] = useState(
    userImgUrl?.toString() || null
  );

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    setFileUrl(file, setCurImageUrl);
    setAvatar(file);
  };

  return (
    <Grid container justifyContent={'center'}>
      <Grid
        item
        sx={{
          position: { xs: 'absolute', md: 'relative' },
          top: { xs: 150, md: 0 },
          textAlign: 'center',
        }}
      >
        <Avatar
          src={typeof curImageUrl === 'string' ? curImageUrl : userImgUrl}
          alt={`${name} picture`}
          sx={{
            width: 72,
            height: 72,
            border: `2px solid ${theme.palette.primary.main}`,
          }}
        />
        <label htmlFor="avatar-upload">
          <AddCircleIcon
            sx={{
              position: 'absolute',
              top: 52,
              borderRadius: 50,
              bgcolor: 'common.white',
            }}
            color="primary"
          />{' '}
        </label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          style={{ display: 'none' }}
        />
        <Typography variant="h4" sx={{ mt: 3 }}>
          {name ? name : 'Your name'}
        </Typography>
        <Typography variant="subtitle1">User</Typography>
      </Grid>
    </Grid>
  );
};
