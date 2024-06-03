import {
  IconAlertCircle,
  IconChevronRight,
  IconInfoCircle,
} from "@sopt-makers/icons";
import {
  buttonIcon,
  buttonVariant,
  calloutVariant,
  container,
  iconVariant,
  text,
} from "./style.css";
import type { CalloutType } from "./types";

const icons = {
  danger: IconAlertCircle,
  information: IconInfoCircle,
  warning: IconInfoCircle,
};
interface CalloutProps {
  content: string;
  type: CalloutType;
  hasIcon?: boolean;
  buttonLabel?: string;
  onClick?: () => void;
}

function Callout(props: CalloutProps) {
  const { content, type, hasIcon, buttonLabel, onClick } = props;
  const Icon = icons[type];

  return (
    <aside className={calloutVariant[type]}>
      {hasIcon ? <Icon className={iconVariant[type]} /> : null}
      <div className={container}>
        <span className={text}>{content}</span>
        <button className={buttonVariant[type]} onClick={onClick} type="button">
          <span>{buttonLabel}</span>
          <IconChevronRight className={buttonIcon} />
        </button>
      </div>
    </aside>
  );
}

export default Callout;
