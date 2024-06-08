import { useState, useRef, useEffect, useCallback } from 'react';
import { IconChevronDown } from '@sopt-makers/icons';
import * as S from './style.css';

interface Option<T> {
  label: string;
  value: T;
  description?: string;
  icon?: React.ReactNode | string;
}

interface SelectProps<T> {
  className?: string;
  placeholder?: string;
  type: 'Default' | 'Text' | 'UserList';
  options: Option<T>[];
  visibleOptions?: number;
  defaultValue?: T;
  onChange: (value: T) => void;
}

function Select<T extends string | number | boolean>(props: SelectProps<T>) {
  const { className, placeholder, type, options, visibleOptions = 5, defaultValue, onChange } = props;

  const optionsRef = useRef<HTMLUListElement>(null);

  const [selected, setSelected] = useState<T | undefined>(defaultValue);
  const [open, setOpen] = useState(false);

  const handleToggleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const calcMaxHeight = useCallback(() => {
    const optionHeight = 42;
    const gapHeight = 6;
    const paddingHeight = 8;
    return optionHeight * visibleOptions + gapHeight * (visibleOptions - 1) + paddingHeight * 2;
  }, [visibleOptions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => { document.removeEventListener('mousedown', handleClickOutside); };
  }, []);

  const handleOptionClick = (value: T) => {
    setSelected(value);
    onChange(value);
    setOpen(false);
  }

  return <div className={`${S.selectWrap} ${className}`}>
    <button className={S.select} onClick={handleToggleOpen} type="button">
      <p className={!selected ? S.selectPlaceholder : ''}>{selected ?? placeholder}</p>
      <IconChevronDown style={{ width: 20, height: 20, transform: open ? 'rotate(-180deg)' : '', transition: 'all 0.5s' }} />
    </button>
    {open ? <ul className={S.optionList} ref={optionsRef} style={{ maxHeight: calcMaxHeight() }}>
      {options.map(option =>
        <li key={option.label}>
          <button className={S.option} onClick={() => { handleOptionClick(option.value); }} type="button">
            {option.label}
          </button>
        </li>
      )}
    </ul> : null}
  </div>
}

export default Select;