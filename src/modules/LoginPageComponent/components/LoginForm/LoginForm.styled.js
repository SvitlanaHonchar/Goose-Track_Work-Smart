import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Form } from 'formik';

export const StyledContainer = styled.div`
  .FormContainer {
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 18px;

    @media screen and (max-width: 374px) {
      width: 100%;
      max-width: 335px;
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;

export const StyledLoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px;
    width: 480px;
  }

  .Title {
    margin-top: 0;
    margin-bottom: 32px;

    font-weight: 600;
    font-size: 18px;
    line-height: 1.33;
    color: #3e85f3;
    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

    @media screen and (min-width: 768px) {
      margin-bottom: 40px;
      font-size: 24px;
      line-height: 1;
    }
  }

  .Inputlabel {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-weight: 600;
    font-size: 12px;
    line-height: 1.25;
    color: #111111;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.21;
    }

    &:not(:last-child) {
      margin-bottom: 24px;

      @media screen and (min-width: 768px) {
        margin-bottom: 18px;
      }

      &.custom-border {
        border: 2px solid red;
      }
    }

    &:nth-of-type(2) {
      margin-bottom: 32px;

      @media screen and (min-width: 768px) {
        margin-bottom: 48px;
      }
    }

    & .ErrorMessage {
      color: #ea3d65;
    }
  }

  .InputField {
    padding: 14px;
    border: 1px solid rgba(220, 227, 229, 0.6);
    border-radius: 8px;
    width: 100%;

    font-weight: 400;
    font-size: 14px;
    line-height: 1.29px;
    color: #111111;

    @media screen and (min-width: 768px) {
      padding: 18px;
      font-size: 16px;
      line-height: 1.12;
    }

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.29;
      color: #dce3e5;

      @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.12;
      }
    }
  }

  .InputFieldPassword::placeholder {
    letter-spacing: 8px;
  }

  .PasswordInput {
    position: relative;
    width: 100%;
  }
`;

export const StyledButton = styled(Button)`
  padding-top: 14px;
  padding-bottom: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #ffffff;
  stroke: #ffffff;
  text-transform: none;

  @media screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const StyledVisibilityBtn = styled(Button)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
`;
