import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-right: 32px;
  /* padding-left: 20px; */

  margin-top: 20px;
  margin-bottom: 20px;

  /* background-color: #eaeaea; */

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    /* padding-left: 32px; */
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
