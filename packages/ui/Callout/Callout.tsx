import {
  IconAlertCircle,
  IconChevronRight,
  IconInfoCircle,
} from "@sopt-makers/icons";
import {
  buttonIcon,
  button,
  calloutVariant,
  container,
  iconVariant,
  text,
} from "./style.css";
import type { CalloutType } from "./types";

const icons = {
  danger: IconAlertCircle,
  information: IconInfoCircle,
  warning: IconAlertCircle,
};
interface CalloutProps {
  content: string;
  type: CalloutType;
  hasIcon?: boolean;
  buttonLabel?: string;
  isButtonDisabled?: boolean;
  onClick?: () => void;
}

function Callout(props: CalloutProps) {
  const { content, type, hasIcon, buttonLabel, isButtonDisabled, onClick } =
    props;
  const Icon = icons[type];

  return (
    <aside className={calloutVariant[type]}>
      {hasIcon ? <Icon className={iconVariant[type]} /> : null}
      <div className={container}>
        <span className={text}>{content}</span>
        {buttonLabel ? (
          <button
            className={button}
            disabled={isButtonDisabled}
            onClick={onClick}
            type="button"
          >
            <span>{buttonLabel}</span>
            <IconChevronRight className={buttonIcon} />
          </button>
        ) : null}
      </div>
    </aside>
  );
}

export default Callout;
