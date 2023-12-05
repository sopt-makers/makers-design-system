import { createGlobalTheme } from '@vanilla-extract/css';
import { colors } from '@sopt-makers/colors';
import { fonts } from '@sopt-makers/fonts';

export const theme = createGlobalTheme("body", {
  colors,
  fonts
});

export default theme;