import { style, styleVariants } from "@vanilla-extract/css";
import theme from "../theme.css";
import { buttonColors, calloutColors, iconColors } from "./constants";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 18,
});

export const text = style({
  textAlign: "left",
  ...theme.fontsObject.BODY_3_14_M,
  color: theme.colors.gray30,
});

export const buttonIcon = style({
  width: 16,
  color: theme.colors.white,
});

// ▶️ icon styleVariants
const iconBase = style({
  flexShrink: 0,
  width: 20,
});

export const iconVariant = styleVariants(iconColors, (color) => [
  iconBase,
  { color },
]);

// ▶️ callout styleVariants
const calloutBase = style({
  display: "flex",
  gap: "10px",
  alignItems: "flex-start",
  padding: "14px 18px",

  border: "1px solid",
  borderRadius: "10px",
});

export const calloutVariant = styleVariants(
  calloutColors,
  ({ backgroundColor, borderColor }) => [
    calloutBase,
    { backgroundColor, borderColor },
  ]
);

// ▶️ button styleVariants
const buttonBase = style({
  display: "flex",
  gap: 4,
  padding: "9px 14px",
  alignItems: "center",

  border: 0,
  borderRadius: 8,

  ...theme.fontsObject.LABEL_3_14_SB,
  color: theme.colors.white,

  cursor: "pointer",
});

export const buttonVariant = styleVariants(buttonColors, (backgroundColor) => [
  buttonBase,
  { backgroundColor },
]);
