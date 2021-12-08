// * DESCRIPTION:

import { Flex, Box, Heading, HeadingProps } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import { AnimatePresence, motion } from "framer-motion"

interface TimeCellProps {
    value: number
    unit: "days" | "hours" | "mins" | "secs"
}

const MotionText = motion<Omit<HeadingProps, "transition">>(Heading)

const TimeCell = ({ value, unit }: TimeCellProps) => {
    const text = value.toString().length === 1 ? `0${value.toString()}` : value.toString()

    return (
        <Flex direction="column" justify="center" align="center">
            <Box pos="relative" h={"4rem"} w={"5rem"} overflow="hidden">
                <AnimatePresence initial={false}>
                    <MotionText
                        key={value.toString()}
                        exit={{ y: "-100%", zIndex: 0, opacity: 0 }}
                        animate={{ y: 0, zIndex: 1, opacity: 1 }}
                        initial={{ y: "100%", opacity: 0 }}
                        bgClip={"text"}
                        bgGradient={"linear(to-b,bgGradient.orange)"}
                        transition={{ type: "tween", duration: 0.5 }}
                        textAlign="center"
                        fontWeight={900}
                        position="absolute"
                        left={0}
                        top={0}
                        fontSize={"5xl"}
                        w="full"
                        mb={0}
                    >
                        {text}
                    </MotionText>
                </AnimatePresence>
            </Box>
            <Typo.BoldText fontSize="sm" textTransform="uppercase">
                {unit}
            </Typo.BoldText>
        </Flex>
    )
}

export default TimeCell
