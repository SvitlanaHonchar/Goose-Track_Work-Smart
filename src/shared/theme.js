import { createTheme } from '@mui/material/styles';

const fontFamily = 'Inter, sans-serif';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3E85F3',
      light: '#72C2F8',
      dark: '#CEEEFD',
    },
    secondary: {
      main: '#DCEBF7',
      light: '#E3F3FF',
    },
    error: {
      main: '#EA3D65',
      light: '#FFD2DD',
    },
    warning: {
      main: '#F3B249',
      light: '#FCF0D4',
    },
    grey: {
      100: '#EFEFEF',
      200: '#F7F6F9',
      300: '#7E7D82',
      400: '#84828A',
      500: '#343434',
      600: '#616161',
      700: '#171820',
      800: '#2D3037',
      900: '#13151A',
      body: '#111111',
      dark: '#21222C',
      light: '#DCE3E5',
    },
  },
  typography: {
    fontFamily,
    fontSize: 14,
    fontWeightMedium: 500,

    h1: {
      fontWeight: 400,
      fontSize: '3rem',
      fontFamily: 'Coolvetica',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.3rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.3rem',
    },
    subtitle1: {
      fontSize: '0.9rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '1.4rem',
    },
    subtitle3: {
      fontWeight: 400,
      fontSize: 12,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    overline: {
      fontSize: '0.9rem',
      fontWeight: 400,
    },
  },
});

export default theme;