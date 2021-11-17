import { Td, TableCellProps } from "@chakra-ui/react"
import React from "react"

interface MyTableCellProps extends TableCellProps {
    size?: "small" | "medium" | "large"
}

export const MyTd = ({ size = "medium", ...rest }: MyTableCellProps) => {
    const fontSize =
        size === "small"
            ? ["xs", "sm", "sm", "md"]
            : size === "medium"
            ? ["sm", "md", "md", "xl"]
            : ["md", "lg", "lg", "xl", "2xl"]
    return <Td textAlign="left" fontWeight={500} px={0} letterSpacing="-.01rem" fontSize={fontSize} {...rest} />
}
export default MyTd
