import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 64px;

  & .header__right-container {
    display: flex;
    align-items: center;
    /* gap: 14px; */
    margin-left: auto;

    & p {
      margin-left: 14px;
    }
  }

  & .header-calendar {
    display: none;
  }

  & h2 {
    display: none;
  }

  & button {
    &.header_burger-btn_icon {
      padding: 0;
      border: none;
      background-color: transparent;
      width: 32px;
    }

    /* & .MuiTouchRipple-root {
      display: block;
    } */

    & .header_burger-btn_icon {
      stroke: #343434;
    }
  }

  @media screen and (min-width: 768px) {
    min-height: 69.352px;

    & .header-calendar {
      display: flex;
      align-items: flex-end;
      gap: 8px;

      & .header-motivation__quote {
        line-height: 0.8;
      }

      & span {
        color: #3e85f3;
      }
    }

    & h2 {
      display: block;

      &.header-title__calendar {
        left: 72px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;

    margin-bottom: 32px;
    & button {
      &.burger-btn {
        display: none;
      }
    }
  }
`;
