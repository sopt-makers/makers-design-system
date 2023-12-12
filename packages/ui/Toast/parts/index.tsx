import { ActionType, DefaultIconType, StrictPropsWithChildren } from "../types";
import * as styles from "./style.css";
import { ToastIconSuccess, ToastIconAlert, ToastIconError } from "../icons";

// ============================== ToastRoot ===============================

const convertToIcon = {
  success: ToastIconSuccess,
  alert: ToastIconAlert,
  error: ToastIconError,
};

interface RootProps {
  icon: DefaultIconType | React.ReactElement;
  style?: React.CSSProperties;
}

function Root(props: StrictPropsWithChildren<RootProps>) {
  const { children, icon, style } = props;
  const isDefaultIcon = typeof icon === "string";
  const DefaultIcon = isDefaultIcon ? convertToIcon[icon] : undefined;

  return (
    <div className={styles.root} style={style}>
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

interface ContentProps {
  content: string;
  style?: React.CSSProperties;
}

function Content(props : ContentProps) {
  const { content, style } = props;

  return <p className={styles.content} style={style}>{content}</p>;
}

// ============================== ToastAction ===============================

interface ActionProps extends ActionType {
  style?: React.CSSProperties;
}

function Action(props: ActionProps) {
  const { name, style, ...actionProps } = props;

  return (
    <button className={styles.action} style={style} {...actionProps}>
      {name}
    </button>
  );
}

export { Root, Content, Action };
