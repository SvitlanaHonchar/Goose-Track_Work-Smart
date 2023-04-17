import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* width: 1087px; */
  & a {
    text-decoration: none;
    color: rgba(52, 52, 52, 1);
  }

  & .cell-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 22px;
    max-height: 80px;
    /* overflow: auto; */

    & a {
      &.current {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 27px;
        height: 26px;
        padding: 4px 8px;
        background-color: rgba(62, 133, 243, 1);
        color: #fff;
        font-weight: 600;

        border-radius: 8px;
      }
    }
  }
  & td {
    border: '1px rgba(220, 227, 229, 0.8) solid';
    /* overflow: auto; */
  }
`;

export const StyledUl = styled.ul`
  padding: 0;
  & .more-btn {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28;

    color: rgba(62, 133, 243, 1);
  }
`;

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 140px;

  margin-top: 2px;
  /* margin-left: 8px; */
  padding-left: 12px;
  border-radius: 8px;

  height: 26px;

  list-style: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  /* overflow: auto; */

  &.low {
    background-color: rgba(206, 238, 253, 1);
    color: rgba(62, 133, 243, 1);
  }
  &.medium {
    background-color: rgba(252, 240, 212, 1);
    color: rgba(243, 178, 73, 1);
  }
  &.high {
    background-color: rgba(255, 210, 221, 1);
    color: rgba(234, 61, 101, 1);
  }
`;
