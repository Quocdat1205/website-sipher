import { HStack } from "@chakra-ui/react"
import React from "react"
import TimeCell, { TimeCellProps } from "./TimeCell"
import Colon from "./Colon"

interface PublicCountdownProps {
    time1: TimeCellProps
    time2: TimeCellProps
    time3: TimeCellProps
}

export const PrivateCountdown = ({ time1, time2, time3 }: PublicCountdownProps) => {
    return (
        <HStack justifyContent="flex-start" align="center" spacing={0}>
            <TimeCell {...time1} />
            <Colon />
            <TimeCell {...time2} />
            <Colon />
            <TimeCell {...time3} />
        </HStack>
    )
}

export default PrivateCountdown
