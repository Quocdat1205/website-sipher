import { HStack } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { differenceInSeconds } from "date-fns"
import TimeCell from "./TimeCell"
import Colon from "./Colon"
const ONE_DAY = 60 * 60 * 24
const ONE_HOUR = 60 * 60
const ONE_MINUTE = 60

interface CountDownProps {
    startTime: number
    endTime: number
}

export const CountDown = ({ startTime, endTime }: CountDownProps) => {
    const runTimeOut = useRef(new Date().getTime() < endTime)
    const timeToCountdown = () => {
        const currentTime = new Date().getTime()
        const diffInSecsBeforeStart = differenceInSeconds(startTime, currentTime)
        const diffInSecsBeforeEnd = differenceInSeconds(endTime, currentTime)

        if (new Date().getTime() > endTime)
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }
        else if (new Date().getTime() > startTime) {
            return {
                days: Math.floor(diffInSecsBeforeEnd / ONE_DAY),
                hours: Math.floor((diffInSecsBeforeEnd % ONE_DAY) / ONE_HOUR),
                minutes: Math.floor((diffInSecsBeforeEnd % ONE_HOUR) / ONE_MINUTE),
                seconds: Math.floor(diffInSecsBeforeEnd % ONE_MINUTE),
            }
        } else
            return {
                days: Math.floor(diffInSecsBeforeStart / ONE_DAY),
                hours: Math.floor((diffInSecsBeforeStart % ONE_DAY) / ONE_HOUR),
                minutes: Math.floor((diffInSecsBeforeStart % ONE_HOUR) / ONE_MINUTE),
                seconds: Math.floor(diffInSecsBeforeStart % ONE_MINUTE),
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
        <HStack justifyContent="center" width="100%" align="center" spacing={0}>
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
