import { style, styleVariants } from "@vanilla-extract/css";
// import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import theme from "../theme.css";
// import { backgroundColor, borderColor, iconColor } from "./constants";

// sprinkles
// const calloutProperties = defineProperties({
//   properties: {
//     borderColor,
//     backgroundColor,
//   },
// });
// const iconProperties = defineProperties({
//   properties: {
//     color: iconColor,
//   },
// });
// export const sprinkles = createSprinkles(calloutProperties, iconProperties);

// styles
export const callout = style({
  display: "flex",
  gap: "10px",
  alignItems: "flex-start",
  padding: "14px 18px",

  border: "1px solid",
  borderRadius: "10px",
});

export const text = style({
  textAlign: "left",
  ...theme.fontsObject.BODY_3_14_M,
  color: theme.colors.gray30,
});

export const icon = style({
  width: 20,
});

export const iconVariant = styleVariants({
  danger: [
    icon,
    {
      color: theme.colors.red500,
    },
  ],
  information: [
    icon,
    {
      color: theme.colors.blue500,
    },
  ],
  warning: [
    icon,
    {
      color: theme.colors.yellow500,
    },
  ],
});

export const calloutVariant = styleVariants({
  danger: [
    callout,
    {
      backgroundColor: theme.colors.redAlpha100,
      borderColor: theme.colors.red600,
    },
  ],
  information: [
    callout,
    {
      backgroundColor: theme.colors.blueAlpha100,
      borderColor: theme.colors.blueAlpha600,
    },
  ],
  warning: [
    callout,
    {
      backgroundColor: "rgba(255, 194, 52, 0.1)",
      borderColor: theme.colors.yellow600,
    },
  ],
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 18,
});
export const button = style({
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
export const buttonVariant = styleVariants({
  danger: [
    button,
    {
      backgroundColor: theme.colors.red800,
    },
  ],
  information: [
    button,
    {
      backgroundColor: theme.colors.blue800,
    },
  ],
  warning: [
    button,
    {
      backgroundColor: theme.colors.yellow800,
    },
  ],
});

export const buttonIcon = style({
  width: 16,
  color: theme.colors.white,
});
