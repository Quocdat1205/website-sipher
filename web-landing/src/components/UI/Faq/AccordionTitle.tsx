import { Box, Flex, AccordionButton } from "@chakra-ui/react"
import { BsChevronRight } from "react-icons/bs"
import React from "react"
import { Typo } from "@components/shared/"

interface Props {
    isExpanded: boolean
    title: string
}

const AccordionTitle = ({ title, isExpanded }: Props) => {
    return (
        <AccordionButton py={4} _focus={{ boxShadow: "none" }}>
            <Flex align="center" w="full" justify="space-between">
                <Flex direction="column" pl={[4, 8, 12]}>
                    <Typo.BoldText
                        isGradient={isExpanded}
                        size="medium"
                        fontWeight="medium"
                        letterSpacing="1px"
                        textAlign="left"
                    >
                        {title}
                    </Typo.BoldText>
                </Flex>
                <Box ml="2" transform={`rotate(${isExpanded ? "90deg" : "0deg"})`} transition="transform 0.3s ease">
                    <BsChevronRight fontSize="1.2rem" />
                </Box>
            </Flex>
        </AccordionButton>
    )
}

export default AccordionTitle
