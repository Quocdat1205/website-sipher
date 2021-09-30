import { Box, chakra, HStack, Flex } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import { differenceInSeconds } from "date-fns"
import { useQueryClient } from "react-query"
import { GradientText, MyText } from "@sipher/web-components"
import TimeCell from "./TimeCell"
import Colon from "./Colon"

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
            console.log("success")
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
        <HStack mt="2" justifyContent="center" width="100%" align="flex-start">
            <TimeCell value={countdown.days} unit="Days" />
            <Colon />
            <TimeCell value={countdown.hours} unit="Hours" />
            <Colon />
            <TimeCell value={countdown.minutes} unit="Mins" />
            <Colon />
            <TimeCell value={countdown.seconds} unit="Secs" />
        </HStack>
    )
}

export default CountDown
