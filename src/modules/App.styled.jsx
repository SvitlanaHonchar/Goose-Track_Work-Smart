import styled from 'styled-components';
import theme from 'shared/theme';

export const AppStyled = styled.div`
  background-color: #eaeaea;
  height: 100vh;

  &.darkMode,
  &.darkMode .headerLayout,
  &.darkMode .calenderPage,
  &.darkMode .mainLayout {
    background-color: ${theme.palette.darkmode.dark};
    color: ${theme.palette.custom.mainWhite};

    & .header_burger-btn_icon {
      stroke: ${theme.palette.custom.mainWhite};
    }
  }
  &.darkMode .calendarHead__list,
  &.darkMode .calendarTable {
    background-color: ${theme.palette.darkmode.darkGrey};

    & a {
      color: ${theme.palette.custom.mainWhite};
    }
  }

  &.darkMode .cell-container,
  &.darkMode .MuiInputBase-inputSizeSmall,
  &.darkMode
    .calendarHead__weekDay--monthMode:not(.calendarHead__weekDay--holiday),
  &.darkMode .calendarHead__dateLink {
    color: ${theme.palette.custom.mainWhite};
  }

  &.darkMode .sidebar-container,
  &.darkMode .sidebar-usernav {
    background-color: ${theme.palette.darkmode.black};
    border: transparent;

    & .sidebar-usernav__close-btn {
      background-color: transparent;

      & svg {
        stroke: ${theme.palette.custom.mainWhite};
      }
    }

    & .active {
      background-color: ${theme.palette.primary.main};
      & p {
        color: ${theme.palette.custom.mainWhite};
      }
      & svg {
        stroke: ${theme.palette.custom.mainWhite};
      }
    }
  }

  &.darkMode .accountContainer {
    background-color: ${theme.palette.darkmode.darkGrey};
    color: ${theme.palette.custom.mainWhite};
  }
`;
