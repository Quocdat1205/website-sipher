import { HStack } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import { differenceInSeconds } from "date-fns"
import TimeCell from "./TimeCell"
import Colon from "./Colon"

const ONE_DAY = 60 * 60 * 24
const ONE_HOUR = 60 * 60
const ONE_MINUTE = 60

interface CountDownProps {
    deadline: number
}

export const CountDown = ({ deadline }: CountDownProps) => {
    const runTimeOut = useRef(true)
    const timeToCountdown = () => {
        const currentTime = new Date().getTime()
        const diffInSeconds = differenceInSeconds(deadline, currentTime)
        if (diffInSeconds <= 1) runTimeOut.current = false
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
        }, 200)

        return () => clearTimeout(timeout)
    })

    return (
        <HStack mt="2" justifyContent="flex-start" width="100%" align="center" spacing={0}>
            <TimeCell value={countdown.days} unit="days" />
            <Colon />
            <TimeCell value={countdown.hours} unit="hours" />
            <Colon />
            <TimeCell value={countdown.minutes} unit="mins" />
            <Colon />
            <TimeCell value={countdown.seconds} unit="secs" />
        </HStack>
    )
}

export default CountDown
