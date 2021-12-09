/// <reference types="react" />
import { FlexProps } from "@chakra-ui/react";
import { MyTextProps } from ".";
interface NavBarLinkProps extends FlexProps {
    onClick?: () => void;
    active?: boolean;
    text: string;
    href: string;
    size?: MyTextProps["size"];
}
export declare const NavBarLink: ({ onClick, size, text, active, href, ...rest }: NavBarLinkProps) => JSX.Element;
export {};
