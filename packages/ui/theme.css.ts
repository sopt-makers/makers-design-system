import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "@sopt-makers/colors/src";
import { fontsObject } from "@sopt-makers/fonts/src";

const theme = createGlobalTheme("body", {
  colors,
  fontsObject,
});

export default theme;
