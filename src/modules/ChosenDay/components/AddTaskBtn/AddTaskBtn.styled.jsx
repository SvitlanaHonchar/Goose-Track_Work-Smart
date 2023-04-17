import styled from 'styled-components';
import theme from '../../../../shared/theme';

export const AddTaskWrapper = styled.div``;

export const Button = styled.button`
  display: flex;
  justify-content: center;

  align-items: center;
  column-gap: 8px;
  background-color: ${theme.palette.secondary.light};
  border: 1px dashed ${theme.palette.custom.borderLight};
  border-radius: 8px;
  gap: 13px;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;

  max-width: 299px;
  width: 100%;
  height: 48px;

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
    width: 304px;
  }
`;
