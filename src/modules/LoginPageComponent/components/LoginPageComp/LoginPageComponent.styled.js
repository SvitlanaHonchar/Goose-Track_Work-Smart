import { Box } from '@mui/material';
import styled from 'styled-components';

import img1 from '../../../../shared/images/logInPage/desktop_goose_loginPage.png';
import img2 from '../../../../shared/images/logInPage/desktop_goose_loginPage@2x.png';

import img3 from '../../../../shared/images/logInPage/desktop_goose_message_logIn.png';
import img4 from '../../../../shared/images/logInPage/desktop_goose_message_logIn@2x.png';

export const StyledLoginPageComponent = styled(Box)`
  padding-top: 202px;
  padding-bottom: 202px;

  @media screen and (min-width: 768px) {
    padding-top: 276px;
    padding-bottom: 276px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 174px;
    padding-bottom: 172px;
  }

  .ContentContainer {
    position: relative;
  }

  .ImageContainer {
    position: absolute;
    top: 50%;
    right: -50%;

    @media screen and (max-width: 1439px) {
      display: none;
    }
  }

  .StyledImageGoose {
    position: absolute;
    top: -80px;
    right: -40px;
    background-image: url(${img1});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 178px;
    height: 414px;

    @media screen and (min-device-pixel-ratio: 2) {
      background-image: url(${img2});
    }
  }

  .StyledImageMessage {
    position: absolute;
    top: -170px;
    right: -50px;
    background-image: url(${img3});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 177px;
    height: 125px;

    @media screen and (min-device-pixel-ratio: 2) {
      background-image: url(${img4});
    }

    @media screen and (min-width: 768px) {
    }
  }

  .Message {
    position: absolute;
    top: 23%;
    right: 11%;
    transform: rotate(15deg);
    display: block;
    width: 138px;
    height: 48px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.14;
  }

  .MessageFocus {
    color: #3e85f3;
  }
`;
