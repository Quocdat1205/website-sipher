// * DESCRIPTION:

import { Flex, Box, Heading, HeadingProps } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import SpecialHeading from "@components/shared/SpecialHeading"
import { GradientText, MyText } from "@sipher/web-components"
import { AnimatePresence, motion } from "framer-motion"
import { ComponentProps } from "react"

interface TimeCellProps {
    value: number
    unit: "days" | "hours" | "mins" | "secs"
}

const MotionText = motion<Omit<HeadingProps, "transition">>(Heading)

const TimeCell = ({ value, unit }: TimeCellProps) => {
    return (
        <Flex direction="column" align="center" flex={1}>
            <Box pos="relative" h={["4rem", "5rem"]} w={["4rem", "5rem", "5.5rem", "6.5rem"]} overflow="hidden">
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
                        fontSize={["3.5rem", "4rem", "4.5rem", "5rem"]}
                        position="absolute"
                        left={0}
                        top={0}
                        w="full"
                        mb={0}
                    >
                        {value.toString()}
                    </MotionText>
                </AnimatePresence>
            </Box>
            <Typo.BoldText textTransform="uppercase">{unit}</Typo.BoldText>
        </Flex>
    )
}

export default TimeCell
