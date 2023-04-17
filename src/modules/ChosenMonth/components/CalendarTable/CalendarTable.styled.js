import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* width: 1087px; */
  & a {
    text-decoration: none;
    color: rgba(52, 52, 52, 1);
  }

  & .cell-container {
    max-height: 80px;
    /* overflow: auto; */
  }
  & td {
    border: '1px rgba(220, 227, 229, 0.8) solid';
    overflow: auto;
  }
`;

export const StyledUl = styled.ul`
  padding: 0;
  /* max-height: 80px; */
  overflow: auto;
`;

export const StyledLi = styled.li`
  list-style: none;
  padding: 0;
`;
