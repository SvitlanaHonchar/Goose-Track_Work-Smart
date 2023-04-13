import { useDispatch } from 'react-redux';
import { Icon } from './Icon';
import { StyledLogoutBtn } from './Sidebar.styled';
import { authLogout } from 'redux/auth/authOperations';

export default function LogoutBtn() {
  const dispatch = useDispatch();

  return (
    <StyledLogoutBtn type="button" onClick={() => dispatch(authLogout)}>
      <span>Log out</span>
      <Icon name="arrowShortRight" width="20px" height="20px" />
    </StyledLogoutBtn>
  );
}
