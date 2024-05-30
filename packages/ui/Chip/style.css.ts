import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { style } from '@vanilla-extract/css';
import theme from '../theme.css';
import { fontSizes, lineHeights, paddings } from './constants';

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
  fontWeight: 600,
  letterSpacing: -2,

  ':hover': {
    color: theme.colors.white,
    backgroundColor: theme.colors.gray700,
  },

  ':active': activeStyle,
});

export const checkedStyle = style(activeStyle);

const sprinkleProperties = defineProperties({
  properties: {
    padding: paddings,
    fontSize: fontSizes,
    lineHeight: lineHeights,
  },
});

export const sprinkles = createSprinkles(sprinkleProperties);
