import { DarkTheme } from 'react-native-paper';

const theme = {
  ...DarkTheme,
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textTab: 'white',
    textError: 'red',
    primary: '#0366d6',
    mainBackground: 'beige',
    tabBackground: '#24292e'
  },
  fontSizes: {
    body: 14,
    subheading: 18,
    heading: 22,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};
  
export default theme;