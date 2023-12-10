import { ActionType, DefaultIconType, StrictPropsWithChildren } from "../types";
import * as styles from "./style.css";
import { ToastIconSuccess, ToastIconAlert, ToastIconError } from "../icons";

// ============================== ToastRoot ===============================

interface RootProps {
  icon: DefaultIconType | React.ReactElement;
}

const convertToIcon = {
  success: ToastIconSuccess,
  alert: ToastIconAlert,
  error: ToastIconError,
};

function Root({ children, icon }: StrictPropsWithChildren<RootProps>) {
  const isDefaultIcon = typeof icon === "string";
  const DefaultIcon = isDefaultIcon ? convertToIcon[icon] : undefined;

  return (
    <div className={styles.root}>
      {DefaultIcon ? (
        <DefaultIcon />
      ) : (
        <div className={styles.icon}>{icon}</div>
      )}
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
