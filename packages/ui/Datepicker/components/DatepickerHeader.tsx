import { IconChevronDown, IconArrowLeft, IconArrowRight } from '@sopt-makers/icons';
import * as S from '../style.css';

interface DatepickerHeaderProps {
  title: string;
  onTitleClick?: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
  showTitleIcon?: boolean;
}

function DatepickerHeader({
  title,
  onTitleClick,
  onPrevClick,
  onNextClick,
  isPrevDisabled = false,
  isNextDisabled = false,
  showTitleIcon = false,
}: DatepickerHeaderProps): JSX.Element {
  return (
    <div className={S.navigation}>
      <button className={S.navButton} disabled={isPrevDisabled} onClick={onPrevClick} type='button'>
        <IconArrowLeft style={{ height: 24, width: 24 }} />
      </button>

      <button className={S.currentView} onClick={onTitleClick} type='button'>
        {title} {showTitleIcon ? <IconChevronDown style={{ height: 20, width: 20 }} /> : null}
      </button>

      <button className={S.navButton} disabled={isNextDisabled} onClick={onNextClick} type='button'>
        <IconArrowRight style={{ height: 24, width: 24 }} />
      </button>
    </div>
  );
}

export default DatepickerHeader;
