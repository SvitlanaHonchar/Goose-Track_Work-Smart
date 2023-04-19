import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { authLogout } from 'redux/auth/authOperations';
import theme from 'shared/theme';
import sprite from '../../../../../shared/icons/sprite.svg';

const style = {
  buttonLogOut: {
    minWidth: {
      xs: '108px',
    },
    alignItems: 'center',
    justifyContent: 'center',
    width: '108px',
    height: '37px',
    gap: '8px',
    bgcolor: theme.palette.primary.main,
    boxShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
    borderRadius: '8px',
    fontSize: 14,
    lineHeight: 1.29,
    letterSpacing: '-0.02em',
    color: theme.palette.custom.mainWhite,
    stroke: theme.palette.custom.mainWhite,
  },
};

export const UserInfoModalBtnLogOut = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="contained"
        sx={style.buttonLogOut}
        onClick={() => dispatch(authLogout())}
      >
        Log out
        <svg height="16" width="16">
          <use href={sprite + '#logOut'}></use>
        </svg>
      </Button>
    </>
  );
};
