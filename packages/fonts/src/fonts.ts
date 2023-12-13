interface Font {
  weight: number;
  size: number;
  lineHeight: number;
  letterSpacing: number;
}

function fontStr({ weight, size, lineHeight, letterSpacing }: Font): string {
  return `
    font-family: 'SUIT', sans-serif;
    font-style: normal;
    font-weight : ${weight};
    font-size : ${size}px;
    line-height : ${lineHeight}px;
    letter-spacing: ${letterSpacing}%;
    `;
}

function fontObj({ weight, size, lineHeight, letterSpacing }: Font): object {
  return {
    fontFamily: "'SUIT', sans-serif",
    fontStyle: 'normal',
    fontWeight: `${weight}`,
    fontSize: `${size}px`,
    lineHeight: `${lineHeight}px`,
    letterSpacing: `${letterSpacing}%`,
  };
}

export const fonts = {
  HEADING_48_B: fontStr({ weight: 700, size: 48, lineHeight: 72, letterSpacing: -2 }),
  HEADING_32_B: fontStr({ weight: 700, size: 32, lineHeight: 48, letterSpacing: -2 }),
  HEADING_28_B: fontStr({ weight: 700, size: 28, lineHeight: 42, letterSpacing: -2 }),
  HEADING_24_B: fontStr({ weight: 700, size: 24, lineHeight: 36, letterSpacing: -2 }),
  HEADING_20_B: fontStr({ weight: 700, size: 20, lineHeight: 30, letterSpacing: -2 }),
  HEADING_18_B: fontStr({ weight: 700, size: 18, lineHeight: 28, letterSpacing: -2 }),
  HEADING_16_B: fontStr({ weight: 700, size: 16, lineHeight: 24, letterSpacing: -2 }),
  TITLE_32_SB: fontStr({ weight: 600, size: 32, lineHeight: 48, letterSpacing: -2 }),
  TITLE_28_SB: fontStr({ weight: 600, size: 28, lineHeight: 42, letterSpacing: -2 }),
  TITLE_24_SB: fontStr({ weight: 600, size: 24, lineHeight: 36, letterSpacing: -2 }),
  TITLE_20_SB: fontStr({ weight: 600, size: 20, lineHeight: 30, letterSpacing: -2 }),
  TITLE_18_SB: fontStr({ weight: 600, size: 18, lineHeight: 28, letterSpacing: -2 }),
  TITLE_16_SB: fontStr({ weight: 600, size: 16, lineHeight: 24, letterSpacing: -1.5 }),
  TITLE_14_SB: fontStr({ weight: 600, size: 14, lineHeight: 20, letterSpacing: -1.5 }),
  BODY_18_M: fontStr({ weight: 500, size: 18, lineHeight: 30, letterSpacing: -1.5 }),
  BODY_16_M: fontStr({ weight: 500, size: 16, lineHeight: 26, letterSpacing: -1.5 }),
  BODY_16_R: fontStr({ weight: 400, size: 16, lineHeight: 26, letterSpacing: -1.5 }),
  BODY_14_M: fontStr({ weight: 500, size: 14, lineHeight: 22, letterSpacing: -1.5 }),
  BODY_14_R: fontStr({ weight: 400, size: 14, lineHeight: 22, letterSpacing: -1.5 }),
  BODY_14_L: fontStr({ weight: 300, size: 14, lineHeight: 22, letterSpacing: -1.5 }),
  BODY_13_M: fontStr({ weight: 500, size: 13, lineHeight: 20, letterSpacing: -1.5 }),
  BODY_13_R: fontStr({ weight: 400, size: 13, lineHeight: 20, letterSpacing: -1.5 }),
  BODY_13_L: fontStr({ weight: 300, size: 13, lineHeight: 20, letterSpacing: -1.5 }),
  LABEL_18_SB: fontStr({ weight: 600, size: 19, lineHeight: 24, letterSpacing: -2 }),
  LABEL_16_SB: fontStr({ weight: 600, size: 16, lineHeight: 22, letterSpacing: -2 }),
  LABEL_14_SB: fontStr({ weight: 600, size: 14, lineHeight: 18, letterSpacing: -2 }),
  LABEL_12_SB: fontStr({ weight: 600, size: 12, lineHeight: 16, letterSpacing: -2 }),
  LABEL_11_SB: fontStr({ weight: 600, size: 11, lineHeight: 14, letterSpacing: -2 }),
};

export const fontsObject = {
  HEADING_48_B: fontObj({ weight: 700, size: 48, lineHeight: 72, letterSpacing: -2 }),
  HEADING_32_B: fontObj({ weight: 700, size: 32, lineHeight: 48, letterSpacing: -2 }),
  HEADING_28_B: fontObj({ weight: 700, size: 28, lineHeight: 42, letterSpacing: -2 }),
  HEADING_24_B: fontObj({ weight: 700, size: 24, lineHeight: 36, letterSpacing: -2 }),
  HEADING_20_B: fontObj({ weight: 700, size: 20, lineHeight: 30, letterSpacing: -2 }),
  HEADING_18_B: fontObj({ weight: 700, size: 18, lineHeight: 28, letterSpacing: -2 }),
  HEADING_16_B: fontObj({ weight: 700, size: 16, lineHeight: 24, letterSpacing: -2 }),
  TITLE_32_SB: fontObj({ weight: 600, size: 32, lineHeight: 48, letterSpacing: -2 }),
  TITLE_28_SB: fontObj({ weight: 600, size: 28, lineHeight: 42, letterSpacing: -2 }),
  TITLE_24_SB: fontObj({ weight: 600, size: 24, lineHeight: 36, letterSpacing: -2 }),
  TITLE_20_SB: fontObj({ weight: 600, size: 20, lineHeight: 30, letterSpacing: -2 }),
  TITLE_18_SB: fontObj({ weight: 600, size: 18, lineHeight: 28, letterSpacing: -2 }),
  TITLE_16_SB: fontObj({ weight: 600, size: 16, lineHeight: 24, letterSpacing: -1.5 }),
  TITLE_14_SB: fontObj({ weight: 600, size: 14, lineHeight: 20, letterSpacing: -1.5 }),
  BODY_18_M: fontObj({ weight: 500, size: 18, lineHeight: 30, letterSpacing: -1.5 }),
  BODY_16_M: fontObj({ weight: 500, size: 16, lineHeight: 26, letterSpacing: -1.5 }),
  BODY_16_R: fontObj({ weight: 400, size: 16, lineHeight: 26, letterSpacing: -1.5 }),
  BODY_14_M: fontObj({ weight: 500, size: 14, lineHeight: 22, letterSpacing: -1.5 }),
  BODY_14_R: fontObj({ weight: 400, size: 14, lineHeight: 22, letterSpacing: -1.5 }),
  BODY_14_L: fontObj({ weight: 300, size: 14, lineHeight: 22, letterSpacing: -1.5 }),
  BODY_13_M: fontObj({ weight: 500, size: 13, lineHeight: 20, letterSpacing: -1.5 }),
  BODY_13_R: fontObj({ weight: 400, size: 13, lineHeight: 20, letterSpacing: -1.5 }),
  BODY_13_L: fontObj({ weight: 300, size: 13, lineHeight: 20, letterSpacing: -1.5 }),
  LABEL_18_SB: fontObj({ weight: 600, size: 19, lineHeight: 24, letterSpacing: -2 }),
  LABEL_16_SB: fontObj({ weight: 600, size: 16, lineHeight: 22, letterSpacing: -2 }),
  LABEL_14_SB: fontObj({ weight: 600, size: 14, lineHeight: 18, letterSpacing: -2 }),
  LABEL_12_SB: fontObj({ weight: 600, size: 12, lineHeight: 16, letterSpacing: -2 }),
  LABEL_11_SB: fontObj({ weight: 600, size: 11, lineHeight: 14, letterSpacing: -2 }),
};
