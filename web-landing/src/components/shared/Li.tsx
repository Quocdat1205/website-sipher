// * DESCRIPTION:

import { chakra, Text, TextProps, BoxProps } from "@chakra-ui/react"
import { ReactNode } from "react"

interface LiProps extends Omit<TextProps, "size"> {
    headline: ReactNode
    children?: ReactNode
    level?: number
    type?: "decimal" | "upper-roman" | "lower-alpha" | "lower-roman" | "1"
    listKey?: string
    bottomSpace?: BoxProps["mb"]
}

export const Li = ({ headline, children, type = "decimal", level = 1, listKey, bottomSpace = 2, ...rest }: LiProps) => {
    return (
        <chakra.li
            sx={{ counterIncrement: listKey || type }}
            listStyleType="none"
            ml={(level - 1) * 8}
            mb={bottomSpace}
        >
            <Text size="medium" textAlign="justify" {...rest}>
                {headline}
            </Text>
            <Text size="medium">{children}</Text>
        </chakra.li>
    )
}

export default Li
