import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavContainer = styled.nav`
  padding: 24px;
  border-right: 1px solid #dce3e5;
  background-color: #fff;

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

export const NavigationDiv = styled.div``;

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
