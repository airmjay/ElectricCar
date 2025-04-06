import { ChervonDown } from "@/app/assets/asset";
import { Input, InputWrapper,Textarea, InputProps } from "@mantine/core";
import React, { ReactNode } from "react";

interface content {
  placeholderInput?: string;
  placeholderLabel?: string;
  style?: React.CSSProperties;
  className?: string;
  icon? : ReactNode;
  value?: string | number | readonly string[] | undefined;
  otherProps?: Omit<InputProps, "text" | "style" | "fw" | "lh" | "lts">; // Allow passing other TextProps

}
export default function InputField({
  placeholderInput,
  placeholderLabel,
  className,
  style,
  value,
}: content) {
  return (
    <InputWrapper
      mb={"24px"}
      label={placeholderLabel}
      style={style}
      className={className}
    >
      <Input mt={"5px"} value={value} placeholder={placeholderInput} />
    </InputWrapper>
  );
}
export function TelWithStateCode({
  placeholderInput,
  placeholderLabel,
  className,
  style,
  value,
}: content) {
  return (
    <InputWrapper
      mb={"24px"}
      label={placeholderLabel}
      style={style}
      className={className}
    >
      <Input
        mt={"5px"}
        placeholder={placeholderInput}
        value={value}
        leftSection={
          <div
            className="flex pl-3 items-center cursor-pointer"
            style={{ color: "#101828" }}
          >
            <span> US </span> <ChervonDown />{" "}
          </div>
        }
        type="number"
        leftSectionWidth={"49px"}
        leftSectionPointerEvents="auto"
        size="sm"
      />
    </InputWrapper>
  );
}

export function TextArea( {placeholderInput,placeholderLabel,value}: content) {
  return (
    <>
      <Textarea autosize minRows={6} maxRows={8} mb={"24px"} label={placeholderLabel} placeholder={placeholderInput} value={value} />
    </>
  );
}
export function InputWithIcon( {placeholderInput,value,icon,otherProps}: content) {
  return (
    <>
       <Input {...otherProps} placeholder={placeholderInput} value={value} leftSection={icon} />
    </>
  );
}
