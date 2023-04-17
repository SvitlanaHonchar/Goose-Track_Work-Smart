import styled from 'styled-components';
import { Paper, Grid } from '@mui/material';
import theme from 'shared/theme';

export const GridItem = styled(Grid)`
  max-width: 335px;
  width: 100%;
  padding: 0;

  border-radius: 8px;
  ::-webkit-scrollbar {
    width: 6px;
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
    width: 344px;

    ::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const PaperTask = styled(Paper)`
  border: 1px solid ${theme.palette.grey.light};
  border-radius: 8px;
  padding: 25px 18px 10px 18px;
  align-items: flex-start;
`;
