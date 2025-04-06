import { Text, TextProps } from "@mantine/core";
import React from "react";
interface content {
  text : string | null,
  style?: React.CSSProperties,
  otherProps?: Omit<TextProps, 'children' | 'style' | 'c' | 'fw' | 'lh' | 'lts'>; // Allow passing other TextProps
}
export default function Heading({text, style, otherProps} : content){ 
    
    return (
    <Text style={style} {...otherProps} c="#EB8F02" fw="700" lh="24px" lts="0%">
               {text}
      </Text>
    )
}