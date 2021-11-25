import { GridItem, GridItemProps } from "@chakra-ui/layout"
import React from "react"

interface Props extends GridItemProps {}

const MyGridItem = ({ ...rest }: Props) => {
    return (
        <GridItem
            p={6}
            rounded="2xl"
            overflow="hidden"
            transition="all .5s"
            bg="black"
            border="1px"
            borderColor="border.gray"
            {...rest}
        />
    )
}

export default MyGridItem
