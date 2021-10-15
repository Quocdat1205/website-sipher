import { Box, Flex, AccordionButton } from "@chakra-ui/react"
import { BsCheck, BsChevronRight } from "react-icons/bs"
import React from "react"
import { Typo } from "@components/shared"

interface Props {
    isExpanded: boolean
    date: string
    name: string
    completed?: boolean
}

const AccordionTitle = ({ name, date, completed, isExpanded }: Props) => {
    return (
        <AccordionButton py={4} _focus={{ boxShadow: "none" }}>
            <Flex align="center" w="full" justify="space-between">
                <Flex direction="column" pl={[4, 8, 12]} overflow="hidden">
                    <Flex align="center">
                        <Typo.BoldText size="medium" isGradient={isExpanded} textTransform="uppercase" isTruncated>
                            {name}
                        </Typo.BoldText>
                        {completed && (
                            <Flex
                                ml={4}
                                align="center"
                                py={1}
                                px={[1, 2]}
                                pr={[1, 3]}
                                rounded="full"
                                color="main.lightGreen"
                                border="1px"
                                borderColor="main.lightGreen"
                            >
                                <BsCheck />
                                <Typo.Text
                                    size="small"
                                    ml={1}
                                    color="main.lightGreen"
                                    sx={{
                                        "@media (max-width: 480px)": {
                                            display: "none",
                                        },
                                    }}
                                >
                                    Completed
                                </Typo.Text>
                            </Flex>
                        )}
                    </Flex>
                    <Typo.Text size="small" color="about.textGray" textAlign="left">
                        {date}
                    </Typo.Text>
                </Flex>
                <Box ml={2} transform={`rotate(${isExpanded ? "90deg" : "0deg"})`} transition="transform 0.3s ease">
                    <BsChevronRight fontSize="1.2rem" />
                </Box>
            </Flex>
        </AccordionButton>
    )
}

export default AccordionTitle
