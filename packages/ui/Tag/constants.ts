import theme from "../theme.css";
import type {
  TagBgColorTheme,
  TagShapeTheme,
  TagSizeTheme,
  TagVariantTheme,
} from "./types";

export const bgColors: Record<TagBgColorTheme, string> = {
  "default-solid": theme.colors.gray700,
  "primary-solid": theme.colors.orangeAlpha200,
  "secondary-solid": theme.colors.blueAlpha200,
  "default-line": "none",
  "primary-line": "none",
  "secondary-line": "none",
};

export const borders: Record<TagBgColorTheme, string> = {
  "default-solid": "none",
  "primary-solid": "none",
  "secondary-solid": "none",
  "default-line": `1px solid ${theme.colors.gray300}`,
  "primary-line": `1px solid ${theme.colors.orange700}`,
  "secondary-line": `1px solid ${theme.colors.blue700}`,
};

export const textColors: Record<TagVariantTheme, string> = {
  default: theme.colors.gray10,
  primary: theme.colors.secondary,
  secondary: theme.colors.success,
};

export const borderRadiuses: Record<TagShapeTheme, string> = {
  rect: "4px",
  pill: "100px",
};

export const paddings: Record<TagSizeTheme, string> = {
  sm: "3px 6px",
  md: "3px 7px",
  lg: "3px 8px",
};

export const fonts = {
  sm: theme.fontsObject.LABEL_5_11_SB,
  md: theme.fontsObject.LABEL_3_14_SB,
  lg: theme.fontsObject.LABEL_2_16_SB,
};
