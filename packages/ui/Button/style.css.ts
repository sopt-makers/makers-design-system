import { style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import theme from '../theme.css';
import {
  bgColors,
  borderRadiuses,
  fontSizes,
  paddings,
  textColors,
} from './constants';

export const root = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 600,
});

const sprinkleProperties = defineProperties({
  properties: {
    backgroundColor: {
      ...bgColors,
      disabled: theme.colors.gray800,
    },
    color: { ...textColors, disabled: theme.colors.gray500 },
    borderRadius: { ...borderRadiuses, max: '9999px' },
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
