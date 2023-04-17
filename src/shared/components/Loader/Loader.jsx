import React from 'react';
<<<<<<< HEAD

const Loader = () => {
  return <div>Loader</div>;
=======
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
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
};

export default Loader;
