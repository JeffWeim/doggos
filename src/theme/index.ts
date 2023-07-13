import type { TTheme } from '@@/interfaces/theme.interface';

const theme: TTheme = {
  border: {
    radius: '5px',
  },
  constants: {
    navAndFooterCombinedHeight: 325,
  },
  colors: {
    blue1: '#006bff',
    blue2: '#1d344b',
    blue3: '#425466',
    blue4: '#1a57ec',
    green: '#66dc90',
    white: '#ffffff',

    background: '#ffffff',
    border: 'rgb(231, 237, 246)',
    shadow: 'rgba(0, 0, 0, 0.04)',
  },
  mediaQueries: {
    tablet: '768px',
    desktop: '1025px',
  },
  spacing: {
    none: '0px',
    xs: '5px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '25px',
    xxl: '30px',
  },
  fonts: {
    primary: `Ariel, sans-serif`,
    secondary: `Georgia, serif`,
  },
  typography: {
    h1: `44px`,
    h2: `30px`,
    h3: `36px`,
    h4: `32px`,
    h5: `28px`,
    h6: `24px`,
    body1: `18px`,
    body2: `16px`,
    body3: `12px`,
    caption: `var(--theme-font-size-caption)`,
  },
};

export default theme;
