import { keyframes, style } from "@vanilla-extract/css";
import theme from "../../theme.css";

const toastAnimation = keyframes({
  "0%, 100%": { transform: "translate(-50%, calc(-100% - var(--mds-toast-top, 36px)))" },
  "10%, 90%": { transform: "translate(-50%, 0)" },
});

export const root = style({
  animation: `${toastAnimation} 4s`,
  animationFillMode: "forwards",

  display: "flex",
  alignItems: "center",
  gap: "8px",

  position: "fixed",
  top: "var(--mds-toast-top, 36px)",
  left: "50%",
  transform: "translateX(-50%)",
  transition: "transform .2s linear",

  width: "var(--mds-toast-width, 380px)",
  padding: "14px 16px",
  borderRadius: "18px",
  backgroundColor: theme.colors.gray10,

  zIndex: 9999,
});

export const icon = style({
  width: "20px",
  height: "20px",
});

export const content = style({
  flex: 1,
  margin: 0,
  color: theme.colors.gray900,

  // LABEL_14_SB
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "18px",
  letterSpacing: "-2%",

  display: "-webkit-box",
  maxHeight: "36px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  wordBreak: "break-all",
});

export const action = style({
  color: theme.colors.success,
  background: "none",
  border: "none",
  cursor: "pointer",

  // LABEL_14_SB
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "18px",
  letterSpacing: "-2%",
});
