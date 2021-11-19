import { Box } from "@chakra-ui/layout"
import { Typo } from "@components/shared/Typo"
import React from "react"
import Countdown from "../Countdown"

interface Props {
    timeLeft: Record<"days" | "hours" | "minutes" | "seconds", number>
}

const CountdownSale = ({ timeLeft }: Props) => {
    return (
        <>
            <Box>
                <Typo.Text fontWeight="normal" color="gray.500">
                    Sale Period Ends
                </Typo.Text>
                <Countdown
                    time1={{ value: timeLeft.days, unit: "DAYS" }}
                    time2={{ value: timeLeft.hours, unit: "HOURS" }}
                    time3={{ value: timeLeft.minutes, unit: "MINS" }}
                    time4={{ value: timeLeft.seconds, unit: "SECS" }}
                />
            </Box>
            <Box mt={4}>
                <Typo.Text fontWeight="normal" color="gray.500">
                    Grace Period Ends
                </Typo.Text>
                <Countdown
                    time1={{ value: timeLeft.days, unit: "DAYS" }}
                    time2={{ value: timeLeft.hours, unit: "HOURS" }}
                    time3={{ value: timeLeft.minutes, unit: "MINS" }}
                    time4={{ value: timeLeft.seconds, unit: "SECS" }}
                />
            </Box>
        </>
    )
}

export default CountdownSale
