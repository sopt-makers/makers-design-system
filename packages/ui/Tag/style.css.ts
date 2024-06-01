import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { style } from "@vanilla-extract/css";
import {
  bgColors,
  borderRadiuses,
  fonts,
  paddings,
  textColors,
} from "./constants";

export const root = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const sprinkleProperties = defineProperties({
  properties: {
    backgroundColor: bgColors,
    color: textColors,
    borderRadius: borderRadiuses,
    padding: paddings,
    fontStyle: fonts,
  },
});

export const sprinkles = createSprinkles(sprinkleProperties);
