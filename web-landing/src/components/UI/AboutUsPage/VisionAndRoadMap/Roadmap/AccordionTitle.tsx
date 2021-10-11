import { Box, Flex, AccordionButton } from "@chakra-ui/react"
import { FiChevronRight } from "react-icons/fi"
import React from "react"
import { Typo } from "@components/shared"

interface Props {
    isExpanded: boolean
    year: string
    name: string
}

const AccordionTitle = ({ year, name, isExpanded }: Props) => {
    return (
        <AccordionButton py={4} _focus={{ boxShadow: "none" }}>
            <Flex align="center" w="full">
                <Flex pos="relative" pl="12" w="full" flexDir={["column", "row"]} align={["flex-start", "center"]}>
                    <Typo.BoldText flex={1} textAlign="left">
                        {year}
                    </Typo.BoldText>
                    <Typo.BoldText flex={3} textAlign="left" isGradient={isExpanded} textTransform="uppercase">
                        {name}
                    </Typo.BoldText>
                </Flex>
                <Box ml="auto" transform={`rotate(${isExpanded ? "90deg" : "0deg"})`} transition="transform 0.3s ease">
                    <FiChevronRight fontSize="2rem" />
                </Box>
            </Flex>
        </AccordionButton>
    )
}

export default AccordionTitle
