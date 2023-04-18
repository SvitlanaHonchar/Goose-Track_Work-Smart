import theme from 'shared/theme';
import styled from 'styled-components';

export const TaskToolbarList = styled.ul`
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;

  & button {
    display: flex;
    flex-direction: row;
    background: transparent;
    border: transparent;
    cursor: pointer;
    padding: 0;

    & svg {
      stroke: ${theme.palette.grey.body};
      fill: none;
      display: inline;
      width: 14px;
      height: 14px;
      opacity: 1;
      transition: stroke 200ms cubic-bezier(0.9, 0, 0.2, 1) 0ms;

      &:hover,
      &:focus {
        stroke: ${theme.palette.primary.main};
      }
   
      @media screen and (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`;
