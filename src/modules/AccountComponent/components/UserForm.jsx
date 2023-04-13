import { Typography } from '@mui/material';
import React from 'react';
import ButtonAuth from 'shared/components/ui/ButtonAuth/ButtonAuth';
import TextInput from 'shared/components/ui/TextInput/TextInput';

export default function UserForm() {
  return (
    <>
      <Typography variant="h1">UserForm</Typography>
      <TextInput>Name</TextInput>
      <ButtonAuth
      // sx={{ color: { md: 'red', lg: 'green' } }}
      >
        <Typography variant="button">Save changes</Typography>
      </ButtonAuth>

      {/* <StyledDiv $theme={theme} variant="outlined">
        hello
      </StyledDiv> */}
    </>
  );
}

// const StyledDiv = styled(ButtonAuth)`
//   color: ${p => p.$theme.palette.secondary.dark};
// `;
