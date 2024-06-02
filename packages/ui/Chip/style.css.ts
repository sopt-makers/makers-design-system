import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { style } from '@vanilla-extract/css';
import theme from '../theme.css';
import { fonts, paddings } from './constants';

export const activeStyle = {
  borderColor: theme.colors.gray100,
  color: theme.colors.white,
  backgroundColor: theme.colors.gray700,
};

export const root = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  border: '1px solid',
  borderColor: theme.colors.gray700,
  borderRadius: '9999px',
  color: theme.colors.gray300,
  backgroundColor: theme.colors.gray800,
  cursor: 'pointer',

  ':hover': {
    color: theme.colors.white,
    backgroundColor: theme.colors.gray700,
  },

  ':active': activeStyle,
});

export const selectedStyle = style(activeStyle);

const sprinkleProperties = defineProperties({
  properties: {
    padding: paddings,
    fontStyle: fonts,
  },
});

export const sprinkles = createSprinkles(sprinkleProperties);
