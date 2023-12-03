import { createTheme } from '@vanilla-extract/css';
import { colors } from '@sopt-makers/colors';
import { fonts } from '@sopt-makers/fonts';

export const [themeClass, theme] = createTheme({
  colors,
  fonts
});

export default theme;