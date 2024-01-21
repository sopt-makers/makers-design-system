interface Font {
  fontFamily?: string;
  fontStyle?: string;
  fontWeight: number | string;
  fontSize: number | string;
  lineHeight: number | string;
  letterSpacing: number | string;
}

function fontStr({ fontWeight, fontSize, lineHeight, letterSpacing }: Font) {
  return `
    font-family: 'SUIT', sans-serif;
    font-style: normal;
    font-weight : ${fontWeight};
    font-size : ${fontSize};
    line-height : ${lineHeight};
    letter-spacing: ${letterSpacing};
    `;
}

function fontObj({ fontWeight, fontSize, lineHeight, letterSpacing }: Font) {
  return {
    fontFamily: "'SUIT', sans-serif",
    fontStyle: 'normal',
    fontWeight: `${fontWeight}`,
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    letterSpacing: `${letterSpacing}%`,
  };
}

export const fontsObject = {
  HEADING_48_B: fontObj({ fontWeight: 700, fontSize: 48, lineHeight: 72, letterSpacing: -2 }),
  HEADING_32_B: fontObj({ fontWeight: 700, fontSize: 32, lineHeight: 48, letterSpacing: -2 }),
  HEADING_28_B: fontObj({ fontWeight: 700, fontSize: 28, lineHeight: 42, letterSpacing: -2 }),
  HEADING_24_B: fontObj({ fontWeight: 700, fontSize: 24, lineHeight: 36, letterSpacing: -2 }),
  HEADING_20_B: fontObj({ fontWeight: 700, fontSize: 20, lineHeight: 30, letterSpacing: -2 }),
  HEADING_18_B: fontObj({ fontWeight: 700, fontSize: 18, lineHeight: 28, letterSpacing: -2 }),
  HEADING_16_B: fontObj({ fontWeight: 700, fontSize: 16, lineHeight: 24, letterSpacing: -2 }),
  TITLE_32_SB: fontObj({ fontWeight: 600, fontSize: 32, lineHeight: 48, letterSpacing: -2 }),
  TITLE_28_SB: fontObj({ fontWeight: 600, fontSize: 28, lineHeight: 42, letterSpacing: -2 }),
  TITLE_24_SB: fontObj({ fontWeight: 600, fontSize: 24, lineHeight: 36, letterSpacing: -2 }),
  TITLE_20_SB: fontObj({ fontWeight: 600, fontSize: 20, lineHeight: 30, letterSpacing: -2 }),
  TITLE_18_SB: fontObj({ fontWeight: 600, fontSize: 18, lineHeight: 28, letterSpacing: -2 }),
  TITLE_16_SB: fontObj({ fontWeight: 600, fontSize: 16, lineHeight: 24, letterSpacing: -1.5 }),
  TITLE_14_SB: fontObj({ fontWeight: 600, fontSize: 14, lineHeight: 20, letterSpacing: -1.5 }),
  BODY_18_M: fontObj({ fontWeight: 500, fontSize: 18, lineHeight: 30, letterSpacing: -1.5 }),
  BODY_16_M: fontObj({ fontWeight: 500, fontSize: 16, lineHeight: 26, letterSpacing: -1.5 }),
  BODY_16_R: fontObj({ fontWeight: 400, fontSize: 16, lineHeight: 26, letterSpacing: -1.5 }),
  BODY_14_M: fontObj({ fontWeight: 500, fontSize: 14, lineHeight: 22, letterSpacing: -1.5 }),
  BODY_14_R: fontObj({ fontWeight: 400, fontSize: 14, lineHeight: 22, letterSpacing: -1.5 }),
  BODY_14_L: fontObj({ fontWeight: 300, fontSize: 14, lineHeight: 22, letterSpacing: -1.5 }),
  BODY_13_M: fontObj({ fontWeight: 500, fontSize: 13, lineHeight: 20, letterSpacing: -1.5 }),
  BODY_13_R: fontObj({ fontWeight: 400, fontSize: 13, lineHeight: 20, letterSpacing: -1.5 }),
  BODY_13_L: fontObj({ fontWeight: 300, fontSize: 13, lineHeight: 20, letterSpacing: -1.5 }),
  LABEL_18_SB: fontObj({ fontWeight: 600, fontSize: 19, lineHeight: 24, letterSpacing: -2 }),
  LABEL_16_SB: fontObj({ fontWeight: 600, fontSize: 16, lineHeight: 22, letterSpacing: -2 }),
  LABEL_14_SB: fontObj({ fontWeight: 600, fontSize: 14, lineHeight: 18, letterSpacing: -2 }),
  LABEL_12_SB: fontObj({ fontWeight: 600, fontSize: 12, lineHeight: 16, letterSpacing: -2 }),
  LABEL_11_SB: fontObj({ fontWeight: 600, fontSize: 11, lineHeight: 14, letterSpacing: -2 }),
} satisfies Record<string, Font>;

export const fontsString = Object.fromEntries(
  Object.entries(fontsObject).map(([key, value]) => [key, fontStr(value)])
) as Record<keyof typeof fontsObject, string>;
