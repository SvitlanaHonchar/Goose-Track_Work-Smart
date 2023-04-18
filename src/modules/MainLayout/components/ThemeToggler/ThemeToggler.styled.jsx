import styled from 'styled-components';
import theme from 'shared/theme';

export const ButtonStyled = styled.div`
  cursor: pointer;
  width: 10px;
  height: 10px;
  & .themeToggler__icon {
    width: 20px;
    height: 20px;
    color: ${theme.palette.primary.main};

    @media screen and (min-width: 768px) {
      width: 26px;
      height: 26px;
    }
  }
`;
