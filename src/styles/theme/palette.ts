const white = '#FFFFFF';
const black = '#000000';

const palette = {
  common: {
    black,
    white
  },
  primary: {
    extraLight: '#91B9FF',
    light: '#5291FF',
    main: '#3769FF',
    dark: '#1446E1',
    contrastText: white
  },
  secondary: {
    light: '#6cc247',
    main: '#5abc2a',
    dark: '#589435',
    contrastText: white
  },
  success: {
    contrastText: white,
    dark: '#006600',
    main: '#006600',
    light: '#006600'
  },
  info: {
    contrastText: '#005ea5',
    dark: white,
    main: white,
    light: white
  },
  warning: {
    contrastText: white,
    dark: '#7986cb',
    main: '#7986cb',
    light: '#7986cb'
  },
  error: {
    light: '#e57373',
    main: '#CC0000',
    dark: '#d32f2f',
    contrastText: white,
    background: 'rgba(230,0,0,0.06)'
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#767676',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
    A800: '#454545',
    ft1: '#FAFAFA',
    ft2: '#E8E8E8',
    ft3: '#767676',
    ft4: '#333333'
  },
  text: {
    primary: black,
    secondary: '#72bf44',
    disabled: '#9a9a9a',
    hint: '#aaaaaa',
    grey: '#726e70'
  },
  button: {
    grey: '#918c8b',
    green: '#5abc2a',
    blue: '#3769FF'
  },
  background: {
    paper: white,
    default: white,
    light: '#E1F3F8'
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: '#767676',
    disabledBackground: '#767676'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  type: 'light',
  icon: '#005ea5'
};

export default palette;
