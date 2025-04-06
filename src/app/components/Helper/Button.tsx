import { Button, ButtonProps } from "@mantine/core";
interface content {
  text?: string;
  style?: React.CSSProperties;
  className?: string;
  value?: string | number | readonly string[] | undefined;
  otherProps?: Omit<ButtonProps, "text" | "style" | "fw" | "lh" | "lts"> | undefined; // Allow passing other TextProps
}
export default function ButtonComponent({ text, style, className,otherProps }: content) {
  return (
    <Button style={style} className={className} variant="filled" {...otherProps}  radius="md">
      {text}
    </Button>
  );
}
