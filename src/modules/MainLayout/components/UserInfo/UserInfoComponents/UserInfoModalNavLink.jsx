import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import theme from 'shared/theme';
import sprite from '../../../../../shared/icons/sprite.svg';
import { NavLink } from 'react-router-dom';

export const UserInfoModalNavLink = ({ onCloseModal }) => {
  return (
    <>
      <svg height="20" width="20" className="UserInfoModalIcon">
        <use href={sprite + '#userCheck'}></use>
      </svg>
      <NavLink to="/account" onClick={onCloseModal}>
        <Typography
          className="UserInfoModalNavLink"
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

UserInfoModalNavLink.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
