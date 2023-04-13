import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #eaeaea;
  display: flex;
  width: 100%;

  & h2 {
    display: none;
  }

  & button {
    padding: 0;
    border: none;
    background-color: transparent;

    & .header_burger-btn {
      stroke: #343434;
    }
  }

  @media screen and (min-width: 1440px) {
    & button {
      display: none;
    }

    & h2 {
      display: block;
    }
  }
`;
