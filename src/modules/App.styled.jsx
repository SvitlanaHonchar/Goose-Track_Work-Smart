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
`;
