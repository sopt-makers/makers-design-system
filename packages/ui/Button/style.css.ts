import { style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import theme from '../theme.css';
import { bgColors, borderRadiuses, borders, fontSizes, paddings, textColors } from './constants';

export const root = style({
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'gap': '4px',
  'border': 'none',
  'cursor': 'pointer',
  'fontWeight': 600,
  'minWidth': 'max-content',
  ':disabled': {
    cursor: 'not-allowed',
  },
});

const sprinkleProperties = defineProperties({
  properties: {
    backgroundColor: {
      ...bgColors,
      'fill-disabled': theme.colors.gray800,
      'outlined-disabled': 'transparent',
    },
    color: { ...textColors, 'fill-disabled': theme.colors.gray500, 'outlined-disabled': theme.colors.gray500 },
    borderRadius: { ...borderRadiuses, max: '9999px' },
    boxShadow: {
      ...borders,
      'fill-disabled': 'none',
      'outlined-disabled': `inset 0 0 0 1px ${theme.colors.gray500}`,
    },
    padding: paddings,
    fontSize: fontSizes,
  },
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
    disabled: { selector: '&:disabled' },
  },
  defaultCondition: 'default',
});

export const sprinkles = createSprinkles(sprinkleProperties);
