import { colors } from '@sopt-makers/colors';

export default {
  title: 'colors/Colors',
};

export const Default = {
  render: () => {
    const grayScales = [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 30, 10];
    const scales = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];
    const alphaScales = [900, 800, 700, 600, 500, 400, 300, 200, 100];

    const renderColorChips = (scalesArr: number[], name: string) =>
      scalesArr.map((item) => {
        const key = `${name}${item}` as keyof typeof colors;
        return <a key={key} data-title={`${key}\n${colors[key]}`} style={{ background: colors[key] }}></a>;
      });

    return (
      <div className='colors-wrap'>
        <p style={{ fontSize: '20px' }}>* 마우스 오버시 이름과 코드가 뜹니다 *</p>

        <h4>Main Color</h4>
        <div className='colors-group'>
          <p>black</p>
          <div className='color-chips'>
            <a data-title={`black\n${colors.black}`} style={{ background: colors.black }}></a>
          </div>
        </div>
        <div className='colors-group'>
          <p>white</p>
          <div className='color-chips'>
            <a data-title={`white\n${colors.white}`} style={{ background: colors.white }}></a>
          </div>
        </div>

        <h4>Gray Scale</h4>
        <div className='colors-group'>
          <p>grayscale</p>
          <div className='color-chips'>{renderColorChips(grayScales, 'gray')}</div>
        </div>

        <h4>Scale Color</h4>
        <div className='colors-group'>
          <p>blue</p>
          <div className='color-chips'>{renderColorChips(scales, 'blue')}</div>
        </div>
        <div className='colors-group'>
          <p>red</p>
          <div className='color-chips'>{renderColorChips(scales, 'red')}</div>
        </div>
        <div className='colors-group'>
          <p>green</p>
          <div className='color-chips'>{renderColorChips(scales, 'green')}</div>
        </div>
        <div className='colors-group'>
          <p>yellow</p>
          <div className='color-chips'>{renderColorChips(scales, 'yellow')}</div>
        </div>

        <h4>Sub Color</h4>
        <div className='colors-group'>
          <p>orange</p>
          <div className='color-chips'>{renderColorChips(scales, 'orange')}</div>
        </div>

        <h4>Alpha Color</h4>
        <div className='colors-group'>
          <p>red</p>
          <div className='color-chips'>{renderColorChips(alphaScales, 'red')}</div>
        </div>
        <div className='colors-group'>
          <p>orange</p>
          <div className='color-chips'>{renderColorChips(alphaScales, 'orange')}</div>
        </div>
        <div className='colors-group'>
          <p>blue</p>
          <div className='color-chips'>{renderColorChips(alphaScales, 'blue')}</div>
        </div>
        <div className='colors-group'>
          <p>gray</p>
          <div className='color-chips'>{renderColorChips(alphaScales, 'gray')}</div>
        </div>

        <h4>Semantic Color</h4>
        <div className='colors-group'>
          <p>background</p>
          <div className='color-chips'>
            <a data-title={`background\n${colors.background}`} style={{ background: colors.background }}></a>
          </div>
        </div>
        <div className='colors-group'>
          <p>background-dimmed</p>
          <div className='color-chips'>
            <a
              data-title={`background-dimmed\n${colors.backgroundDimmed}`}
              style={{ background: colors.backgroundDimmed }}
            ></a>
          </div>
        </div>
        <div className='colors-group'>
          <p>secondary</p>
          <div className='color-chips'>
            <a data-title={`secondary\n${colors.secondary}`} style={{ background: colors.secondary }}></a>
          </div>
        </div>
        <div className='colors-group'>
          <p>success</p>
          <div className='color-chips'>
            <a data-title={`success\n${colors.success}`} style={{ background: colors.success }}></a>
          </div>
        </div>
        <div className='colors-group'>
          <p>error</p>
          <div className='color-chips'>
            <a data-title={`error\n${colors.error}`} style={{ background: colors.error }}></a>
          </div>
        </div>
        <div className='colors-group'>
          <p>information</p>
          <div className='color-chips'>
            <a data-title={`information\n${colors.information}`} style={{ background: colors.information }}></a>
          </div>
        </div>
        <div className='colors-group'>
          <p>attention</p>
          <div className='color-chips'>
            <a data-title={`attention\n${colors.attention}`} style={{ background: colors.attention }}></a>
          </div>
        </div>
      </div>
    );
  },
};
