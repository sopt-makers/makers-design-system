import { IconAlertCircle, IconChevronRight, IconInfoCircle } from '@sopt-makers/icons';
import type { ReactNode } from 'react';
import { buttonIcon, button, calloutVariant, container, iconVariant, text } from './style.css';
import type { CalloutType } from './types';

const icons = {
  danger: IconAlertCircle,
  information: IconInfoCircle,
  warning: IconAlertCircle,
};
interface CalloutProps {
  children: ReactNode;
  type: CalloutType;
  hasIcon?: boolean;
  buttonLabel?: string;
  isButtonDisabled?: boolean;
  onClick?: () => void;
}

function Callout(props: CalloutProps) {
  const { children, type, hasIcon = true, buttonLabel, isButtonDisabled, onClick } = props;
  const Icon = icons[type];

  return (
    <aside className={calloutVariant[type]}>
      {buttonLabel || hasIcon ? <Icon aria-hidden='true' className={iconVariant[type]} /> : null}
      <div className={container}>
        <span className={text}>{children}</span>
        {children && buttonLabel ? (
          <button className={button} disabled={isButtonDisabled} onClick={onClick} type='button'>
            <span>{buttonLabel}</span>
            <IconChevronRight aria-hidden='true' className={buttonIcon} />
          </button>
        ) : null}
      </div>
    </aside>
  );
}

export default Callout;
