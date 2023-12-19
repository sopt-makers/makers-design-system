import { createGlobalTheme } from '@vanilla-extract/css';
import { colors } from '../colors/src';
import { fontsObject } from '../fonts/src/fonts';

export const theme = createGlobalTheme('body', {
  colors,
  fontsObject,
});

export default theme;
