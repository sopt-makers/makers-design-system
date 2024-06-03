import { IconAlertCircle, IconInfoCircle } from "@sopt-makers/icons";
import { blueIcon, callout, redIcon, text, yellowIcon } from "./style.css";

function Callout() {
  return (
    <aside className={callout}>
      <IconAlertCircle className={redIcon} />
      <IconInfoCircle className={blueIcon} />
      <IconInfoCircle className={yellowIcon} />
      <span className={text}>테스트 Text</span>
    </aside>
  );
}

export default Callout;
