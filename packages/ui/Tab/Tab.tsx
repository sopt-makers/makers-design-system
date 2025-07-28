import type { ReactNode} from 'react';
import { useState } from 'react';
import * as S from './style.css';
import { createTabItemVariant, createTabVariant } from './utils';

export type TabStyle = 'primary' | 'secondary';
export type TabSize = 'sm' | 'md' | 'lg';

interface TabProps<T extends string> {
  style: TabStyle;
  size: TabSize;
  tabItems: T[];
  selectedInitial?: T;
  translator?: Record<T, ReactNode>;
  className?: string;
  onChange: (selected: T) => void;
}

function Tab<T extends string>(props: TabProps<T>) {
  const { style, size, tabItems, selectedInitial, translator, className, onChange } = props;

  const tabVariant = createTabVariant(style);
  const tabItemVariant = createTabItemVariant(style);

  const [selected, setSelected] = useState<T>(selectedInitial ?? tabItems[0]);

  const handleClickTabItem = (item: T) => {
    setSelected(item);
    onChange(item);
  };

  return (
    <div className={`${S.tab} ${tabVariant} ${className}`}>
      {tabItems.map((item) => {
        const isSelected = selected === item ? 'selected' : '';
        return (
          <div className={S.tabItemWrap} key={item}>
            <button
              className={`${S.tabItem} ${tabItemVariant} ${isSelected} ${S.fontStyles[size]}`}
              onClick={() => {
                handleClickTabItem(item);
              }}
              type='button'
            >
              {translator ? translator[item] : item}
            </button>
            <div className={`${S.tabItemUnderline} ${isSelected}`} />
          </div>
        );
      })}
    </div>
  );
}

export default Tab;
