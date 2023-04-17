import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: #eaeaea;

  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;

  padding-right: 32px;

  & .mainLayout-frame {
    display: flex;
    gap: 32px;
    justify-content: space-between;

    margin-right: 0;

    & .rigth-frame {
      flex-basis: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      /* align-items: stretch; */
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      /* margin-left: 20px; */
    }

    @media screen and (min-width: 375px) {
      width: 375px;
    }

    @media screen and (min-width: 768px) {
      width: 1151px;
      /* padding-right: 32px; */
    }

    @media screen and (min-width: 1440px) {
      width: 1151px;
    }
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
