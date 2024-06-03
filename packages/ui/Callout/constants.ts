import type { CSSProperties } from "react";
import theme from "../theme.css";
import type { CalloutType } from "./types";

export const iconColors: Record<CalloutType, string> = {
  danger: theme.colors.red500,
  information: theme.colors.blue500,
  warning: theme.colors.yellow500,
};

export const calloutColors: Record<CalloutType, CSSProperties> = {
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

export const buttonColors: Record<CalloutType, string> = {
  danger: theme.colors.red800,
  information: theme.colors.blue800,
  warning: theme.colors.yellow800,
};
