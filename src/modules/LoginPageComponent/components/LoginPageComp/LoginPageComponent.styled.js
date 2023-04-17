import { Box } from '@mui/material';
import styled from 'styled-components';

import img1 from '../../../../shared/images/logInPage/desktop_goose_loginPage.png';
import img2 from '../../../../shared/images/logInPage/desktop_goose_loginPage@2x.png';
<<<<<<< HEAD

=======
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
import img3 from '../../../../shared/images/logInPage/desktop_goose_message_logIn.png';
import img4 from '../../../../shared/images/logInPage/desktop_goose_message_logIn@2x.png';

export const StyledLoginPageComponent = styled(Box)`
<<<<<<< HEAD
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  .ImageContainer {
=======
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .ContentContainer {
    position: relative;
  }

  .ImageContainer {
    position: absolute;
    top: 250px;
    right: -250px;

>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
    @media screen and (max-width: 1439px) {
      display: none;
    }
  }

  .StyledImageGoose {
    position: absolute;
<<<<<<< HEAD
    top: 350px;
    right: 200px;
=======
    top: -80px;
    right: -40px;
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
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
<<<<<<< HEAD
    top: 250px;
    right: 220px;
=======
    top: -170px;
    right: -50px;
>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
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
<<<<<<< HEAD
=======

>>>>>>> 549f4e1c1556ad76f919ec2f9aa73ec870707a3e
  .MessageFocus {
    color: #3e85f3;
  }
`;
