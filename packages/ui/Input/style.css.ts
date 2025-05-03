import { globalStyle, style, keyframes, styleVariants } from '@vanilla-extract/css';
import theme from '../theme.css';

const fadeInDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(0)' },
  '100%': { opacity: 1, transform: 'translateY(10px)' },
});
const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(0)' },
  '100%': { opacity: 1, transform: 'translateY(-10px)' },
});

export const optionListAnimation = styleVariants({
  up: { animationName: fadeInUp },
  down: { animationName: fadeInDown },
});

export const label = style({
  ...theme.fontsObject.LABEL_3_14_SB,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  color: theme.colors.white,
});

export const inputWrapper = style({
  'display': 'flex',
  'alignItems': 'center',
  'background': theme.colors.gray800,
  'border': '1px solid transparent',
  'borderRadius': '10px',
  'width': '100%',
  'height': '48px',
  'padding': '10px 16px',
  'color': theme.colors.white,
  'boxSizing': 'border-box',

  ':focus-within': {
    border: `1px solid ${theme.colors.gray200}`,
  },
});

export const input = style({
  ...theme.fontsObject.BODY_2_16_M,
  'flex': 1,
  'border': 0,
  'background': 'transparent',
  'color': theme.colors.white,
  'boxSizing': 'border-box',

  '::placeholder': {
    color: theme.colors.gray300,
  },
  ':focus': {
    outline: 'none',
  },
  ':disabled': {
    color: theme.colors.gray500,
  },
  ':read-only': {
    cursor: 'default',
  },
});

export const textareaWrap = style({
  height: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid transparent',
  borderRadius: '10px',
  padding: '10px 0',
  background: theme.colors.gray800,
});

export const textarea = style({
  'resize': 'none',
  'display': 'block',
  'padding': '0 8px 0 16px',
  'marginRight': '8px',
  'flex': 1,
  'border': 0,
  ':focus': {
    border: 0,
    outline: 'none',
  },

  '::-webkit-scrollbar': {
    width: '4px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.colors.gray500,
    borderRadius: '4px',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
});

export const focus = style({
  boxShadow: `0 0 0 1px ${theme.colors.gray200}`,
  outline: 'none',
});

export const searchField = style({
  paddingRight: '48px',
});

export const inputWrap = style({
  textAlign: 'left',
});

export const inputError = style({
  border: `1px solid ${theme.colors.error}`,
});

export const inputBottom = style({
  marginTop: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const required = style({
  color: theme.colors.secondary,
  marginLeft: '4px',
});

export const description = style({
  ...theme.fontsObject.LABEL_4_12_SB,
  color: theme.colors.gray300,
  marginBottom: '8px',
});

export const errorMessage = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
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
  'background': 'none',
  'border': 'none',
  'width': '48px',
  'height': '48px',
  'position': 'absolute',
  'right': 0,
  ':hover': {
    cursor: 'pointer',
  },
  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const textareaSubmitButton = style({
  'background': 'none',
  'border': 'none',
  'width': '34px',
  'height': '100%',
  'textAlign': 'left',
  ':hover': {
    cursor: 'pointer',
  },
  ':disabled': {
    cursor: 'not-allowed',
  },
});

export const selectWrap = style({
  position: 'relative',
  display: 'inline-block',
});

export const select = style({
  ...theme.fontsObject.BODY_2_16_M,
  color: theme.colors.white,
  minWidth: '130px',
  width: '100%',
  height: '48px',
  borderRadius: '10px',
  background: theme.colors.gray800,
  padding: '11px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
  cursor: 'pointer',
});

export const selectPlaceholder = style({
  color: theme.colors.gray300,
});

export const optionList = style({
  'position': 'absolute',
  'display': 'flex',
  'flexDirection': 'column',
  'width': 'max-content',
  'gap': '6px',
  'padding': '8px',
  'borderRadius': '13px',
  'minWidth': '160px',
  'background': theme.colors.gray800,
  'overflowY': 'auto',
  'transformOrigin': 'top',
  'animationDuration': '0.5s',
  'animationFillMode': 'forwards',
  'overflowX': 'hidden',
  'zIndex': 24,

  '::-webkit-scrollbar': {
    width: '14px',
  },
  '::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    background: theme.colors.gray500,
    backgroundClip: 'padding-box',
    border: '2px solid transparent',
    borderTopWidth: '3px',
    borderBottomWidth: '3px',
    boxShadow: `inset -3px 0 0 ${theme.colors.gray800}`,
    borderRadius: '16px',
  },
});

export const option = style({
  ...theme.fontsObject.BODY_2_16_M,
  'border': 'none',
  'background': 'none',
  'borderRadius': '8px',
  'color': theme.colors.gray10,
  'padding': '8px 12px',
  'width': '100%',
  'textAlign': 'left',
  'cursor': 'pointer',
  'display': 'flex',
  'alignItems': 'center',
  'gap': '10px',

  ':hover': {
    background: theme.colors.gray700,
  },
  ':active': {
    background: theme.colors.gray600,
  },
});

export const optionDesc = style({
  ...theme.fontsObject.BODY_4_13_R,
  color: theme.colors.gray100,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

export const optionProfileImg = style({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
});

export const optionProfileEmpty = style({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: theme.colors.gray700,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const userMention = style({
  background: theme.colors.gray900,
  border: `1px solid ${theme.colors.gray700}`,
});

export const userMentionItem = style({
  ':hover': {
    background: theme.colors.gray800,
  },
  ':active': {
    background: theme.colors.gray700,
  },
});

globalStyle(`${inputWrap} > ${description}`, {
  marginTop: 0,
});

globalStyle(`${label} > span`, {
  marginBottom: '8px',
});

globalStyle(`${option} > svg`, {
  width: '16px',
  height: '16px',
});

globalStyle(`${optionProfileEmpty} > svg`, {
  width: '20px',
  height: '20px',
});

globalStyle(`${textareaWrap} > *`, {
  flexShrink: 0,
});

export const buttonWithNoStyle = style({
  background: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
  cursor: 'pointer',
});

export const multipleLabelWrap = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '6px',
});

export const multipleLabelCount = style([
  theme.fontsObject.LABEL_5_11_SB,
  {
    color: theme.colors.success,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3px 8px',
    height: '20px',
    width: '23px',
    borderRadius: 100,
    backgroundColor: theme.colors.blueAlpha200,
  },
]);
