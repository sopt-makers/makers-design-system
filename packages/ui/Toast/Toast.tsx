import * as Toast from "./parts";
import { ToastOptionType } from "./types";

function ToastComponent({ icon, content, action }: ToastOptionType) {
  return (
    <Toast.Root icon={icon}>
      <Toast.Content content={content} />
      {action && <Toast.Action {...action} />}
    </Toast.Root>
  );
}

export default ToastComponent;
