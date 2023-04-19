import styled from 'styled-components';
import { Grid } from '@mui/material';
import theme from 'shared/theme';

export const GridContainer = styled(Grid)`
  max-height: 432px;
  margin-top: 16px;
  gap: 16px;
  width: 375px;
  flex-direction: column;
  overflow-x: auto;

  //  ------- scrollbarTrack ------- //
  ::-webkit-scrollbar {
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 12px;
    background: ${theme.palette.custom.bgScrollbarTrack};
    margin-top: 100px;
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

    ::-webkit-scrollbar {
      height: 14px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 344px;
    gap: 27px;
    overflow: hidden;
  }
`;
