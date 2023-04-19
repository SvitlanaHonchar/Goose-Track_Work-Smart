import styled from 'styled-components';

export const TasksWrapper = styled.ul`
  max-height: 280px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    max-height: 376px;
  }
`;
