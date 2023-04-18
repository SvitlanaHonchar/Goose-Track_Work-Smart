import { Box } from '@mui/material';
import styled from 'styled-components';

import img1 from '../../shared/images/noMatchPage/gooseNoMatchPage.png';
import img2 from '../../shared/images/noMatchPage/gooseNoMatchPageMessege.png';

export const StyledNoPageComponent = styled(Box)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .ImageContainer {
    position: relative;

    @media screen and (max-width: 374px) {
      max-width: 300px;
      max-height: 300px;
      width: 100%;
      height: 100%;
    }

    @media screen and (min-width: 375px) {
      width: 300px;
      height: 300px;
    }

    @media screen and (min-width: 768px) {
      width: 500px;
      height: 500px;
    }
  }

  .Goose {
    position: absolute;
    top: 40%;
    left: 25%;

    background-image: url(${img1});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (max-width: 374px) {
      max-width: 200px;
      max-height: 200px;
      width: 100%;
      height: 100%;
    }

    @media screen and (min-width: 375px) {
      width: 200px;
      height: 200px;
    }

    @media screen and (min-width: 768px) {
      width: 350px;
      height: 350px;
    }
  }

  .MessegeContainer {
    position: absolute;
    top: 15%;
    left: 15%;
    background-image: url(${img2});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (max-width: 374px) {
      max-width: 117px;
      max-height: 120px;
      width: 100%;
      height: 100%;
    }

    @media screen and (min-width: 375px) {
      width: 117px;
      height: 120px;
    }

    @media screen and (min-width: 768px) {
      width: 170px;
      height: 160px;
    }
  }

  .Messege {
    position: absolute;
    top: 25%;
    left: 4%;
    transform: rotate(-30deg);
    font-weight: 500;
    font-size: 12px;
    line-height: 1;
    color: #111111;

    @media screen and (min-width: 768px) {
      font-weight: 600;
      font-size: 14px;
      line-height: 1.17;
    }
  }

  .MessegeFocus {
    color: #3e85f3;
  }
`;
