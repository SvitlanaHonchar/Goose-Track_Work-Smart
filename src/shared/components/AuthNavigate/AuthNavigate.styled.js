import styled from 'styled-components';

export const StyledAuthNavigate = styled.header`
  background-color: rgba(62, 133, 243, 1);
  padding-top: 376px;
  padding-bottom: 88px;

  @media screen and (min-width: 768px) {
    padding-top: 465px;
    padding-bottom: 320px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 331px;
    padding-bottom: 200px;
  }

  .ContentContainer {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .AuthNavHeadline {
    margin-top: 0;
    font-family: 'Coolvetica', sans-serif;
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 44px;
    line-height: 1.09;
    color: #ffffff;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

    @media screen and (min-width: 768px) {
      margin-bottom: 40px;
      font-weight: 400;
      font-size: 120px;
      line-height: 1.25;
    }
  }

  .AuthNavBtnContainer {
    display: flex;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      gap: 176px;
    }
  }

  .AuthNavBtn {
    padding-top: 14px;
    padding-bottom: 14px;
    width: 131px;
    display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;
    font-size: 14;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 1);
    text-decoration: underline;
    background-color: transparent;
    border: none;
    box-shadow: none;
    border-radius: 16px;

    &:hover,
    &:focus {
      color: rgba(62, 133, 243, 1);
      stroke: rgba(62, 133, 243, 1);
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    }

    @media screen and (min-width: 768px) {
      width: 121px;
      height: 49px;
    }
  }
`;
