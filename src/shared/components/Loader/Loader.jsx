import React from 'react';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader className="Wrapper">
      <div className="Bird">
        <div className="HairContainer">
          <div className="Hair"></div>
        </div>
        <div className="Face">
          <div className="WhiteContainer">
            <div className="White"></div>
          </div>
          <div className="ShadowContainer">
            <div className="Shadow"></div>
          </div>
          <div className="BigBeakContainer">
            <div className="BigBeak"></div>
          </div>
          <div className="SmallBeakContainer">
            <div className="SmallBeak"></div>
          </div>
          <div className="Eye"></div>
        </div>
      </div>
    </StyledLoader>
  );
};

export default Loader;
