import styled from 'styled-components';
import { Grid } from '@mui/material';
import theme from 'shared/theme';

export const GridContainer = styled(Grid)`
  max-height: 432px;
  margin-top: 16px;
  gap: 16px;
  flex-direction: column;
  overflow-x: scroll;

  &.MuiGrid-container {
    width: 335px;
  }

  //  ------- scrollbarTrack ------- //
  ::-webkit-scrollbar {
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 12px;
    background: ${theme.palette.custom.bgScrollbarTrack};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.palette.custom.scrollbarThumb};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.palette.grey.light};
  }

  //  ------- scrollbarTrack ------- //

  @media screen and (min-width: 768px) {
    max-height: 568px;
    min-height: 165px;
    gap: 20px;
    margin-bottom: 16px;

    ::-webkit-scrollbar {
      height: 14px;
    }
    &.MuiGrid-container {
      width: 728px;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 27px;
    overflow: hidden;
    &.MuiGrid-container {
      width: 1086px;
    }
  }
`;
