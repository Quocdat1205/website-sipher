import { Flex, Box, FlexProps } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import PriceCard from "./PriceCard"
import { GoTriangleLeft } from "react-icons/go"
import useSaleConfig from "@hooks/useSaleConfig"

const MotionFlex = motion<Omit<FlexProps, "transition">>(Flex)

interface PriceWheelProps {
    price: number
}

const PriceWheel = ({ price }: PriceWheelProps) => {
    const wheelControl = useAnimation()
    const { priceSteps } = useSaleConfig()
    useEffect(() => {
        wheelControl.start({
            y: `${Math.round((Math.round(price * 100) - 90) / 5) * 2.5 + 2.5}rem`,
            transition: {
                duration: 1,
                type: "tween",
            },
        })
    }, [price, wheelControl])

    return (
        <Box w="full" h="7.5rem" position="relative">
            <Box color="main.darkRed" right={0} top="50%" pos="absolute" transform="translate(50%, -50%)">
                <GoTriangleLeft size="2rem" />
            </Box>
            <Box h="full" overflow="hidden">
                <MotionFlex direction="column" w="full" px={4} initial="2.5rem" animate={wheelControl}>
                    {priceSteps.map(step => (
                        <PriceCard
                            key={step.timeStamp}
                            price={step.value.toFixed(2)}
                            active={Math.abs(step.value - price) < 0.001}
                        />
                    ))}
                </MotionFlex>
            </Box>
        </Box>
    )
}

export default PriceWheel
