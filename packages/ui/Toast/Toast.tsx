import * as Toast from "./parts";
import { ToastOptionType } from "./types";

function ToastComponent(props: ToastOptionType) {
  const { icon = "success", content, action, style } = props;
  
  return (
    <Toast.Root style={style?.root} icon={icon} >
      <Toast.Content style={style?.content} content={content} />
      {action && <Toast.Action style={style?.action} {...action} />}
    </Toast.Root>
  );
}

export default ToastComponent;
