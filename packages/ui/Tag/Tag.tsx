import * as S from "./style.css";

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
  return <div>{children}</div>;
}

export default Tag;
