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
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <Typography variant="overline">User Name</Typography>
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
        </Box>
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
