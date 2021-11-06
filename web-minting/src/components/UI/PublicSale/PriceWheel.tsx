import { Flex, Box, FlexProps } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import PriceCard from "./PriceCard"
import useWalletContext from "@hooks/useWalletContext"

const MotionFlex = motion<Omit<FlexProps, "transition">>(Flex)

interface PriceWheelProps {
    price: number
}

const PriceWheel = ({ price }: PriceWheelProps) => {
    const wheelControl = useAnimation()
    const {
        config: { priceSteps },
    } = useWalletContext()
    useEffect(() => {
        wheelControl.start({
            y: `${Math.round((Math.round(price * 100) - 90) / 5) * 3 + 3}rem`,
            transition: {
                duration: 1,
                type: "tween",
            },
        })
    }, [price, wheelControl])

    return (
        <Box w="full" h="9rem" position="relative">
            <Box h="full" overflow="hidden">
                <MotionFlex direction="column" w="full" px={4} initial="3rem" animate={wheelControl}>
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
