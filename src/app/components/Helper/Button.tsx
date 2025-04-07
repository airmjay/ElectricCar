import { Button, ButtonProps } from "@mantine/core";
interface content {
  text?: string;
  style?: React.CSSProperties;
  className?: string;
  value?: string | number | readonly string[] | undefined;
  otherProps?:
    | Omit<ButtonProps, "text" | "style" | "fw" | "lh" | "lts">
    | undefined; // Allow passing other TextProps
}
export default function ButtonComponent({
  text,
  className,
  otherProps,
}: content) {
  return (
    <Button
      display="flex"
      mt="48px"
      h="48px"
      style={{
        background: "linear-gradient(180deg, #18ACFE 0%, #0163E0 99.7%)",
      }}
      bd={'none'}
      className={className}
      {...otherProps}
      radius="lg"
    >
      {text}
    </Button>
  );
}
