import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "@sopt-makers/colors";
import { fontsObject } from "@sopt-makers/fonts";

const theme = createGlobalTheme("body", {
  colors,
  fontsObject,
});

export default theme;
