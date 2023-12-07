import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import { ActionType, DefaultIconType, StrictPropsWithChildren } from "../types";
import * as styles from "./style.css";

// ============================== ToastRoot ===============================

interface RootProps {
  icon: DefaultIconType | React.ReactElement;
}

const convertToIcon = {
  success: CheckCircleTwoTone,
  alert: InfoCircleTwoTone,
  error: CloseCircleTwoTone,
};

function Root({ children, icon }: StrictPropsWithChildren<RootProps>) {
  const isDefaultIcon = typeof icon === "string";
  const DefaultIcon = isDefaultIcon ? convertToIcon[icon] : undefined;

  return (
    <div className={styles.root}>
      {DefaultIcon ? <DefaultIcon /> : icon}
      {children}
    </div>
  );
}

// ============================== ToastContent ===============================

function Content(props: { content: string }) {
  const { content } = props;

  return <p className={styles.content}>{content}</p>;
}

// ============================== ToastAction ===============================

function Action(props: ActionType) {
  const { name, ...actionProps } = props;

  return (
    <button className={styles.action} {...actionProps}>
      {name}
    </button>
  );
}

export { Root, Content, Action };
