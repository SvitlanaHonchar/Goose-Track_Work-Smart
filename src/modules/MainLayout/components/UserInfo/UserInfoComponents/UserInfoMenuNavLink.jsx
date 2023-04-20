import { Typography } from '@mui/material';

import theme from 'shared/theme';
import sprite from '../../../../../shared/icons/sprite.svg';
import { NavLink } from 'react-router-dom';

export const UserInfoMenuNavLink = () => {
  return (
    <>
      <svg height="20" width="20">
        <use href={sprite + '#userCheck'}></use>
      </svg>
      <NavLink to="/account">
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 1.21,
            color: theme.palette.grey[400],
          }}
        >
          My account
        </Typography>
      </NavLink>
    </>
  );
};
