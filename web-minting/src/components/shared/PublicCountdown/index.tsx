import { HStack } from "@chakra-ui/react"
import React from "react"
import TimeCell, { TimeCellProps } from "./TimeCell"
import Colon from "./Colon"

interface PublicCountdownProps {
    time1: TimeCellProps
    time2: TimeCellProps
}

export const PublicCountdown = ({ time1, time2 }: PublicCountdownProps) => {
    return (
        <HStack justifyContent="flex-start" align="center" spacing={2}>
            <TimeCell {...time1} />
            <Colon />
            <TimeCell {...time2} />
        </HStack>
    )
}

export default PublicCountdown
