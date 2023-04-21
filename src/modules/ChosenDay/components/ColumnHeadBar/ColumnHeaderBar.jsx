import theme from 'shared/theme';
import styled from 'styled-components';

export const ColumnHeadBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    margin-bottom: 31px;
  }

  & p {
    font-size: 18px;
    line-height: 20px;
    color: ${theme.palette.grey.body};
    font-weight: 700;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
  & button {
    padding-left: 30px;
    background: transparent;
    border: transparent;
    cursor: pointer;
    transition: stroke 200ms cubic-bezier(0.9, 0, 0.2, 1) 0ms;

    & svg {
      fill: none;
      stroke: ${theme.palette.grey.body};
      width: 18.33px;
      height: 18.33px;
      transition: stroke 200ms cubic-bezier(0.9, 0, 0.2, 1) 0ms;

      &:hover,
      &:focus {
        stroke: ${theme.palette.primary.main};
      }
      @media screen and (min-width: 768px) {
        width: 20px;
        height: 20px;
      }
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.6;
      pointer-events: none;
    }
  }
`;
