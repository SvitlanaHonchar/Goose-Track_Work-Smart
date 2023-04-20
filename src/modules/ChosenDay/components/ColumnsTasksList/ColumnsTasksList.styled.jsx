import styled from 'styled-components';

export const TasksWrapper = styled.ul`
  max-height: 280px;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-height: 376px;
  }

  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;
