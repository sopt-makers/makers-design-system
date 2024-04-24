import { fontsObject } from '@sopt-makers/fonts';
import { ChangeEvent, useState } from 'react';
import { TextField } from '@sopt-makers/ui';

export default {
  title: 'fonts/Fonts'
}

type FontName = keyof typeof fontsObject;

const useInput = (defaultValue: string) => {
  const [input, setInput] = useState(defaultValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return [input, handleInputChange] as const;
}

export const Default = () => {
  const [text, handleTextChange] = useInput('SOPT에 없던 새로운 가치를 프로덕트를 통해 만들어 갑니다.');

  const getFontColor = (fontType: string) => {
    switch (fontType) {
      case 'HEADING':
        return '#FFC234';
      case 'TITLE':
        return '#16BF81';
      case 'BODY':
        return '#F77234';
      case 'LABEL':
        return '#346FFA';
    }
  }

  return <div className="fonts-wrap">
    <p style={{ fontSize: '20px' }}>* 공통 스타일 - fontFamily : SUIT / fontStyle : normal *</p>
    <TextField<string> value={text} onChange={handleTextChange} placeholder="예시 문장을 입력해주세요" />

    {Object.keys(fontsObject).map((fontName) => {
      const fontObject = fontsObject[fontName as FontName];

      return <div key={fontName} className="fonts-group">
        <p style={{ color: getFontColor(fontName.split('_')[0]) }}>{fontName}</p>
        <div>
          <p><span>fontWeight : </span>{fontObject.fontWeight}</p>
          <p><span>fontSize : </span>{fontObject.fontSize}</p>
          <p><span>lineHeight : </span>{fontObject.lineHeight}</p>
          <p><span>letterSpacing : </span>{fontObject.letterSpacing}</p>
        </div>
        <p style={fontObject}>{text}</p>
      </div>
    }
    )}
  </div>
}