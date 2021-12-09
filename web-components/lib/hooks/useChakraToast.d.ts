import { ToastOptions } from "@chakra-ui/react";
declare type UseChakraToastOptions = {
    defaultDuration: number;
};
declare type ChakraToastOptions = {
    status?: ToastOptions["status"];
    title: string;
    message?: string;
    duration?: number;
};
export declare const useChakraToast: ({ defaultDuration }?: UseChakraToastOptions) => (options: ChakraToastOptions) => void;
export default useChakraToast;
