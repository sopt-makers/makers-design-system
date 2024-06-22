import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import theme from "../theme.css";
import { itemWidths, flexGaps } from "./constants";

export const tab = style({
  display: "flex",
  width: "100%",
  overflowX: "scroll",

  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const tabItemWrap = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const tabItem = style({
  color: theme.colors.gray600,
  background: "none",
  border: "none",
  cursor: "pointer",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",

  ":hover": {
    color: theme.colors.gray300,
  },
});
globalStyle(`${tabItem}.selected`, {
  color: theme.colors.white,
  transition: "color 0.5s",
});

export const tabItemUnderline = style({
  width: "1%",
  height: "2px",
  marginTop: "4px",
  background: "none",
});
globalStyle(`${tabItemUnderline}.selected`, {
  width: "100%",
  background: theme.colors.white,
  transition: "all 0.5s",
});

export const fontStyles = styleVariants({
  sm: theme.fontsObject.HEADING_7_16_B,
  md: theme.fontsObject.HEADING_5_20_B,
  lg: theme.fontsObject.HEADING_4_24_B,
});

const tabSprinkleProperties = defineProperties({
  properties: {
    gap: flexGaps,
  },
});
const tabItemSprinkleProperties = defineProperties({
  properties: {
    width: itemWidths,
  },
});

export const tabSprinkles = createSprinkles(tabSprinkleProperties);
export const tabItemSprinkles = createSprinkles(tabItemSprinkleProperties);
