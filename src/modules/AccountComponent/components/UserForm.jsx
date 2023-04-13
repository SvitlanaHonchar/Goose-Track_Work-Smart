import { Grid, Typography } from '@mui/material';
import React from 'react';
import TextInput from 'shared/components/ui/TextInput/TextInput';
import { DatePicker } from './DatePicker';

export default function UserForm({ formData, onChange, setBirthday }) {
  const { name, email, birthday, phone, skype } = formData || [];
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">User Name</Typography>
        <TextInput onChange={onChange} name="name" value={name || ''} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">Birthday</Typography>
        <TextInput onChange={onChange} name="birthday" value={birthday || ''} />
        <DatePicker setBirthday={setBirthday} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">Email</Typography>
        <TextInput onChange={onChange} name="email" value={email || ''} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">Phone</Typography>
        <TextInput onChange={onChange} name="phone" value={phone || ''} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">Skype</Typography>
        <TextInput onChange={onChange} name="skype" value={skype || ''} />
      </Grid>
    </Grid>
  );
}
