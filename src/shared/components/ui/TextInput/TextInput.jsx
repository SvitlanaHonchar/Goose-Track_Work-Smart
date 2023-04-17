import { TextField, Box } from '@mui/material';
import React from 'react';

export default function TextInput({ children, ...props }) {
  return (
    <Box>
      <TextField
        {...props}
        fullWidth
        size="small"
<<<<<<< HEAD
        // sx={{ display: 'block', height: '42px' }}
        InputProps={{
          ...(props.InputProps || {}),
          // sx: { borderRadius: '8px', display: 'block' },
=======
        InputProps={{
          ...(props.InputProps || {}),
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
        }}
      >
        {children}
      </TextField>
    </Box>
  );
}
