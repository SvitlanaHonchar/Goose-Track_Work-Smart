import styled from 'styled-components';

export const StyledDiv = styled.div`
  max-width: 1087px;

  .calendarTable {
    border: 1px solid rgba(220, 227, 229, 0.8);
    border-radius: 8px;
    /* height: 570px; */
    overflow-y: overlay;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0.5em;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(220, 227, 229, 0.8);
      border-radius: 5px;
    }
  }
  .calendarTable tbody tr:last-child .tableCell {
    border-bottom: none;
  }

  .tableCell:not(:last-child) {
    border-right: 1px solid rgba(220, 227, 229, 0.8);
  }

  & a {
    text-decoration: none;
    color: rgba(52, 52, 52, 1);
  }

  & .cell-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 22px;
    max-height: 80px;
    width: 17px;

    @media screen and (min-width: 375px) {
      width: 16px;
    }

    @media screen and (min-width: 768px) {
      width: 69px;
    }

    @media screen and (min-width: 1440px) {
      width: 124px;
    }
    /* overflow: auto; */

    & a {
      color: rgba(52, 52, 52, 1);
      font-weight: 700;

      &.current {
        display: flex;
        align-items: center;
        justify-content: space-between;

        /* width: 27px; */
        height: 26px;

        margin-left: auto;
        padding: 4px 8px;
        background-color: rgba(62, 133, 243, 1);
        color: #fff;
        /* font-weight: 600; */

        border-radius: 8px;
      }
    }
  }
  & td {
    border: '1px rgba(220, 227, 229, 0.8) solid';
    &.not-current {
      & a {
        opacity: 70%;
      }
    }
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

  max-width: 140px;

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

  & p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

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
