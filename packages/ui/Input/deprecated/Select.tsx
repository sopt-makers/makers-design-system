import { useState, useRef, useEffect, useCallback } from 'react';
import { IconChevronDown, IconUser } from '@sopt-makers/icons';
import * as S from '../style.css';

export interface Option<T> {
  label: string;
  value: T;
  description?: string;
  icon?: React.ReactNode;
  profileUrl?: string;
}

interface SelectProps<T> {
  className?: string;
  placeholder?: string;
  type: 'text' | 'textDesc' | 'textIcon' | 'userList' | 'userListDesc';
  options: Option<T>[];
  visibleOptions?: number;
  defaultValue?: Option<T>;
  onChange: (value: T) => void;
}

/**
 * Select 컴포넌트는 더 이상 권장되지 않지만 계속 사용할 수 있습니다.
 * 새로운 `SelectV2` 컴포넌트 사용을 권장합니다.
 */
function Select<T extends string | number | boolean>(props: SelectProps<T>) {
  const { className, placeholder, type, options, visibleOptions = 5, defaultValue, onChange } = props;

  const optionsRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [selected, setSelected] = useState<Option<T> | null>(defaultValue ?? null);
  const [open, setOpen] = useState(false);

  const handleToggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleToggleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const calcMaxHeight = useCallback(() => {
    const getOptionHeight = () => {
      switch (type) {
        case 'text':
        case 'textIcon':
          return 42;
        case 'textDesc':
        case 'userListDesc':
          return 62;
        case 'userList':
          return 48;
      }
    };
    const gapHeight = 6;
    const paddingHeight = 8;

    return getOptionHeight() * visibleOptions + gapHeight * (visibleOptions - 1) + paddingHeight * 2;
  }, [visibleOptions, type]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        handleToggleClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleToggleClose]);

  const handleOptionClick = (value: Option<T>) => {
    setSelected(value);
    onChange(value.value); // value 자체가 아닌 value.value를 onChange에 전달
    handleToggleClose();
  };

  const selectedLabel = selected ? options.find((option) => option.value === selected.value)?.label : placeholder;

  return (
    <div className={`${S.selectWrap} ${className}`}>
      <button className={S.select} onClick={handleToggleOpen} ref={buttonRef} type='button'>
        <p className={!selected ? S.selectPlaceholder : ''}>{selectedLabel}</p>
        <IconChevronDown
          style={{
            width: 20,
            height: 20,
            transform: open ? 'rotate(-180deg)' : '',
            transition: 'all 0.5s',
          }}
        />
      </button>

      {open ? (
        <ul className={S.optionList} ref={optionsRef} style={{ maxHeight: calcMaxHeight() }}>
          {options.map((option) => (
            <li key={option.label}>
              <button
                className={S.option}
                onClick={() => {
                  handleOptionClick(option); // Option<T> 타입으로 전달
                }}
                type='button'
              >
                {type === 'textIcon' && option.icon}
                {(type === 'userList' || type === 'userListDesc') &&
                  (option.profileUrl ? (
                    <img alt={option.label} className={S.optionProfileImg} src={option.profileUrl} />
                  ) : (
                    <div className={S.optionProfileEmpty}>
                      <IconUser />
                    </div>
                  ))}

                <div>
                  <p>{option.label}</p>
                  {(type === 'textDesc' || type === 'userListDesc') && (
                    <p className={S.optionDesc}>{option.description}</p>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Select;
