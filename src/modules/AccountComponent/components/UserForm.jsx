import { Grid, Typography } from '@mui/material';
import React from 'react';

const UserForm = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Typography variant="overline">User Profile</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Typography variant="overline">User Profile</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Typography variant="overline">User Profile</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Typography variant="overline">User Profile</Typography>
      </Grid>
    </Grid>
  );
};

export default UserForm;
