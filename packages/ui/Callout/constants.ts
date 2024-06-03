import theme from "../theme.css";
import type { CalloutType } from "./types";

export const borderColor: Record<CalloutType, string> = {
  danger: theme.colors.red600,
  information: theme.colors.blueAlpha600,
  warning: theme.colors.yellow600,
};

export const backgroundColor: Record<CalloutType, string> = {
  danger: theme.colors.redAlpha100,
  information: theme.colors.blueAlpha100,
  warning: "rgba(255,194,52,0.1)",
};

export const iconColor: Record<CalloutType, string> = {
  danger: theme.colors.red500,
  information: theme.colors.blue500,
  warning: theme.colors.yellow500,
};
