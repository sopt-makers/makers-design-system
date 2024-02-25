import { useToast} from "ui";

function ToastTemp() {
  const { open } = useToast();

  return (
    <button
      onClick={() => {
        open({
          icon: "success",
          content: "기본 토스트입니다.",
        });
      }}
    >
      Open Toast
    </button>
  );
}

export default ToastTemp;
