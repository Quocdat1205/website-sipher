import { Box, Flex, AccordionButton, Text } from "@chakra-ui/react"
import { BsChevronRight } from "react-icons/bs"
import React from "react"
import BoldText from "@components/shared/BoldText"
import CompleteTag from "./CompleteTag"

interface AccordionTitleProps {
    isExpanded: boolean
    date: string
    name: string
    completed?: boolean
}

const AccordionTitle = ({ name, date, completed, isExpanded }: AccordionTitleProps) => {
    return (
        <AccordionButton py={4} _focus={{ boxShadow: "none" }}>
            <Flex align="center" w="full" justify="space-between">
                <Flex direction="column" pl={[4, 8, 12]} overflow="hidden">
                    <Flex align="center">
                        <BoldText isGradient={isExpanded}>{name}</BoldText>
                        {completed && <CompleteTag />}
                    </Flex>
                    <Text fontSize={"sm"} color="text.secondary" textAlign="left">
                        {date}
                    </Text>
                </Flex>
                <Box ml={2} transform={`rotate(${isExpanded ? "90deg" : "0deg"})`} transition="transform 0.3s ease">
                    <BsChevronRight fontSize="1.2rem" />
                </Box>
            </Flex>
        </AccordionButton>
    )
}

export default AccordionTitle
