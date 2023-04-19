import { createTheme } from '@mui/material/styles';

const fontFamily = 'Inter, sans-serif';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
    },
  },
  palette: {
    primary: {
      main: '#3E85F3',
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
      input: '#F7F7F7',
    },
    custom: {
      input: '#F7F7F7',
      lightBlue: '#72C2F8',
      blue: '#CEEEFD',
      borderLight: '#3e85f333',
      borderDark: '#ffffff26',
      activePeriod: '#CAE8FF',
      pagBorder: '#dce3e580',
      pagDarkBorder: '#ffffff26',
      mainWhite: '#FFFFFF',
      scrollbarThumb: '#E7E5E5',
      bgScrollbarTrack: '#F2F2F2',
      labelDark: '#fafafa4d',
    },

    darkmode: {
      dark: '#171820',
      darkGrey: '#21222C',
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
    h4: {
      fontWeight: 700,
      fontSize: '1rem',
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
      fontSize: '0.9rem',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: 'none',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    overline: {
      fontSize: '0.9rem',
      fontWeight: 400,
      textTransform: 'none',
    },
    text: {
      fontSize: '0.875rem',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 42,
        },
      },
    },
  },
});

export default theme;
