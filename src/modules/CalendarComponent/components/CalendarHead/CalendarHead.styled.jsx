import { List } from '@mui/material';
import styled from 'styled-components';

import theme from 'shared/theme';

export const ListStyled = styled(List)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 14px;

  background: ${theme.palette.custom.mainWhite};
  border: 1px solid ${theme.palette.grey.light};
  border-radius: 8px;
  text-transform: uppercase;

  & li:not(:last-child) {
    border-right: 1px solid ${theme.palette.grey.light};
  }

  @media screen and (min-width: 768px) {
    &.calendarHead__list--dayMode {
      margin-bottom: 16px;
    }

    &.calendarHead__list--monthMode {
      margin-bottom: 18px;
    }
  }

  @media screen and (min-width: 1440px) {
    &.calendarHead__list--monthMode {
      margin-bottom: 15px;
    }
  }

  & .calendarHead__dateLink {
    padding: 4px 6px;

    border-radius: 6px;
    color: ${theme.palette.grey[500]};

    font-weight: 700;
    font-size: 12px;
    line-height: 1.166;

    @media screen and (min-width: 768px) {
      padding: 4px 8px;

      border-radius: 8px;
      font-size: 16px;
      line-height: 1.125;
    }
  }

  .calendarHead__item.current .calendarHead__dateLink {
    background: ${theme.palette.primary.main};
    color: ${theme.palette.custom.mainWhite};
  }

  .calendarHead__weekDay {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.125;

    color: ${theme.palette.grey[600]};

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.286;

      &.calendarHead__weekDay--monthMode {
        font-size: 16px;
        line-height: 1.125;
      }
    }
  }

  &.calendarHead__list--monthMode .calendarHead__weekDay--holiday {
    color: ${theme.palette.primary.main};
  }
`;
