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
  type: CalloutType;
  isIcon?: boolean;
}

function Callout({ type, isIcon }: CalloutProps) {
  const Icon = icons[type];

  return (
    <aside className={calloutVariant[type]}>
      {isIcon ? <Icon className={iconVariant[type]} /> : null}
      <div className={container}>
        <span className={text}>
          테스트 Text 테스트 Text 테스트 Text 테스트 Text 테스트 Text 테스트
          Text 테스트 Text 테스트 Text 테스트 Text 테스트 Text 테스트 Text
          테스트 Text
        </span>
        <button className={buttonVariant[type]} type="button">
          <span>Button</span>
          <IconChevronRight className={buttonIcon} />
        </button>
      </div>
    </aside>
  );
}

export default Callout;
