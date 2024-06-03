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
