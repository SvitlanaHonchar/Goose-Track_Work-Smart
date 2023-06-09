import styled from 'styled-components';
import theme from '../../../../shared/theme';

export const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDiv = styled.div`
  background-color: ${theme.palette.grey[200]};
  /* height: 100vh; */

  margin-left: auto;
  margin-right: auto;

  & .mainLayout-frame {
    display: flex;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (max-width: 1439px) {
    min-height: calc(100vh - 55.5px);
  }

  @media screen and (min-width: 1440px) {
    display: flex;

    width: 1440px;
  }
`;

export const StyledMainContent = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 24px;
  padding-bottom: 52px;

  @media screen and (min-width: 768px) {
    padding-top: 38px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 40px;
    padding-bottom: 32px;
  }
`;
