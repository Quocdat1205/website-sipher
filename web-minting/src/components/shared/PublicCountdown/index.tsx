import { HStack } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import { differenceInSeconds } from "date-fns"
import TimeCell from "./TimeCell"
import Colon from "./Colon"

const ONE_HOUR = 60 * 60
const ONE_MINUTE = 60

interface PublicCountdownProps {
    minutes: number
    seconds: number
}

export const PublicCountdown = ({ minutes, seconds }: PublicCountdownProps) => {
    return (
        <HStack justifyContent="flex-start" align="center" spacing={2}>
            <TimeCell value={minutes} textAlign="right" />
            <Colon />
            <TimeCell value={seconds} textAlign="left" />
        </HStack>
    )
}

export default PublicCountdown
