import { Flex, Tooltip, Box, Text, chakra, Image } from "@chakra-ui/react"
import useWalletContext from "@hooks/web3/useWalletContext"
import { floorPrecised } from "@source/utils"
import React from "react"
import { BsQuestionCircle } from "react-icons/bs"
import { useQuery } from "react-query"
import Countdown from "./CountDown"
import { Status } from "./useSaleTime"

interface SaleTimerProps {
    status: Status
}

const SaleTimer = ({ status }: SaleTimerProps) => {
    const { scCaller, account } = useWalletContext()

    const { data: userDeposit } = useQuery("user-deposit", () => scCaller.current?.getUserDeposited(account!), {
        enabled: !!scCaller.current && !!account,
        initialData: 0,
    })

    return (
        <Flex direction="column" align="center" flex={2} pos="relative">
            <Flex align="center" mb={4}>
                <Text fontWeight="semibold" size="small" letterSpacing="3px">
                    {status === "NOT_STARTED" ? "COUNTDOWN TO BEGIN" : "SALE PERIOD ENDS"}
                </Text>
                <Tooltip
                    hasArrow
                    label="The $SIPHER Initial Public Sale will span 72 hours from 01:00AM (UTC) 06/12/2021 to 01:00AM (UTC) 09/12/2021."
                    placement="bottom-end"
                    fontSize="sm"
                    bg="#383838DD"
                    fontWeight={400}
                    rounded="lg"
                    p={2}
                    openDelay={500}
                    w="240px"
                >
                    <Box ml={2} cursor="pointer" color="white">
                        <BsQuestionCircle size="1rem" />
                    </Box>
                </Tooltip>
            </Flex>
            <Countdown status={status} />
            <Flex p={4} pos="relative" flexDir="column" align="center" justify="center">
                <Text textAlign="center" size="small" fontWeight="semibold" letterSpacing="3px">
                    YOUR ETH CONTRIBUTION
                </Text>
                <chakra.span py={4} display="flex" alignItems="center" justifyContent="center" w="full">
                    <Image mr={4} h="2.2rem" src="/images/icons/eth.png" alt="icon" />
                    <Text fontWeight="semibold" letterSpacing="3px" size="medium" isTruncated>
                        {floorPrecised(userDeposit, 5)}
                    </Text>
                </chakra.span>
                <Box
                    pos="absolute"
                    w="100%"
                    h="1px"
                    top={0}
                    left={0}
                    bgGradient="linear(to-r, transparent, #FFC266, transparent)"
                />
            </Flex>
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
