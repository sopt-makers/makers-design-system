import React, { forwardRef } from "react";
import * as Toast from "./parts";
import type { ToastOptionType } from "./types";

function ToastComponent(props: ToastOptionType, ref: React.Ref<HTMLDivElement>) {
  const { icon, content, action, style } = props;
  
  return (
    <Toast.Root icon={icon} ref={ref} style={style?.root}>
      <Toast.Content content={content} style={style?.content} />
      {action ? <Toast.Action style={style?.action} {...action} /> : null}
    </Toast.Root>
  );
}

export default forwardRef(ToastComponent);
