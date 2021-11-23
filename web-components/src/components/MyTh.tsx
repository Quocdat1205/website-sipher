import { Th, TableColumnHeaderProps } from "@chakra-ui/react"
import React from "react"

interface MyTableCellProps extends TableColumnHeaderProps {
    size?: "small" | "medium" | "large"
}

export const MyTh = ({ size = "medium", ...rest }: MyTableCellProps) => {
    const fontSize =
        size === "small"
            ? ["xs", "sm", "sm", "md"]
            : size === "medium"
            ? ["sm", "md", "md", "xl"]
            : ["md", "lg", "lg", "xl", "2xl"]
    return <Th textAlign="left" px={0} fontSize={fontSize} {...rest} />
}
export default MyTh
