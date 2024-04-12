import { style } from "@vanilla-extract/css";
import theme from "../theme.css";

export const label = style({
  ...theme.fontsObject.LABEL_3_14_SB,
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  color: theme.colors.white,
});

export const input = style({
  ...theme.fontsObject.BODY_2_16_M,
  marginTop: "8px",
  background: theme.colors.gray800,
  border: "1px solid transparent",
  borderRadius: "10px",
  width: "100%",
  height: "48px",
  padding: "11px 16px",
  color: theme.colors.white,
  boxSizing: "border-box",

  "::placeholder": {
    color: theme.colors.gray300,
  },
  ":focus": {
    border: `1px solid ${theme.colors.gray200}`,
    outline: "none",
  },
  ":disabled": {
    color: theme.colors.gray500,
  },
  ":read-only": {
    cursor: "default",
  },
});

export const textarea = style({
  overflow: "hidden",
  resize: "none",
  paddingRight: "48px",

  // "::-webkit-scrollbar": {
  //   width: "16px",
  // },
  // "::-webkit-scrollbar-thumb": {
  //   backgroundColor: theme.colors.gray500,
  //   backgroundClip: "padding-box",
  //   border: "4px solid transparent",
  //   borderRadius: "16px",
  // },
  // "::-webkit-scrollbar-track": {
  //   backgroundColor: "transparent",
  // },
});

export const searchField = style({
  marginTop: "0",
  paddingRight: "48px",
});

export const inputError = style({
  border: `1px solid ${theme.colors.error}`,
});

export const inputBottom = style({
  marginTop: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const required = style({
  color: theme.colors.secondary,
  marginLeft: "4px",
});

export const description = style({
  ...theme.fontsObject.LABEL_4_12_SB,
  color: theme.colors.gray300,
  marginTop: "8px",
});

export const errorMessage = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: theme.colors.error,
  ...theme.fontsObject.LABEL_4_12_SB,
});

export const count = style({
  ...theme.fontsObject.LABEL_4_12_SB,
  color: theme.colors.gray200,
});

export const maxCount = style({
  color: theme.colors.error,
});

export const submitButton = style({
  background: "none",
  border: "none",
  width: "48px",
  height: "48px",
  position: "absolute",
  right: 0,
  ":hover": {
    cursor: "pointer",
  },
  ":disabled": {
    cursor: "not-allowed",
  },
});
