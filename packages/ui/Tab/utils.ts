import { tabItemSprinkles, tabSprinkles } from "./style.css";
import type { TabStyle } from "./Tab";

export const createTabVariant = (style: TabStyle) =>
  tabSprinkles({
    gap: style,
  });

export const createTabItemVariant = (style: TabStyle) =>
  tabItemSprinkles({
    width: style,
  });
