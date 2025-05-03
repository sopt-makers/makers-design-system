import type { ReactNode } from 'react';
import { useState, useRef, useEffect, useCallback, createContext, useContext } from 'react';
import { IconChevronDown, IconUser } from '@sopt-makers/icons';
import { createPortal } from 'react-dom';
import * as S from './style.css';
import { CheckBox } from '../Control';

export interface Option<T> {
  label: string;
  value: T;
  description?: string;
  icon?: React.ReactNode;
  profileUrl?: string;
}

interface SelectProps<T> {
  className?: string;
  type: 'text' | 'textDesc' | 'textIcon' | 'userList' | 'userListDesc';
  visibleOptions?: number;
  defaultValue?: Option<T>;
  onChange?: (value: T | T[]) => void;
  children: React.ReactNode;
  multiple?: boolean;
}

interface SelectContextProps<T> {
  open: boolean;
  setOpen: (open: boolean) => void;
  selected: Option<T> | Option<T>[] | null;
  handleOptionClick: (option: Option<T>) => void;
  type: SelectProps<T>['type'];
  buttonRef: React.RefObject<HTMLButtonElement>;
  optionsRef: React.RefObject<HTMLUListElement>;
  calcMaxHeight: () => number;
  multiple?: boolean;
}

// SelectContext: Select.root 하위 컴포넌트들이 사용할 Context
const SelectContext = createContext({});

// useSelectContext: Select 컴포넌트 외부에서 서브 컴포넌트들이 사용됐을 때 에러 처리
function useSelectContext<T>() {
  const context = useContext(SelectContext);
  if (Object.keys(context).length === 0) {
    throw new Error('Select 컴포넌트는 Select.Root 내에서 사용되어야 합니다.');
  }
  return context as SelectContextProps<T>;
}

// SelectRoot 컴포넌트: Select 컴포넌트에게 context를 제공
function SelectRoot<T extends string | number | boolean>(props: SelectProps<T>) {
  const { children, onChange, defaultValue, type, visibleOptions = 5, className, multiple } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  const [selected, setSelected] = useState<Option<T> | Option<T>[] | null>(defaultValue ?? null);
  const [open, setOpen] = useState(false);

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
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleToggleClose, open]);

  const handleOptionClick = (option: Option<T>) => {
    if (multiple) {
      const currentSelected = selected as Option<T>[] | null;
      const isSelected = currentSelected?.some((item) => item.value === option.value);
      let newSelected: Option<T>[];

      if (isSelected) {
        newSelected = currentSelected?.filter((item) => item.value !== option.value) ?? [];
      } else {
        newSelected = [...(currentSelected ?? []), option];
      }

      setSelected(newSelected);

      if (onChange) {
        onChange(newSelected.map((item) => item.value));
      }
    } else {
      setSelected(option);
      handleToggleClose();

      if (onChange) {
        onChange(option.value);
      }
    }
  };

  const contextValue: SelectContextProps<T> = {
    open,
    setOpen,
    selected,
    handleOptionClick,
    type,
    buttonRef,
    optionsRef,
    calcMaxHeight,
    multiple,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      <div className={`${S.selectWrap} ${className}`}>{children}</div>
    </SelectContext.Provider>
  );
}

// Select.Trigger 컴포넌트: 메뉴를 열고 닫는 trigger
interface SelectTriggerProps {
  children: React.ReactNode;
}

function SelectTrigger({ children }: SelectTriggerProps) {
  const { open, setOpen, buttonRef } = useSelectContext();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <button className={S.buttonWithNoStyle} onClick={handleClick} ref={buttonRef} type='button'>
      {children}
    </button>
  );
}

interface SelectTriggerContentProps {
  placeholder?: string;
  className?: string;
  icon?: ReactNode;
}

// Select.TriggerContent 컴포넌트: trigger의 미리 정의된 UI
function SelectTriggerContent<T>(props: SelectTriggerContentProps) {
  const { placeholder, className, icon } = props;
  const { open, selected, multiple } = useSelectContext<T>();

  const getSelectedLabel = () => {
    if (!selected) return placeholder;

    if (multiple) {
      const selectedArray = selected as Option<T>[];
      return (
        <div className={S.multipleLabelWrap}>
          {selectedArray.length > 0 ? selectedArray.map((item) => item.label).join(', ') : placeholder}
        </div>
      );
    }

    return (selected as Option<T>).label;
  };

  return (
    <div className={`${S.select} ${open ? S.focus : ''} ${className}`}>
      <p className={!selected ? S.selectPlaceholder : ''}>{getSelectedLabel()}</p>
      {icon ? (
        icon
      ) : (
        <IconChevronDown
          style={{
            width: 20,
            height: 20,
            transform: open ? 'rotate(-180deg)' : '',
            transition: 'all 0.3s ease',
          }}
        />
      )}
    </div>
  );
}

interface SelectMenuProps {
  children: React.ReactNode;
  className?: string;
}

// SelectMenu 컴포넌트: 옵션 목록을 렌더링
function SelectMenu({ children, className }: SelectMenuProps) {
  const { open, optionsRef, calcMaxHeight, buttonRef } = useSelectContext();

  const buttonRect = buttonRef.current?.getBoundingClientRect();

  if (!open || !buttonRect) {
    return null;
  }

  const maxHeight = calcMaxHeight();

  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const spaceBelow = window.innerHeight - buttonRect.bottom;
  const hasSpaceBelow = spaceBelow >= maxHeight;

  const top = hasSpaceBelow
    ? `${buttonRect.top + buttonRect.height + scrollTop}px`
    : `${buttonRect.top + scrollTop - maxHeight}px`;
  const left = `${buttonRect.left + scrollLeft}px`;

  const animationClass = hasSpaceBelow ? S.optionListAnimation.down : S.optionListAnimation.up;

  return createPortal(
    <ul className={`${S.optionList} ${animationClass} ${className}`} ref={optionsRef} style={{ top, left, maxHeight }}>
      {children}
    </ul>,
    document.body,
  );
}

interface SelectMenuItemProps<T> {
  option: Option<T>;
  onClick?: () => void;
  className?: string;
}

// SelectMenuItem 컴포넌트: 옵션 목록 하나의 UI
function SelectMenuItem<T>({ option, onClick, className }: SelectMenuItemProps<T>) {
  const { open, type, handleOptionClick, selected, multiple } = useSelectContext<T>();

  const isSelected = multiple
    ? (selected as Option<T>[] | null)?.some((item) => item.value === option.value)
    : (selected as Option<T> | null)?.value === option.value;

  const handleClick = () => {
    handleOptionClick(option);

    if (onClick) {
      onClick();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <li>
      <button className={`${S.option} ${className}`} onClick={handleClick} type='button'>
        {multiple && (
          <div className={S.checkboxWrap}>
            <CheckBox checked={isSelected} size={'lg'} />
          </div>
        )}
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
          {(type === 'textDesc' || type === 'userListDesc') && <p className={S.optionDesc}>{option.description}</p>}
        </div>
      </button>
    </li>
  );
}

const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  TriggerContent: SelectTriggerContent,
  Menu: SelectMenu,
  MenuItem: SelectMenuItem,
};

export default Select;
