import { Box, BoxProps, Text, chakra } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"

interface PriceCardProps {
    price: string
    active?: boolean
}

const MotionBox = motion<Omit<BoxProps, "transition">>(Box)

const PriceCard = ({ price, active }: PriceCardProps) => {
    const cardControl = useAnimation()
    useEffect(() => {
        if (active)
            cardControl.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1,
                    type: "tween",
                },
            })
        else cardControl.start({ opacity: 0.3, scale: 0.9 })
    }, [cardControl, active])
    return (
        <MotionBox
            w="full"
            height="3rem"
            letterSpacing="1px"
            textAlign="center"
            lineHeight="3rem"
            border="1px"
            borderColor="white"
            bgColor="black"
            initial={{
                opacity: 0.3,
                scale: 0.9,
            }}
            animate={cardControl}
        >
            <Text fontWeight={500} fontSize="xl">
                <chakra.span fontSize="3xl">{price}</chakra.span> ETH
            </Text>
        </MotionBox>
    )
}

export default PriceCard
