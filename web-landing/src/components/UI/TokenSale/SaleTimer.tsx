import { Flex, Tooltip, Box, Text } from "@chakra-ui/react"
import React from "react"
import { BsQuestionCircle } from "react-icons/bs"
import Countdown from "./CountDown"

interface SaleTimerProps {}

const SaleTimer = ({}: SaleTimerProps) => {
    return (
        <Flex direction="column" align="center" flex={2} pos="relative">
            <Flex align="center" mb={4}>
                <Text fontWeight="semibold" size="small" letterSpacing="3px">
                    SALE PERIOD ENDS
                </Text>
                <Tooltip hasArrow label="abc ..." placement="bottom-end" fontSize="sm" bg="border.gray" openDelay={500}>
                    <Box ml={2} cursor="pointer" color="white">
                        <BsQuestionCircle size="1rem" />
                    </Box>
                </Tooltip>
            </Flex>
            <Countdown />
            <Box
                pos="absolute"
                w="1px"
                h="100%"
                top={"50%"}
                transform="translateY(-50%)"
                right={0}
                bgGradient="linear(to-b, transparent, #FFC266, transparent)"
            />
        </Flex>
    )
}

export default SaleTimer
