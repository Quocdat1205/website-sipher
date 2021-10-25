// * DESCRIPTION:

import { Flex, Box, Heading, HeadingProps } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"

interface TimeCellProps {
    value: number
    textAlign?: "left" | "right" | "center"
}

const MotionText = motion<Omit<HeadingProps, "transition">>(Heading)

const TimeCell = ({ value, textAlign = "center" }: TimeCellProps) => {
    return (
        <Box flex={1} pos="relative" h={"3rem"} w="3.5rem" overflow="hidden">
            <AnimatePresence initial={false}>
                <MotionText
                    key={value.toString()}
                    exit={{ y: "-100%", zIndex: 0, opacity: 0 }}
                    animate={{ y: 0, zIndex: 1, opacity: 1 }}
                    initial={{ y: "100%", opacity: 0 }}
                    transition={{ type: "tween", duration: 0.5 }}
                    textAlign={textAlign}
                    fontWeight={900}
                    fontSize="2.5rem"
                    position="absolute"
                    left={0}
                    top={0}
                    w="full"
                    mb={0}
                >
                    {value.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
                </MotionText>
            </AnimatePresence>
        </Box>
    )
}

export default TimeCell
