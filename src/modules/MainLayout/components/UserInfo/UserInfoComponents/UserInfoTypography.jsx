import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

import theme from 'shared/theme';

export const UserInfoTypography = ({ name }) => {
  return (
    <>
      <Typography
        className="UserInfoTypography"
        sx={{
          fontWeight: 700,
          color: theme.palette.grey[500],
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
  name: PropTypes.string.isRequired,
};
