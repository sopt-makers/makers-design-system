export interface Children { children: React.ReactNode }

export type StrictPropsWithChildren<P = unknown> = P & Children;

export type DefaultIconType = "success" | "alert" | "error";

export type Svg = React.ReactElement<React.SVGProps<SVGSVGElement>>;

export type ActionType = {
  name: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type Styles = "root" | "content" | "action";

export type StyleType = {
  [key in Styles]?: React.CSSProperties;
};

export interface ToastOptionType {
  icon?: DefaultIconType | Svg;
  content: string;
  action?: ActionType;
  style?: StyleType,
}
