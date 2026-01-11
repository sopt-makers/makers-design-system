import theme from "../theme.css";
import type {
  TagBgColorTheme,
  TagShapeTheme,
  TagSizeTheme,
} from "./types";

export const bgColors: Record<TagBgColorTheme, string> = {
  "default-solid": theme.colors.gray700,
  "primary-solid": theme.colors.orangeAlpha200,
  "secondary-solid": theme.colors.blueAlpha200,
  "default-line": "unset",
  "primary-line": "unset",
  "secondary-line": "unset",
  "default-accent": theme.colors.gray10,
  "primary-accent": theme.colors.secondary,
  "secondary-accent": theme.colors.success,
};

export const borders: Record<TagBgColorTheme, string> = {
  "default-solid": "none",
  "primary-solid": "none",
  "secondary-solid": "none",
  "default-line": `0 0 0 1px ${theme.colors.gray300} inset`,
  "primary-line": `0 0 0 1px ${theme.colors.orange700} inset`,
  "secondary-line": `0 0 0 1px ${theme.colors.blue700} inset`,
  "default-accent": "none",
  "primary-accent": "none",
  "secondary-accent": "none",
};

export const textColors: Record<TagBgColorTheme, string> = {
  "default-solid": theme.colors.gray10,
  "primary-solid": theme.colors.secondary,
  "secondary-solid": theme.colors.success,
  "default-line": theme.colors.gray10,
  "primary-line": theme.colors.secondary,
  "secondary-line": theme.colors.success,
  "default-accent": theme.colors.gray950,
  "primary-accent": theme.colors.gray950,
  "secondary-accent": theme.colors.gray50,
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

export const iconSizes: Record<TagSizeTheme, number> = {
  sm: 14,
  md: 16,
  lg: 18,
};
