// * DESCRIPTION:

import { chakra, Text, TextProps, BoxProps } from "@chakra-ui/react"
import { ReactNode } from "react"

interface LiProps extends TextProps {
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
            <Text _before={{ content: `counter(${listKey || type}, ${type}) ". "` }} textAlign="justify" {...rest}>
                {headline}
            </Text>
            {children}
        </chakra.li>
    )
}

export default Li
