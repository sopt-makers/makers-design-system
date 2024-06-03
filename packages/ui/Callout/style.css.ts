import { style } from "@vanilla-extract/css";
import theme from "../theme.css";

export const callout = style({
  display: "flex",
  gap: "10px",
  padding: "14px 18px",

  border: `1px solid ${theme.colors.red600}`,
  borderRadius: "10px",
  backgroundColor: theme.colors.redAlpha100,
});

export const text = style({
  ...theme.fontsObject.BODY_3_14_M,
  color: theme.colors.gray30,
});

export const redIcon = style({
  width: 20,
  color: theme.colors.red500,
});
export const blueIcon = style({
  width: 20,
  color: theme.colors.blue500,
});
export const yellowIcon = style({
  width: 20,
  color: theme.colors.yellow600,
});
