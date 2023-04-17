import React from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

import { StyledAuthNavigate } from './AuthNavigate.styled';
import Icons from '../../../shared/icons/sprite.svg';

export const Icon = ({ name, width, height }) => (
  <svg width={width} height={height}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);

const AuthNavigate = () => {
  const navigate = useNavigate();
  const handleSignupBtnClick = () => {
    navigate('/register', { replace: true });
  };

  const handleLoginBtnClick = () => {
    navigate('/login', { replace: true });
  };
=======
import PropTypes from 'prop-types';

import { StyledAuthNavigate } from './AuthNavigate.styled';
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e

const AuthNavigate = ({ link, text }) => {
  return (
<<<<<<< HEAD
    <StyledAuthNavigate>
      <div className="ContentContainer">
        <div className="StyledImage"></div>
        <h1 className="AuthNavHeadline">
          G<i>oo</i>seTrack
        </h1>
        <div className="AuthNavBtnContainer">
          <button
            type="button"
            className="AuthNavBtn"
            onClick={handleSignupBtnClick}
          >
            Sign up
            <Icon className="Login" name="logIn" width="18" height="18" />
          </button>
          <button
            type="button"
            className="AuthNavBtn"
            onClick={handleLoginBtnClick}
          >
            Log in
            <Icon
              className="Login"
              name="logIn"
              color="rgba(62, 133, 243, 1)"
              width="18"
              height="18"
            />
          </button>
        </div>
      </div>
    </StyledAuthNavigate>
=======
    <div>
      <StyledAuthNavigate to={link}>{text}</StyledAuthNavigate>
    </div>
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
  );
};

AuthNavigate.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AuthNavigate;
