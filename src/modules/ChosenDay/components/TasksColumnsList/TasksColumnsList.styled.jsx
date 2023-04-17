import styled from 'styled-components';
import { Grid } from '@mui/material';

export const GridContainer = styled(Grid)`
  border-color: black solid 1px;
  max-height: 568px;
  max-width: 1087px;
  margin-top: 16px;
  // gap: 20px;
  height: 100%;
  flex-direction: column,


  ::-webkit-scrollbar {
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #dce3e5;
  }

  @media screen and (min-width: 768px) {
    min-height: 165px;
    overflow-x: 'scroll';

    ::-webkit-scrollbar {
      height: 14px;
    }
  }
`;
