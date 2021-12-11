/// <reference types="react" />
import { TableCellProps } from "@chakra-ui/react";
interface MyTableCellProps extends TableCellProps {
    size?: "small" | "medium" | "large";
}
export declare const MyTd: ({ size, ...rest }: MyTableCellProps) => JSX.Element;
export default MyTd;
