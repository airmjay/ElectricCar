import { Text, TextProps } from "@mantine/core";
import React from "react";
interface content {
  text? : string,
  style?: React.CSSProperties,
  className?: string,
  otherProps?: Omit<TextProps, 'text' | 'style'| 'fw' | 'lh' | 'lts'>; // Allow passing other TextProps
}
export default function BigHeading({text,style,otherProps,className} : content){
    return (
    <Text ta={{base: 'center', md: 'left'}} fz={{base: '24px', md: '48px'}} fw={'700'} style={style} {...otherProps} className={className} lh={{base: '24px', md: '48px'}} lts={'0'}>
        {text}
    </Text>
    )
}