import styled from 'styled-components';
import theme from '../../../../shared/theme';

export const Button = styled.button`
  max-width: 297px;
  width: 100%;
  width: 100%;
  height: 48px;
  display: flex;

  justify-content: center;
  align-items: center;
  column-gap: 8px;
  gap: 13px;

  background-color: ${theme.palette.secondary.light};
  border: 1px dashed ${theme.palette.custom.borderLight};
  border-radius: 8px;

  font-size: 14px;
  line-height: 18px;

  cursor: pointer;
  transition: border 200ms cubic-bezier(0.9, 0, 0.2, 1) 0ms;
  margin-top: 5px;
  &:hover,
  &:focus {
    border: 1.5px dashed ${theme.palette.primary.main};
  }

  & svg {
    stroke: #111111;
    fill: none;
    width: 24px;
    height: 24px;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;
