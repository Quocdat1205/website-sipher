import React from "react";
import { BoxProps, TextProps } from "@chakra-ui/react";
interface GradientButtonProps extends BoxProps {
    text: React.ReactNode;
    as?: BoxProps["as"];
    href?: string;
    isLoading?: boolean;
    loadingText?: string;
    rel?: string;
    fontSize?: TextProps["fontSize"];
    disabled?: boolean;
    size?: "large" | "medium";
}
export declare const GradientButton: ({ text, as, href, isLoading, loadingText, rel, fontSize, disabled, size, ...rest }: GradientButtonProps) => JSX.Element;
export {};
