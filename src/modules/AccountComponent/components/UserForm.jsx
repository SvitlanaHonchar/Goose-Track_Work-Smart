<<<<<<< HEAD
import { Grid, IconButton, Typography, Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import TextInput from 'shared/components/ui/TextInput/TextInput';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function UserForm({ formData, onChange, setBirthday }) {
  const { name, email, birthday, phone, skype } = formData;
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const handleExpandClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };
  console.log('formData', formData);
=======
import { Grid, Typography, Box } from '@mui/material';

import React, { useState } from 'react';
import TextInput from 'shared/components/ui/TextInput/TextInput';
import { DatePicker } from './DatePicker';

export default function UserForm({ formData, onChange, setBirthday, errors }) {
  const { name, email, birthday, phone, skype } = formData;
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const handleExpandClick = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };
  const birthdayDate = birthday ? new Date(birthday) : null;

>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">User Name</Typography>
<<<<<<< HEAD
        <TextInput onChange={onChange} name="name" value={name || ''} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">Birthday</Typography>
        {/* <TextInput
          onChange={onChange}
          name="birthday"
          value={birthday || ''}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleExpandClick}>
                <ExpandMoreIcon />
              </IconButton>
            ),
          }}
        /> */}
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={birthday}
              onChange={date => setBirthday(date.toISOString())}
              startWeekDay="monday"
            />
          </LocalizationProvider>
=======
        <TextInput
          onChange={onChange}
          name="name"
          value={name}
          error={!!errors.name}
          helperText={errors.name}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">Birthday</Typography>
        <Box sx={{ width: '100%' }}>
          <DatePicker setBirthday={setBirthday} />
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={birthdayDate}
              onChange={date => setBirthday(date.toISOString() || '')}
              startWeekDay="monday"
              InputProps={{
                endAdornment: (
                  <IconButton
                    sx={{ color: 'primary.main' }}
                    onClick={handleExpandClick}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                ),
                sx: { '& .MuiIconButton-root': { padding: '10px' } },
              }}
              textField={params => (
                <TextInput
                  {...params}
                  error={!!errors.birthday}
                  helperText={errors.birthday}
                />
              )}
              PopperProps={{
                sx: {
                  '& .MuiPopover-paper': { width: '100%', maxWidth: 'none' },
                },
              }}
              sx={{ '& .MuiTypography-root': { color: 'primary.main' } }}
            />
          </LocalizationProvider> */}
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
        </Box>
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">Email</Typography>
<<<<<<< HEAD
        <TextInput onChange={onChange} name="email" value={email || ''} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">Phone</Typography>
        <TextInput onChange={onChange} name="phone" value={phone || ''} />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">Skype</Typography>
        <TextInput onChange={onChange} name="skype" value={skype || ''} />
=======
        <TextInput
          onChange={onChange}
          name="email"
          value={email || ''}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">Phone</Typography>
        <TextInput
          onChange={onChange}
          name="phone"
          value={phone || ''}
          error={!!errors.phone}
          helperText={errors.phone}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">Skype</Typography>
        <TextInput
          onChange={onChange}
          name="skype"
          value={skype || ''}
          inputProps={{ maxLength: 16 }}
          error={!!errors.skype}
          helperText={errors.skype}
        />
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
      </Grid>
    </Grid>
  );
}
