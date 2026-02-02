import { forwardRef } from 'react';
import type { ActionType, DefaultIconType, StrictPropsWithChildren, Svg } from '../types';
import { ToastIconSuccess, ToastIconAlert, ToastIconError } from '../icons';
import * as styles from './style.css';

// ============================== ToastRoot ===============================

const convertToIcon = {
  success: ToastIconSuccess,
  alert: ToastIconAlert,
  error: ToastIconError,
};

interface RootProps {
  icon?: DefaultIconType | Svg;
  style?: React.CSSProperties;
}

function Root(props: StrictPropsWithChildren<RootProps>, ref: React.Ref<HTMLDivElement>) {
  const { children, icon, style } = props;
  const isDefaultIcon = typeof icon === 'string';
  const DefaultIcon = isDefaultIcon ? convertToIcon[icon as DefaultIconType] : undefined;

  return (
    <div className={styles.root} ref={ref} style={style} aria-live='polite' aria-atomic='true'>
      {DefaultIcon ? <DefaultIcon /> : icon && <div className={styles.icon}>{icon}</div>}
      {children}
    </div>
  );
}

const WrappedRoot = forwardRef(Root);

// ============================== ToastContent ===============================

interface ContentProps {
  content: string;
  style?: React.CSSProperties;
}

function Content(props: ContentProps) {
  const { content, style } = props;

  return (
    <p className={styles.content} style={style}>
      {content}
    </p>
  );
}

// ============================== ToastAction ===============================

interface ActionProps extends ActionType {
  style?: React.CSSProperties;
}

function Action(props: ActionProps) {
  const { name, style, ...actionProps } = props;

  return (
    <button className={styles.action} style={style} type='button' aria-label={name} {...actionProps}>
      {name}
    </button>
  );
}

export { WrappedRoot as Root, Content, Action };
