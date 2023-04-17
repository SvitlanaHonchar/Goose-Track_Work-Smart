import theme from 'shared/theme';
import styled from 'styled-components';

export const TaskToolbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 14px;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: transparent;
    border: transparent;
    cursor: pointer;
    padding: 0;

    & svg {
      stroke: ${theme.palette.grey.body};
      fill: none;
      display: inline;
      width: 16px;
      height: 16px;
      opacity: 1;

      &:hover,
      &:focus {
        stroke: ${theme.palette.primary.main};
      }
    }
  }
`;
