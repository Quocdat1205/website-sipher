/// <reference types="react" />
import { HeadingProps } from "@chakra-ui/layout";
export interface MyHeadingProps extends HeadingProps {
    size?: "small" | "medium" | "large";
}
export declare const MyHeading: ({ size, ...rest }: MyHeadingProps) => JSX.Element;
export default MyHeading;
