import { style, styleVariants } from '@vanilla-extract/css';
import theme from '../theme.css';
import { calloutColors, iconColors } from './constants';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 18,
});

export const text = style({
  textAlign: 'left',
  ...theme.fontsObject.BODY_3_14_M,
  color: theme.colors.gray30,
});

export const button = style({
  'display': 'flex',
  'alignItems': 'center',

  'paddingBottom': 4,

  'borderWidth': '0px 0px 0.8px 0px',
  'borderStyle': 'solid',
  'borderColor': 'transparent',
  'backgroundColor': 'transparent',

  'cursor': 'pointer',
  'color': theme.colors.gray30,
  ...theme.fontsObject.LABEL_4_12_SB,

  ':hover': {
    color: theme.colors.gray50,
    borderColor: theme.colors.gray50,
  },
  ':active': {
    color: theme.colors.gray100,
    borderColor: theme.colors.gray100,
  },
  ':disabled': {
    color: theme.colors.gray500,
    borderColor: 'transparent',
    cursor: 'default',
  },
});

export const buttonIcon = style({
  width: 16,
  color: theme.colors.gray30,
  selectors: {
    [`${button}:hover &`]: {
      color: theme.colors.gray50,
    },
    [`${button}:active &`]: {
      color: theme.colors.gray100,
    },
    [`${button}:disabled &`]: {
      color: theme.colors.gray500,
    },
  },
});

// ▶️ icon styleVariants
const iconBase = style({
  flexShrink: 0,
  width: 20,
});

export const iconVariant = styleVariants(iconColors, (color) => [iconBase, { color }]);

// ▶️ callout styleVariants
const calloutBase = style({
  display: 'flex',
  gap: 10,
  alignItems: 'flex-start',
  padding: '14px 18px',

  minWidth: 358,
  minHeight: 50,
  border: '1px solid',
  borderRadius: 10,
});

export const calloutVariant = styleVariants(calloutColors, ({ backgroundColor, borderColor }) => [
  calloutBase,
  { backgroundColor, borderColor },
]);
