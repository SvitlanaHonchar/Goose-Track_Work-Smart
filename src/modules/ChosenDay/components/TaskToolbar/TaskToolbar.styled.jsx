import { Menu, MenuItem } from '@mui/material';
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
  }

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

export const MenuList = styled(Menu)`
  .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper {
    @media screen and (max-width: 768px) {
      height: 80px;
      width: 130px;
    }
  }
  @media screen and (min-width: 375px) {
    & .css-6hp17o-MuiList-root-MuiMenu-list {
      padding: 0;
    }
    & .css-ib3qtv-MuiButtonBase-root-MuiMenuItem-root {
      padding: 0;
    }
  }
`;

export const MenuItemColumn = styled(MenuItem)`
  & svg {
    height: 14px;
    width: 14px;
    fill: none;
    display: inline;
    width: 14px;
    height: 14px;
    opacity: 1;
    transition: stroke 200ms cubic-bezier(0.9, 0, 0.2, 1) 0ms;

    @media screen and (min-width: 768px) {
      height: 16px;
      width: 16px;
    }

    @media screen and (max-width: 375px) {
      height: 30px;
      padding: 1px;
    }
  }
`;

export const CategoryTitle = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;
