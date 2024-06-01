import * as S from "./style.css";
import createTagStyle from "./utils";

interface TagProps {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  shape?: "rect" | "pill";
  variant?: "default" | "primary" | "secondary";
  type?: "solid" | "line";
}

function Tag({
  children,
  size = "sm",
  shape = "rect",
  variant = "default",
  type = "solid",
}: TagProps) {
  const style = createTagStyle(type, variant, shape, size);
  return (
    <div className={`${S.root} ${style}`}>
      <span>{children}</span>
    </div>
  );
}

export default Tag;
