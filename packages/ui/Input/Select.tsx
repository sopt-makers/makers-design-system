import { useState, useRef, useEffect, useCallback, createContext, useContext } from 'react';
import { IconChevronDown, IconUser } from '@sopt-makers/icons';
import * as S from './style.css';

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
  visibleOptions?: number;
  defaultValue?: Option<T>;
  onChange: (value: T) => void;
  children: React.ReactNode;
}

interface SelectContextProps<T> {
  open: boolean;
  setOpen: (open: boolean) => void;
  selected: Option<T> | null;
  handleOptionClick: (option: Option<T>) => void;
  type: SelectProps<T>['type'];
  visibleOptions: number;
  placeholder?: string;
  onChange: (value: T) => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
  optionsRef: React.RefObject<HTMLUListElement>;
  calcMaxHeight: () => number;
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
  const { children, onChange, defaultValue, type, visibleOptions = 5, placeholder, className } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  const [selected, setSelected] = useState<Option<T> | null>(defaultValue ?? null);
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
    setSelected(option);
    onChange(option.value);
    handleToggleClose();
  };

  const contextValue: SelectContextProps<T> = {
    open,
    setOpen,
    selected,
    handleOptionClick,
    type,
    visibleOptions,
    placeholder,
    onChange,
    buttonRef,
    optionsRef,
    calcMaxHeight,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      <div className={`${S.selectWrap} ${className}`}>{children}</div>
    </SelectContext.Provider>
  );
}

SelectRoot.displayName = 'Select.Root';

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

SelectTrigger.displayName = 'Select.Trigger';

interface SelectTriggerContentProps {
  className?: string;
}

// Select.TriggerContent 컴포넌트: trigger의 미리 정의된 UI
function SelectTriggerContent({ className }: SelectTriggerContentProps) {
  const { open, selected, placeholder } = useSelectContext();

  const selectedLabel = selected ? selected.label : placeholder;

  return (
    <div className={`${S.select} ${className ? className : ''}`}>
      <p className={!selected ? S.selectPlaceholder : ''}>{selectedLabel}</p>
      <IconChevronDown
        style={{
          width: 20,
          height: 20,
          transform: open ? 'rotate(-180deg)' : '',
          transition: 'all 0.3s ease',
        }}
      />
    </div>
  );
}

SelectTriggerContent.displayName = 'Select.TriggerContent';

interface SelectMenuProps {
  children: React.ReactNode;
}

// SelectMenu 컴포넌트: 옵션 목록을 렌더링
function SelectMenu({ children }: SelectMenuProps) {
  const { open, optionsRef, calcMaxHeight } = useSelectContext();

  if (!open) {
    return null;
  }

  return (
    <ul className={S.optionList} ref={optionsRef} style={{ maxHeight: calcMaxHeight() }}>
      {children}
    </ul>
  );
}

SelectMenu.displayName = 'Select.Menu';

interface SelectMenuItemProps<T> {
  option: Option<T>;
  onClick?: () => void;
}

// SelectMenuItem 컴포넌트: 옵션 목록 하나의 UI
function SelectMenuItem<T>({ option, onClick }: SelectMenuItemProps<T>) {
  const { open, type, handleOptionClick } = useSelectContext();

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
    <li key={option.label}>
      <button className={S.option} onClick={handleClick} type='button'>
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

SelectMenuItem.displayName = 'Select.MenuItem';

const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  TriggerContent: SelectTriggerContent,
  Menu: SelectMenu,
  MenuItem: SelectMenuItem,
};

export default Select;
