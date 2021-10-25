// * DESCRIPTION:

import { Flex, Box, Heading, HeadingProps, Text } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"
import { AnimatePresence, motion } from "framer-motion"

export interface TimeCellProps {
    value: number
    unit: string
}

const MotionText = motion<Omit<HeadingProps, "transition">>(Heading)

const TimeCell = ({ value, unit }: TimeCellProps) => {
    return (
        <Flex direction="column">
            <Box pos="relative" h={"3rem"} w="3.5rem" overflow="hidden" className="box">
                <AnimatePresence initial={false}>
                    <MotionText
                        key={value.toString()}
                        exit={{ y: "-100%", zIndex: 0, opacity: 0 }}
                        animate={{ y: 0, zIndex: 1, opacity: 1 }}
                        initial={{ y: "100%", opacity: 0 }}
                        transition={{ type: "tween", duration: 0.5 }}
                        textAlign={"center"}
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
            <MyText textAlign={"center"} fontSize="xs">
                {unit}
            </MyText>
        </Flex>
    )
}

export default TimeCell
