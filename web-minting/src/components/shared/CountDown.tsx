import { Box, chakra, HStack, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { differenceInSeconds } from "date-fns"

const ONE_DAY = 60 * 60 * 24
const ONE_HOUR = 60 * 60
const ONE_MINUTE = 60

interface CountDownProps {
    deadline: number
}

const CountDown = ({ deadline }: CountDownProps) => {
    const timeToCountdown = () => {
        const currentTime = new Date().getTime()
        const diffInSeconds = differenceInSeconds(deadline, currentTime)
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
            setCountdown(timeToCountdown())
        }, 1000)

        return () => clearTimeout(timeout)
    })

    return (
        <>
            <HStack mt="2" justifyContent="center" width="100%">
                <Box pos="relative" px="4" textAlign="center">
                    <chakra.span
                        m="0 auto"
                        w={{
                            base: "2rem",
                            sm: "2rem",
                            md: "3rem",
                            xl: "3rem",
                            xxl: "4rem",
                            xxxl: "5rem",
                        }}
                        h={{
                            base: "2rem",
                            sm: "2rem",
                            md: "3rem",
                            xl: "3rem",
                            xxl: "4rem",
                            xxxl: "5rem",
                        }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize={{
                            base: "1rem",
                            sm: "1rem",
                            md: "1rem",
                            xl: "1rem",
                            xxl: "1.2rem",
                            xxxl: "2rem",
                        }}
                        fontWeight="bold"
                        borderColor="gray!important"
                        border="1px"
                        p="4"
                        bg="gray.800"
                        color="red.400"
                    >
                        {countdown.days}
                    </chakra.span>
                    <Text
                        fontSize={{
                            base: "0.6rem",
                            sm: "0.7rem",
                            md: "0.8rem",
                            xl: "0.8rem",
                            xxl: "1rem",
                            xxxl: "1.5rem",
                        }}
                    >
                        DAYS
                    </Text>
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
                        w={{
                            base: "2rem",
                            sm: "2rem",
                            md: "3rem",
                            xl: "3rem",
                            xxl: "4rem",
                            xxxl: "5rem",
                        }}
                        h={{
                            base: "2rem",
                            sm: "2rem",
                            md: "3rem",
                            xl: "3rem",
                            xxl: "4rem",
                            xxxl: "5rem",
                        }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize={{
                            base: "1rem",
                            sm: "1rem",
                            md: "1rem",
                            xl: "1rem",
                            xxl: "1.2rem",
                            xxxl: "2rem",
                        }}
                        fontWeight="bold"
                        borderColor="gray!important"
                        border="1px"
                        p="4"
                        bg="gray.800"
                        color="red.400"
                    >
                        {countdown.hours}
                    </chakra.span>
                    <Text
                        fontSize={{
                            base: "0.6rem",
                            sm: "0.7rem",
                            md: "0.8rem",
                            xl: "0.8rem",
                            xxl: "1rem",
                            xxxl: "1.5rem",
                        }}
                    >
                        HOURS
                    </Text>
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
                        w={{
                            base: "2rem",
                            sm: "2rem",
                            md: "3rem",
                            xl: "3rem",
                            xxl: "4rem",
                            xxxl: "5rem",
                        }}
                        h={{
                            base: "2rem",
                            sm: "2rem",
                            md: "3rem",
                            xl: "3rem",
                            xxl: "4rem",
                            xxxl: "5rem",
                        }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize={{
                            base: "1rem",
                            sm: "1rem",
                            md: "1rem",
                            xl: "1rem",
                            xxl: "1.2rem",
                            xxxl: "2rem",
                        }}
                        fontWeight="bold"
                        borderColor="gray!important"
                        border="1px"
                        p="4"
                        bg="gray.800"
                        color="red.400"
                    >
                        {countdown.minutes}
                    </chakra.span>
                    <Text
                        fontSize={{
                            base: "0.6rem",
                            sm: "0.7rem",
                            md: "0.8rem",
                            xl: "0.8rem",
                            xxl: "1rem",
                            xxxl: "1.5rem",
                        }}
                    >
                        MINUTES
                    </Text>
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
                        w={{
                            base: "2rem",
                            sm: "2rem",
                            md: "3rem",
                            xl: "3rem",
                            xxl: "4rem",
                            xxxl: "5rem",
                        }}
                        h={{
                            base: "2rem",
                            sm: "2rem",
                            md: "3rem",
                            xl: "3rem",
                            xxl: "4rem",
                            xxxl: "5rem",
                        }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize={{
                            base: "1rem",
                            sm: "1rem",
                            md: "1rem",
                            xl: "1rem",
                            xxl: "1.2rem",
                            xxxl: "2rem",
                        }}
                        fontWeight="bold"
                        borderColor="gray!important"
                        border="1px"
                        p="4"
                        bg="gray.800"
                        color="red.400"
                    >
                        {countdown.seconds}
                    </chakra.span>
                    <Text
                        fontSize={{
                            base: "0.6rem",
                            sm: "0.7rem",
                            md: "0.8rem",
                            xl: "0.8rem",
                            xxl: "1rem",
                            xxxl: "1.5rem",
                        }}
                    >
                        SECONDS
                    </Text>
                </Box>
            </HStack>
        </>
    )
}

export default CountDown
