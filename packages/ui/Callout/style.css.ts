import { style, styleVariants } from "@vanilla-extract/css";
import theme from "../theme.css";

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

const iconColors = {
  danger: theme.colors.red500,
  information: theme.colors.blue500,
  warning: theme.colors.yellow500,
};

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

const calloutColors = {
  danger: {
    backgroundColor: theme.colors.redAlpha100,
    borderColor: theme.colors.red600,
  },
  information: {
    backgroundColor: theme.colors.blueAlpha100,
    borderColor: theme.colors.blueAlpha600,
  },
  warning: {
    backgroundColor: "rgba(255, 194, 52, 0.1)",
    borderColor: theme.colors.yellow600,
  },
};

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

const buttonColors = {
  danger: theme.colors.red800,
  information: theme.colors.blue800,
  warning: theme.colors.yellow800,
};

export const buttonVariant = styleVariants(buttonColors, (backgroundColor) => [
  buttonBase,
  { backgroundColor },
]);
