import styled from 'styled-components';
import theme from 'shared/theme';

export const ButtonStyled = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & .themeToggler__icon {
    width: 24px;
    height: 24px;
    color: ${theme.palette.primary.main};

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
`;
