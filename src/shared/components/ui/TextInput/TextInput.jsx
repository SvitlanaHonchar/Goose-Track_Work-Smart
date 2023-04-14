import { TextField, Box } from '@mui/material';
import React from 'react';

export default function TextInput({ children, ...props }) {
  return (
    <Box>
      <TextField
        {...props}
        fullWidth
        size="small"
        // sx={{ display: 'block', height: '42px' }}
        InputProps={{
          ...(props.InputProps || {}),
          // sx: { borderRadius: '8px', display: 'block' },
        }}
      >
        {children}
      </TextField>
    </Box>
  );
}
