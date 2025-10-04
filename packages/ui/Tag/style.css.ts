import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { style } from '@vanilla-extract/css';
import { bgColors, borderRadiuses, borders, fonts, paddings, textColors } from './constants';

export const root = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
  height: 'fit-content',
  gap: '4px',
});

const sprinkleProperties = defineProperties({
  properties: {
    backgroundColor: bgColors,
    boxShadow: borders,
    color: textColors,
    borderRadius: borderRadiuses,
    padding: paddings,
    fontStyle: fonts,
  },
});

export const sprinkles = createSprinkles(sprinkleProperties);
