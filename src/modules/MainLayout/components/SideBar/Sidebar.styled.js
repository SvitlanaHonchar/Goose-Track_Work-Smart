import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 7, 1;

  border-right: 1px solid #dce3e5;
  height: 900px;
`;

export const StyledNavContainer = styled.nav`
  padding: 24px;
  background-color: #fff;
  flex-grow: 6;

  & p {
    padding: 0;
  }
`;

export const StyledLogoDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  & h2 {
    margin-top: 0;
    margin-bottom: 0;

    font-family: 'Coolvetica', sans-serif;
    font-style: italic;
    font-size: 24px;
    line-height: 1;
    color: #3e85f3;
  }

  & div {
    margin-right: 10px;
  }
`;

// export const NavigationDiv = styled.div``;

export const StyledNavLink = styled(NavLink)`
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 23px;
  text-decoration: none;
  color: #84828a;
  border-radius: 8px;
  /* height: 56px; */

  display: flex;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

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
  }

  &.active p {
    color: #3e85f3;
  }
`;

export const StyledIcon = styled.div`
  fill: #84828a;
  margin-right: 13px;
`;

export const StyledNavDiv = styled.div`
  & p {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: #7e7d82;
  }
`;

export const StyledNavName = styled.p`
  margin-bottom: 32px;
`;

export const StyledLogoutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 141px;
  border: none;
  padding: 16px 23px;

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
  }

  & svg {
    stroke: #fff;
  }
`;
