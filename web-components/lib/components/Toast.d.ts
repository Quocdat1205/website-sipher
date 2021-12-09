/// <reference types="react" />
import { ToastOptions } from "@chakra-ui/react";
interface ToastProps {
    status: ToastOptions["status"];
    title: string;
    message?: string;
}
export declare const Toast: ({ status, title, message }: ToastProps) => JSX.Element;
export default Toast;
