import { Typography } from '@mui/material';
// import React, { useState, useEffect } from 'react';

// import theme from 'shared/theme';
import sprite from '../../../../../shared/icons/sprite.svg';
import { NavLink } from 'react-router-dom';
// import { checkDarkTheme } from 'shared/utils/checkDarkTheme';

export const UserInfoMenuNavLink = () => {
  // const [darkTheme, setDarkTheme] = useState(checkDarkTheme());
  // useEffect(() => {
  //   setDarkTheme(checkDarkTheme());
  // }, []);
  return (
    <>
      <svg height="20" width="20" className="UserInfoMenuIcon">
        <use href={sprite + '#userCheck'}></use>
      </svg>
      <NavLink to="/account">
        <Typography
          className="UserInfoMenuNavLink"
          sx={{
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 1.21,
            // color: darkTheme
            //   ? `${theme.palette.custom.mainWhite}`
            //   : `${theme.palette.grey[400]}`,
          }}
        >
          My account
        </Typography>
      </NavLink>
    </>
  );
};
