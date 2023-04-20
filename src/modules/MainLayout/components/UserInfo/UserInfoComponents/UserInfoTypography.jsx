import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

export const UserInfoTypography = ({ name }) => {
  return (
    <>
      <Typography
        className="UserInfoTopography"
        sx={{
          // color: darkTheme
          //   ? `${theme.palette.custom.mainWhite}`
          //   : `${theme.palette.grey[500]}`,
          fontWeight: 700,
          lineHeight: {
            xs: 1.29,
            md: 1,
          },

          fontSize: {
            xs: 14,
            md: 18,
          },
        }}
      >
        {name?.split(' ')[0] || ''}
      </Typography>
    </>
  );
};

UserInfoTypography.propTypes = {
  name: PropTypes.string,
};
