import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Form, Field, ErrorMessage } from 'formik';
import theme from '../../../shared/theme';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
`;

export const RegisterFormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 40px 24px;

  .ValidInput {
    border: 1px solid rgba(220, 227, 229, 0.6);
  }

  .InvalidInput {
    border: 1px solid #ea3d65;
  }
`;

export const SignUpText = styled.p`
  margin-top: 0;
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  color: ${theme.palette.primary.main};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;
  color: ${theme.palette.grey.body};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.21;
  }

  &:not(:last-child) {
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      margin-bottom: 18px;
    }
  }

  &:nth-of-type(3) {
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
      margin-bottom: 48px;
    }
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: ${theme.palette.error.main};
`;

export const StyledField = styled(Field)`
  padding: 14px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.29px;
  color: ${theme.palette.grey.body};
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.12;
  }

  &::placeholder {
    font-size: 14px;
    line-height: 1.29;
    color: ${theme.palette.grey.light};

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.12;
    }
  }
`;

export const PasswordInput = styled.div`
  position: relative;
`;

export const StyledVisibilityBtn = styled(Button)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
`;

export const StyledButton = styled(Button)`
  padding-top: 14px;
  padding-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28px;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const Svg = styled.svg`
  stroke: #ffffff;
`;
