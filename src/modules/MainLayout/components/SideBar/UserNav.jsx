import {
  StyledIcon,
  StyledLogoDiv,
  StyledNavContainer,
  StyledNavDiv,
  StyledNavLink,
  StyledNavName,
} from './Sidebar.styled';
import Icons from '../../../../shared/icons/sprite.svg';

export const Icon = ({ name, width, height }) => (
  <svg width={width} height={height}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);

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
