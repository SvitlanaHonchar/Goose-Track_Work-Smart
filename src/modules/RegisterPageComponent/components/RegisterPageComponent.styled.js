import styled from 'styled-components';
import goose from '../../../shared/images/signUpPage/desktop_goose_signupPage.png';
import goose2 from '../../../shared/images/signUpPage/desktop_goose_signupPage@2x.png';

import message from '../../../shared/images/signUpPage/desktop_goose_message_signUp.png';
import message2 from '../../../shared/images/signUpPage/desktop_goose_message_signUp@2x.png';

export const RegisterFormWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #dcebf7;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  background-image: url(${goose});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 352.8px;
  height: 329.53px;
  left: 49px;
  bottom: 0;

  @media screen and (min-device-pixel-ratio: 2) {
    background-image: url(${goose2});
  }
  @media screen and (max-width: 1439px) {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: -64px;
    left: 20px;
    width: 174px;
    height: 138px;
    background-image: url(${message});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    @media screen and (min-device-pixel-ratio: 2) {
      background-image: url(${message2});
    }
  }
`;

export const Text = styled.span`
  position: absolute;
  width: 140px;
  height: 48px;
  left: 35px;
  top: -22px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.14;
  color: #111111;
  transform: rotate(-27deg);
`;

export const TectAccent = styled.span`
  color: #3e85f3;
  font-style: italic;
`;
