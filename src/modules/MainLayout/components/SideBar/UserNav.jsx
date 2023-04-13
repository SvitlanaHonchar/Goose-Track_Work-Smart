import { Icon } from './Icon';
import {
  StyledIcon,
  StyledLogoDiv,
  StyledNavContainer,
  StyledNavDiv,
  StyledNavLink,
  StyledNavName,
} from './Sidebar.styled';

export default function UserNav() {
  return (
    <StyledNavContainer>
      <StyledLogoDiv>
        <div>
          <img src={require('images/goose-logo.png')} alt="goose logo" />
        </div>
        <h2>Goose Track</h2>
      </StyledLogoDiv>
      <StyledNavDiv>
        <StyledNavName>User Panel</StyledNavName>
        <StyledNavLink to="/account">
          <StyledIcon>
            <Icon name="userCheck" width="18px" height="18px" />
          </StyledIcon>
          <p>My account</p>
        </StyledNavLink>
        <StyledNavLink to="calendar">
          <StyledIcon>
            <Icon name="calendarCheck" width="18px" height="18px" />
          </StyledIcon>
          <p>Calendar</p>
        </StyledNavLink>
      </StyledNavDiv>
    </StyledNavContainer>
  );
}
