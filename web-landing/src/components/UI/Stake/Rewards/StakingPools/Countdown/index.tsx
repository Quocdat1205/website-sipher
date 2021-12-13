import React, { useEffect, useState } from "react"
import { differenceInSeconds } from "date-fns"
import TimeCell from "./TimeCell"
import { chakra, Text } from "@chakra-ui/react"

const ONE_DAY = 60 * 60 * 24
const ONE_HOUR = 60 * 60
const ONE_MINUTE = 60

interface CountDownProps {
    startTime: number
}

export const CountDown = ({ startTime }: CountDownProps) => {
    const timeToCountdown = () => {
        const currentTime = new Date().getTime()

        const getTimeRevert = () => {
            let timeStamp = startTime
            while (timeStamp < new Date().getTime()) {
                timeStamp += 86400000
            }

            return timeStamp
        }
        const diffInSeconds = differenceInSeconds(getTimeRevert(), currentTime)

        return {
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
        <Text textAlign="center" fontSize="sm" mr={[0, 8]}>
            {new Date().getTime() > startTime ? (
                <>
                    <chakra.span fontWeight="semibold">Next rewards: </chakra.span>
                    <chakra.span>
                        <TimeCell value={countdown.hours} unit="hours" />
                        <TimeCell value={countdown.minutes} unit="minutes" />
                    </chakra.span>
                </>
            ) : (
                "Next rewards: available from 05:00AM Dec 15 2021 UTC"
            )}
        </Text>
    )
}

export default CountDown
