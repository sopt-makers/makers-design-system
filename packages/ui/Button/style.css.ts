import { style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import theme from '../theme.css';
import { bgColors, borderColors, borderRadiuses, borderWidths, fontSizes, paddings, textColors } from './constants';

export const root = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  borderStyle: 'solid',
  boxSizing: 'border-box',
  cursor: 'pointer',
  fontWeight: 600,
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
    borderWidth: { ...borderWidths },
    borderColor: {
      ...borderColors,
      'fill-disabled': 'transparent',
      'outlined-disabled': theme.colors.gray500,
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
