/// <reference types="react" />
import { TableColumnHeaderProps } from "@chakra-ui/react";
interface MyTableCellProps extends TableColumnHeaderProps {
    size?: "small" | "medium" | "large";
}
export declare const MyTh: ({ size, ...rest }: MyTableCellProps) => JSX.Element;
export default MyTh;
