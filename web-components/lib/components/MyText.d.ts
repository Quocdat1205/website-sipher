import { TextProps } from "@chakra-ui/layout";
export interface MyTextProps extends TextProps {
    size?: "small" | "medium" | "large";
}
export declare const MyText: ({ size, ...rest }: MyTextProps) => JSX.Element;
export default MyText;
