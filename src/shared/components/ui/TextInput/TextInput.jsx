import { TextField } from '@mui/material';
import React from 'react';

export default function TextInput({ children, ...props }) {
  return (
    <TextField
      {...props}
      sx={{ display: 'block', height: '42px' }}
      InputProps={{
        sx: { borderRadius: '8px', display: 'block' },
      }}
    >
      {children}
    </TextField>
  );
}
