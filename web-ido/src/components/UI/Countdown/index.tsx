import { HStack } from "@chakra-ui/react"
import React from "react"
import TimeCell, { TimeCellProps } from "./TimeCell"
import Colon from "./Colon"

interface PublicCountdownProps {
    time1: TimeCellProps
    time2: TimeCellProps
    time3: TimeCellProps
    time4: TimeCellProps
}

export const Countdown = ({ time1, time2, time3, time4 }: PublicCountdownProps) => {
    return (
        <HStack justifyContent="flex-start" align="center" spacing={0}>
            <TimeCell {...time1} />
            <Colon />
            <TimeCell {...time2} />
            <Colon />
            <TimeCell {...time3} />
            <Colon />
            <TimeCell {...time4} />
        </HStack>
    )
}

export default Countdown
