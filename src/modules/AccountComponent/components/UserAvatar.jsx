import { Avatar, Box, Typography } from '@mui/material';
import { useState } from 'react';

const setFileUrl = (file, cbSetFileUrl) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    cbSetFileUrl(fileReader.result);
  };
};

export const UserAvatar = ({ setAvatar, formData }) => {
  const { userImgUrl, name } = formData;

  const [curImageUrl, setCurImageUrl] = useState(userImgUrl || null);

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    setFileUrl(file, setCurImageUrl);
    setAvatar(file);
  };

  return (
    <Box>
      <label>
        <Avatar src={curImageUrl || userImgUrl} alt={`${name}+picture`} />
        <Box>+</Box>
        <input type="file" name="file" onChange={handleAvatarChange} />
      </label>
      <Typography variant="h4">{name ? name : 'Your name'}</Typography>
      <Typography variant="subtitle1">User</Typography>
    </Box>
  );
};
