import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* flex-grow: 7, 1; */
  background-color: #fff;

  border-right: 1px solid #dce3e5;
  /* height: 100%; */
  width: 289px;
  min-height: calc(100vh - 55.5px);
  /* max-height: 100vh; */
  padding: 24px 32px;
  position: sticky;
  top: 0;

  @media screen and (max-width: 1439px) {
    height: 100%;
    background-color: #fff;
    width: 289px;
    /* transform: scaleX(0, 0); */
    /* transition: transform 0.25ms linear; */
    &.is-closed {
      /* transform: scaleX(1, 1); */
      position: fixed;
      left: -100%;
      /* transform: translateX(-100%); */
    }

    &.is-open {
      transform: translateX(0);
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0%;
    }
  }
  @media screen and (max-width: 375px) {
    padding: 24px 20px;
    width: 225px;
  }
`;

export const StyledNavContainer = styled.nav`
  /* padding: 24px; */
  background-color: #fff;
  flex-grow: 6;

  & p {
    padding: 0;
  }
`;

export const StyledLogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 8px; */
  margin-bottom: 32px;

  @media screen and (max-width: 1439px) {
    margin-bottom: 50px;

    & h2 {
      margin-right: 45px;
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 64px;

    /* & h2 {
      margin-right: 45px;
    } */
  }

  & h2 {
    margin-top: 0;
    margin-bottom: 0;

    font-family: 'Coolvetica', sans-serif;
    font-style: italic;
    font-size: 24px;
    line-height: 1;
    color: #3e85f3;

    @media screen and (max-width: 1439px) {
      font-size: 18px;
      line-height: 1.33;
    }

    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }

  & div {
    margin-right: 10px;
  }

  & img {
    width: 71px;
    height: 68px;

    @media screen and (max-width: 1439px) {
      width: 60px;
    }

    @media screen and (max-width: 767px) {
      width: 36px;
      height: 35px;
    }
  }
`;

// export const NavigationDiv = styled.div``;

export const StyledNavLink = styled(NavLink)`
  padding: 18px 23px;
  text-decoration: none;
  color: #84828a;
  border-radius: 8px;
  /* height: 56px; */

  display: flex;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.18;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.21;
    padding: 12px 16px;
  }

  & p {
    margin-bottom: 0;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &.active {
    background-color: #e3f3ff;
    color: #3e85f3;
  }

  &.active svg {
    fill: #3e85f3;
    stroke: #3e85f3;
  }

  &.active p {
    color: #3e85f3;
  }
`;

export const StyledIcon = styled.div`
  fill: #84828a;
  stroke: #84828a;
  margin-right: 13px;
`;

export const StyledNavDiv = styled.div`
  & p {
    /* font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: #7e7d82; */
  }
`;

export const StyledNavName = styled.p`
  margin-bottom: 32px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.21;

  color: #7e7d82;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const StyledLogoutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 141px;
  border: none;
  padding: 16px 23px;

  @media screen and (max-width: 767px) {
    padding: 14px 28px;
  }

  cursor: pointer;

  background: #3e85f3;

  border-radius: 16px;

  &:hover {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  }

  & span {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.33;

    letter-spacing: -0.02em;
    color: #fff;

    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 1.29;
    }
  }

  & svg {
    stroke: #fff;
  }
`;

export const StyledCloseBtn = styled.button`
  /* position: absolute;

  @media screen and (min-width: 375px) {
    top: 35px;
    right: 187px;
  }

  @media screen and (min-width: 768px) {
    top: 45px;
    right: 232px;
  } */

  @media screen and (min-width: 1440px) {
    display: none;
  }

  border: none;
  background-color: #fff;
  & svg {
    stroke: #3e85f3;
    fill: #3e85f3;
  }
`;
