import { Box, chakra, HStack, Text } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import { differenceInSeconds } from "date-fns"
import { useQueryClient } from "react-query"
import { MyText } from "@sipher/web-components"

const ONE_DAY = 60 * 60 * 24
const ONE_HOUR = 60 * 60
const ONE_MINUTE = 60

interface CountDownProps {
    deadline: number
}

const CountDown = ({ deadline }: CountDownProps) => {
    const runTimeOut = useRef(true)
    const queryClient = useQueryClient()
    console.log("Deadline", deadline)
    const timeToCountdown = () => {
        const currentTime = new Date().getTime()
        const diffInSeconds = differenceInSeconds(deadline, currentTime)
        if (diffInSeconds <= 1) {
            queryClient.invalidateQueries("sale-config")
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        }
        return {
            days: Math.floor(diffInSeconds / ONE_DAY),
            hours: Math.floor((diffInSeconds % ONE_DAY) / ONE_HOUR),
            minutes: Math.floor((diffInSeconds % ONE_HOUR) / ONE_MINUTE),
            seconds: Math.floor(diffInSeconds % ONE_MINUTE),
        }
    }
    const [countdown, setCountdown] = useState(timeToCountdown())

    useEffect(() => {
        const timeout = setTimeout(() => {
            runTimeOut.current && setCountdown(timeToCountdown())
        }, 1000)

        return () => clearTimeout(timeout)
    })

    return (
        <>
            <HStack mt="2" justifyContent="center" width="100%">
                <Box pos="relative" px="4" textAlign="center">
                    <chakra.span
                        m="0 auto"
                        w={["2rem", "3rem", "4rem"]}
                        h={["2rem", "3rem", "4rem"]}
                        fontSize={["0.9rem", "1rem", "1rem"]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                        borderColor="gray!important"
                        border="1px"
                        p="4"
                        bg="gray.800"
                        color="red.400"
                    >
                        {countdown.days}
                    </chakra.span>
                    <MyText>DAYS</MyText>
                    <Text
                        pos="absolute"
                        top="31%"
                        left="100%"
                        transform="translate(0%, -50%)"
                        color="whiteAlpha.800"
                        fontSize="1.5rem"
                        fontWeight="bold"
                    >
                        :
                    </Text>
                </Box>
                <Box pos="relative" px="4" textAlign="center">
                    <chakra.span
                        m="0 auto"
                        w={["2rem", "3rem", "4rem"]}
                        h={["2rem", "3rem", "4rem"]}
                        fontSize={["0.9rem", "1rem", "1rem"]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                        borderColor="gray!important"
                        border="1px"
                        p="4"
                        bg="gray.800"
                        color="red.400"
                    >
                        {countdown.hours}
                    </chakra.span>
                    <MyText>HOURS</MyText>
                    <Text
                        pos="absolute"
                        top="31%"
                        left="100%"
                        transform="translate(0%, -50%)"
                        color="whiteAlpha.800"
                        fontSize="1.5rem"
                        fontWeight="bold"
                    >
                        :
                    </Text>
                </Box>
                <Box pos="relative" px="4" textAlign="center">
                    <chakra.span
                        m="0 auto"
                        w={["2rem", "3rem", "4rem"]}
                        h={["2rem", "3rem", "4rem"]}
                        fontSize={["0.9rem", "1rem", "1rem"]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                        borderColor="gray!important"
                        border="1px"
                        p="4"
                        bg="gray.800"
                        color="red.400"
                    >
                        {countdown.minutes}
                    </chakra.span>
                    <MyText>MINUTES</MyText>
                    <Text
                        pos="absolute"
                        top="31%"
                        left="100%"
                        transform="translate(0%, -50%)"
                        color="whiteAlpha.800"
                        fontSize="1.5rem"
                        fontWeight="bold"
                    >
                        :
                    </Text>
                </Box>
                <Box pos="relative" px="4" textAlign="center">
                    <chakra.span
                        m="0 auto"
                        w={["2rem", "3rem", "4rem"]}
                        h={["2rem", "3rem", "4rem"]}
                        fontSize={["0.9rem", "1rem", "1rem"]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                        borderColor="gray!important"
                        border="1px"
                        p="4"
                        bg="gray.800"
                        color="red.400"
                    >
                        {countdown.seconds}
                    </chakra.span>
                    <MyText>SECONDS</MyText>
                </Box>
            </HStack>
        </>
    )
}

export default CountDown
