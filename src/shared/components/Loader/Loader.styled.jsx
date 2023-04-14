import styled from 'styled-components';

import loader from './goose.gif';

export const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.834) url(${loader}) center no-repeat;
  z-index: 1;
`;
