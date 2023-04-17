import * as React from 'react';

import ButtonComponent from '@mui/material/Button';

export default function ButtonAuth({ children, ...props }) {
  return (
    <ButtonComponent {...props} variant="contained">
      {children}
    </ButtonComponent>
  );
}
