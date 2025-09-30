import type { ReactNode } from 'react';
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
    <div className={`${S.tab} ${tabVariant} ${className}`} role='tablist'>
      {tabItems.map((item) => {
        const isSelected = selected === item;
        return (
          <div className={S.tabItemWrap} key={item}>
            <button
              aria-selected={isSelected}
              className={`${S.tabItem} ${tabItemVariant} ${isSelected ? 'selected' : ''} ${S.fontStyles[size]}`}
              onClick={() => {
                handleClickTabItem(item);
              }}
              role='tab'
              tabIndex={isSelected ? 0 : -1}
              type='button'
            >
              {translator ? translator[item] : item}
            </button>
            <div className={`${S.tabItemUnderline} ${isSelected ? 'selected' : ''}`} />
          </div>
        );
      })}
    </div>
  );
}

export default Tab;

Tab.displayName = 'Tab';
