import { Grid, Typography, Box } from '@mui/material';

import React from 'react';
import TextInput from 'shared/components/ui/TextInput/TextInput';
import { DatePicker } from '../DatePicker/DatePicker';

export default function UserForm({ formData, onChange, setBirthday, errors }) {
  const { name, email, phone, skype } = formData;

  return (
    <Box sx={{ m: { lg: '0 auto' }, maxWidth: { md: 354, lg: 750 } }}>
      <Grid container rowSpacing={3} columnSpacing={6}>
        <Grid item xs={12} lg={6}>
          <Typography variant="overline">User Name</Typography>
          <TextInput
            onChange={onChange}
            name="name"
            value={name || ''}
            error={!!errors.name}
            helperText={errors.name}
            placeholder="Enter your name"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="overline">Birthday</Typography>
          <Box sx={{ width: '100%' }}>
            <DatePicker setBirthday={setBirthday} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="overline">Email</Typography>
          <TextInput
            onChange={onChange}
            name="email"
            value={email || ''}
            error={!!errors.email}
            helperText={errors.email}
            placeholder="Enter your email"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="overline">Phone</Typography>
          <TextInput
            onChange={onChange}
            name="phone"
            value={phone || ''}
            error={!!errors.phone}
            helperText={errors.phone}
            placeholder="Enter your phone number"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="overline">Skype</Typography>
          <TextInput
            onChange={onChange}
            name="skype"
            value={skype || ''}
            inputProps={{ maxLength: 16 }}
            error={!!errors.skype}
            helperText={errors.skype}
            placeholder="Enter your Skype ID"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
