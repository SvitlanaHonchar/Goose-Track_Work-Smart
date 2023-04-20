import styled from 'styled-components';
import theme from '../../../../shared/theme';

export const StyledFooter = styled.footer`
  background-color: ${theme.palette.grey[400]};
  /* position: fixed;
  bottom: 0; */
  /* width: 100%; */
  /* height: 55.5px; */
  color: #fff;
  padding: 18px;
  text-align: center;

  p {
    font-weight: 600;
    font-size: 15px;
    line-height: 1.3;
  }

  a {
    text-decoration: underline;
  }
`;
