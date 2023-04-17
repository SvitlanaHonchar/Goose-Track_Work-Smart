import { Icon } from './Icon';
import {
  StyledCloseBtn,
  StyledIcon,
  StyledLogoDiv,
  StyledNavContainer,
  StyledNavDiv,
  StyledNavLink,
  StyledNavName,
} from './Sidebar.styled';

export default function UserNav({ onClick }) {
  return (
    <StyledNavContainer>
      <StyledLogoDiv>
        <div>
          <img src={require('./images/goose-logo.png')} alt="goose logo" />
        </div>
        <h2>Goose Track</h2>

        <StyledCloseBtn type="button" onClick={onClick}>
          <Icon name="close" width="16px" height="16px" />
        </StyledCloseBtn>
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
