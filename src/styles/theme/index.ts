import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import { fontFamily } from './constants';

const theme = createTheme({
  palette,
  typography,
  breakpoints,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

export default theme;
