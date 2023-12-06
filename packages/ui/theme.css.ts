import { createGlobalTheme } from '@vanilla-extract/css';
import { colors } from '../colors/src';
import { fonts } from '../fonts/src';

export const theme = createGlobalTheme("body", {
  colors,
  fonts
});

export default theme;