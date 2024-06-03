import { IconAlertCircle, IconInfoCircle } from "@sopt-makers/icons";
import { callout, icon, sprinkles, text } from "./style.css";
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
    <aside
      className={`${callout} ${sprinkles({
        backgroundColor: type,
        borderColor: type,
      })}`}
    >
      {isIcon ? (
        <Icon
          className={`${icon} ${sprinkles({
            color: type,
          })}`}
        />
      ) : null}
      <span className={text}>
        테스트 Text 테스트 Text 테스트 Text 테스트 Text 테스트 Text 테스트 Text
        테스트 Text 테스트 Text 테스트 Text 테스트 Text 테스트 Text 테스트 Text
      </span>
    </aside>
  );
}

export default Callout;
