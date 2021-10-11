import React from "react"
import { MyHeading } from "@sipher/web-components"
import { Flex, FlexProps } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/react"
import { Typo } from "@components/shared"

interface ContentAccordionProps extends FlexProps {
    title: string
    children?: React.ReactChild
}

const ContentAccordion = ({ title, children, ...rest }: ContentAccordionProps) => {
    return (
        <Flex pl="12" justifySelf="flex-start" w="full" flexDir={["column", "row"]} mb={6} {...rest}>
            <Typo.BoldText textTransform="uppercase" textAlign="left" flex={1}>
                {title}
            </Typo.BoldText>
            <Box pl="4" flex={3}>
                {children}
            </Box>
        </Flex>
    )
}
export default ContentAccordion
