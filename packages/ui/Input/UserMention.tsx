import { useRef, useEffect, useCallback } from 'react';
import { IconUser } from '@sopt-makers/icons';
import * as S from './style.css';

export interface UserOption<T> {
  label: string;
  value: T;
  description?: string;
  profileUrl?: string;
}

interface UserMentionProps<T> {
  className?: string;
  userOptions: UserOption<T>[];
  type: 'Default' | 'Description';
  visibleOptions?: number;
  onChange: (value: T) => void;
  toggleClose: () => void;
}

function UserMention<T extends string | number>(props: UserMentionProps<T>) {
  const { className, userOptions, type, visibleOptions = 5, onChange, toggleClose } = props;

  const userOptionsRef = useRef<HTMLUListElement>(null);

  const calcMaxHeight = useCallback(() => {
    const optionHeight = type === 'Description' ? 62 : 48;
    const gapHeight = 6;
    const paddingHeight = 8;
    return optionHeight * visibleOptions + gapHeight * (visibleOptions - 1) + paddingHeight * 2;
  }, [visibleOptions, type]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userOptionsRef.current && !userOptionsRef.current.contains(event.target as Node)) {
        toggleClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => { document.removeEventListener('mousedown', handleClickOutside); };
  }, [toggleClose]);

  const handleOptionClick = (value: T) => {
    onChange(value);
    toggleClose();
  }

  return <div className={`${S.selectWrap} ${className}`}>
    <ul className={`${S.optionList} ${S.userMention}`} ref={userOptionsRef} style={{ maxHeight: calcMaxHeight() }}>
      {userOptions.map(option =>
        <li key={option.label}>
          <button className={`${S.option} ${S.userMentionItem}`} onClick={() => { handleOptionClick(option.value); }} type="button">
            {option.profileUrl ? <img alt={option.label} className={S.optionProfileImg} src={option.profileUrl} /> : <div className={S.optionProfileEmpty}><IconUser /></div>}
            <div>
              <p>{option.label}</p>
              {type === 'Description' && <p className={S.optionDesc}>{option.description}</p>}
            </div>
          </button>
        </li>
      )}
    </ul>
  </div>
}

export default UserMention;