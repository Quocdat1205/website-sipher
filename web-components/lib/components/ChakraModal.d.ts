import { ModalProps } from "@chakra-ui/react";
import React from "react";
interface ChakraModalProps extends ModalProps {
    children: React.ReactNode;
}
export declare const ChakraModal: ({ children, ...rest }: ChakraModalProps) => JSX.Element;
export default ChakraModal;
