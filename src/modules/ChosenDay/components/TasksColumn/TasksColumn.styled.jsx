import styled from 'styled-components';
import { Paper, Grid } from '@mui/material';
import theme from 'shared/theme';

export const ContainerTask = styled.div`
  width: 335px;
  max-height: 432px;
  border: 1px solid ${theme.palette.grey.light};
  border-radius: 8px;
  background-color: ${theme.palette.custom.mainWhite};
  padding: 25px 18px 10px 18px;

  @media screen and (min-width: 768px) {
    padding: 25px 20px 28px 20px;
    width: 344px;
    max-height: 568px;
  }
`;

export const GridItem = styled(Grid)`
  max-height: 280px;

  @media screen and (min-width: 768px) {
    max-height: 376px;
  }

  //  ------- scrollbarTrack ------- //
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 12px;
    margin-right: 10px;
    background: ${theme.palette.custom.bgScrollbarTrack};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.palette.custom.scrollbarThumb};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.palette.custom.pagBorder};
  }
  //  ------- scrollbarTrack ------- //

  @media screen and (min-width: 768px) {
    ::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const PaperTask = styled(Paper)`
  overflow-y: auto;
  align-items: flex-start;
`;
