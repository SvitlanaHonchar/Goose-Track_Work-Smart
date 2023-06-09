import styled from 'styled-components';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import theme from 'shared/theme';

const commonInputStyles = `
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  padding: 12px 14px;
  @media screen and (min-width: 768px) {
    padding: 14px 18px;
  }
  &:focus {
    outline: 1px solid ${theme.palette.primary.main};
  }
`;

const commonButtonStyles = `
  height: 42px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 48px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const commonOperationBtnStyles = `
  ${commonButtonStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  color: #ffffff;
  background-color: ${theme.palette.primary.main};
`;

const commonWarningStyles = `
  position: absolute;
  bottom: -14px;
  width: 100%;
  margin: 0;
  margin-top: 8px;
  font-size: 10px;
  color: ${theme.palette.error.main};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const InfoInput = styled.input`
  ${commonInputStyles}
  &:focus {
    outline: 1px solid ${theme.palette.primary.main};
  }
  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.29;
    padding: 0;
    opacity: 1;
  }
`;

export const Block = styled.div``;

export const InfoWrapper = styled.div`
  ${Block} {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 15px;
    margin-bottom: 18px;
    @media screen and (min-width: 768px) {
      row-gap: 18px;
      column-gap: 14px;
      margin-bottom: 28px;
    }
  }
`;

export const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;
  &:nth-child(2),
  &:nth-child(3) {
    width: calc(50% - 7.5px);
    @media screen and (min-width: 768px) {
      width: calc(50% - 7px);
    }
  }
`;

export const Label = styled.label`
  text-transform: capitalize;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;

  font-family: ${theme.typography.fontFamily};
`;

export const TimePicker = styled(TimeField)`
  input {
    ${commonInputStyles}
  }
`;

export const ButtonList = styled.ul`
  display: flex;
  column-gap: 14px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CancelButton = styled.button`
  ${commonButtonStyles}
  padding-left: 35px;
  padding-right: 35px;
  color: ${theme.palette.grey.body};
  background-color: ${theme.palette.grey[100]};
  @media screen and (min-width: 768px) {
    padding-left: 48px;
    padding-right: 48px;
  }
`;

export const AddButton = styled.button`
  ${commonOperationBtnStyles};
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (min-width: 768px) {
    padding-left: 63px;
    padding-right: 63px;
  }
  svg {
    stroke: currentColor;
    width: 20px;
    height: 20px;
  }
`;

export const EditButton = styled.button`
  ${commonOperationBtnStyles};
  padding-left: 108px;
  padding-right: 108px;
  @media screen and (min-width: 768px) {
    padding-left: 140px;
    padding-right: 140px;
  }
  svg {
    stroke: currentColor;
    fill: ${theme.palette.primary.main};
    width: 18px;
    height: 18px;
  }
`;

export const WarningTime = styled.p`
  ${commonWarningStyles};
`;
export const WarningTitle = styled.p`
  ${commonWarningStyles};
`;
