import React from 'react';

import { StyledAuthNavigate } from './AuthNavigate.styled';
import { useNavigate } from 'react-router-dom';

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

  return (
    <StyledAuthNavigate>
      <div className="ContentContainer">
        <h1 className="AuthNavHeadline"> GooseTrack</h1>
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
  );
};

export default AuthNavigate;
