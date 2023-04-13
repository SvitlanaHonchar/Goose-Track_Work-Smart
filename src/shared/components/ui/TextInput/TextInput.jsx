import { TextField } from '@mui/material';
import React from 'react';

export default function TextInput({ children, ...props }) {
  return (
    <TextField
      {...props}
      InputProps={{ sx: { borderRadius: '8px', height: '42px' } }}
    >
      {children}
    </TextField>
  );
}
