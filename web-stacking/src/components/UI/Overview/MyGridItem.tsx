import { GridItemProps, GridItem } from "@chakra-ui/layout"
import React from "react"

interface Props extends GridItemProps {}

const MyGridItem = ({ children, ...rest }: Props) => {
    return (
        <GridItem
            rounded="3xl"
            bg="stack.cardWhite"
            _hover={{ boxShadow: "0 29px 32px rgb(201 155 159 / 28%)" }}
            transition=".3s"
            backdropFilter="blur(100px)"
            border="1px"
            borderColor="white"
            p={4}
            {...rest}
        >
            {children}
        </GridItem>
    )
}
export default MyGridItem
