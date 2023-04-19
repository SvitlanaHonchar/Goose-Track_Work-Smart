import styled from 'styled-components';
import theme from 'shared/theme';

export const AppStyled = styled.div`
  &.darkMode,
  &.darkMode .headerLayout,
  &.darkMode .calenderPage,
  &.darkMode .mainLayout {
    background-color: ${theme.palette.darkmode.dark};
    color: ${theme.palette.custom.mainWhite};
  }
  &.darkMode .calendarHead__list,
  &.darkMode .calendarTable {
    background-color: ${theme.palette.darkmode.darkGrey};
  }

  &.darkMode .cell-container,
  &.darkMode
    .calendarHead__weekDay--monthMode:not(.calendarHead__weekDay--holiday),
  &.darkMode .calendarHead__dateLink {
    color: ${theme.palette.custom.mainWhite};
  }

  &.darkMode .toggle-btn {
    background-color: ${theme.palette.darkmode.darkGrey};
    &.Mui-selected {
      color: ${theme.palette.custom.mainWhite};
      background-color: ${theme.palette.primary.main};
    }
  }
  &.darkMode .period-pag-btn {
    background-color: ${theme.palette.darkmode.darkGrey};
    border: 1px solid ${theme.palette.custom.pagDarkBorder};
    &:hover,
    &:focus {
      background-color: ${theme.palette.primary.main};
    }
    svg {
      stroke: ${theme.palette.custom.mainWhite};
    }
  }
`;
