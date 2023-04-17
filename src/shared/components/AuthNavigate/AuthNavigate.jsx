import React from 'react';
import PropTypes from 'prop-types';

import { StyledAuthNavigate } from './AuthNavigate.styled';

const AuthNavigate = ({ link, text }) => {
  return (
    <div>
      <StyledAuthNavigate to={link}>{text}</StyledAuthNavigate>
    </div>
  );
};

AuthNavigate.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AuthNavigate;
