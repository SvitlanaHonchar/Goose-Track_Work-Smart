import { Icon } from './Icon';
import { StyledLogoutBtn } from './Sidebar.styled';

export default function LogoutBtn() {
  return (
    <StyledLogoutBtn type="button">
      <span>Log out</span>
      <Icon name="arrowShortRight" width="20px" height="20px" />
    </StyledLogoutBtn>
  );
}
