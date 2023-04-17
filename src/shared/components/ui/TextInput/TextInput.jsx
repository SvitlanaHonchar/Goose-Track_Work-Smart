import { TextField, Box } from '@mui/material';
import React from 'react';

export default function TextInput({ children, ...props }) {
  return (
    <Box>
      <TextField
        {...props}
        fullWidth
        size="small"
        InputProps={{
          ...(props.InputProps || {}),
        }}
      >
        {children}
      </TextField>
    </Box>
  );
}
