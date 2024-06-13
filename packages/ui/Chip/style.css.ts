import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { style } from '@vanilla-extract/css';
import theme from '../theme.css';
import { fonts, paddings } from './constants';

const active = {
  boxShadow: `0 0 0 1px ${theme.colors.gray100} inset`,
  color: theme.colors.white,
  backgroundColor: theme.colors.gray700,
};

export const root = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 4,
  boxShadow: `0 0 0 1px ${theme.colors.gray700} inset`,
  borderRadius: 9999,
  color: theme.colors.gray300,
  backgroundColor: theme.colors.gray800,
  cursor: 'pointer',
  borderStyle: 'none',

  ':hover': {
    color: theme.colors.white,
    backgroundColor: theme.colors.gray700,
  },

  ':active': active,
});

export const activeStyle = style(active);

const sprinkleProperties = defineProperties({
  properties: {
    padding: paddings,
    fontStyle: fonts,
  },
});

export const sprinkles = createSprinkles(sprinkleProperties);
