// * DESCRIPTION:

import { Box, Flex, Img } from "@chakra-ui/react"
import useWalletContext from "@hooks/useWalletContext"
import { useChakraToast } from "@sipher/web-components"
import { format } from "date-fns"
import { useEffect, useRef, useState } from "react"
import { START_PRICE, BASE_PRICE, PRICE_STEP, INTERVAL } from "@constant/index"
interface ProgressBarProps {
    onPriceChange?: (price: number) => void
}

const ProgressBar = ({ onPriceChange }: ProgressBarProps) => {
    const firstTime = useRef(true)
    const [currentTime, setCurrentTime] = useState(new Date().getTime())
    const {
        saleTime,
        metaState: {
            status: { public: status },
        },
    } = useWalletContext()
    const currentPrice = parseFloat(
        Math.min(
            Math.max(START_PRICE - Math.floor((currentTime - saleTime.public) / INTERVAL) * PRICE_STEP, 0.1),
            1
        ).toFixed(2)
    )
    const toast = useChakraToast()
    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentTime(new Date().getTime())
        }, 1000)
        return () => clearTimeout(timeout)
    })

    // useEffect(() => {
    //     // * When the time go over the auction time, stop checking
    //     if (currentTime > saleTime.public + ((START_PRICE - BASE_PRICE) / PRICE_STEP) * INTERVAL) return

    //     // * Split time into cycles
    //     const cycleTime = (currentTime - saleTime.public) % INTERVAL
    //     // * At "TRANSITION" seconds before cycle end, disable mint button
    //     if (INTERVAL - cycleTime < TRANSITION) {
    //         if (!mintable) setMintable(true)
    //         // * At "TRANSITION" seconds after cycle start, enable mint button
    //     } else if (cycleTime > TRANSITION) {
    //         if (mintable) setMintable(false)
    //     }
    // }, [currentTime, saleTime.public, mintable, setMintable])

    useEffect(() => {
        if (firstTime.current) {
            firstTime.current = false
        } else {
            onPriceChange && onPriceChange(currentPrice)
            status === "SALE" && toast({ title: "NFT price has changed!" })
        }
    }, [currentPrice, onPriceChange, status, toast])

    const priceToPercent = (price: number) => {
        const pct = (((price - BASE_PRICE) / PRICE_STEP) * INTERVAL * 100) / (saleTime.end - saleTime.public)
        return `${pct}%`
    }

    const generateBlock = () => {
        let blocks: React.ReactNode[] = []
        for (let i = 1; i < START_PRICE / BASE_PRICE; i++) {
            blocks.push(
                <Box
                    h="full"
                    flex={1}
                    bg={i % 2 === 0 ? "blackAlpha.200" : "whiteAlpha.500"}
                    _hover={{ bg: "whiteAlpha.800" }}
                />
            )
        }
        return blocks
    }

    return (
        <Box h="0.5rem" w="full" pos="relative" mb={2}>
            <Flex
                w={priceToPercent(START_PRICE)}
                h="full"
                pos="absolute"
                top={0}
                left={0}
                transform="auto"
                skewX="-35deg"
                zIndex={8}
            >
                {generateBlock()}
            </Flex>
            <Flex w="full" h="full" bg="whiteAlpha.500" justify="flex-end" transform="auto" skewX="-35deg">
                <Box
                    h="full"
                    w={`${Math.round(
                        100 - ((currentTime - saleTime.public) / (saleTime.end - saleTime.public)) * 100
                    ).toString()}%`}
                    bg="orange.500"
                    bgGradient="linear(to-b,#FF6795 0%, #FF710B 84.37%)"
                    pos="relative"
                    sx={{
                        transition: "all 0.25s ease-in-out",
                    }}
                >
                    <Img
                        src="/images/fire.gif"
                        alt=""
                        pos="absolute"
                        bottom={0}
                        left={0}
                        transform="translateX(-50%)"
                        w="1.5rem"
                        userSelect="none"
                    />
                </Box>
            </Flex>
            {/* START TO SELL */}
            <Box
                pos="absolute"
                color="main.yellow"
                left={0}
                top={"-0.25rem"}
                transform="translate(-10%, -100%)"
                fontWeight="bold"
                fontSize="sm"
            >
                {`${START_PRICE} ETH`}
            </Box>
            <Box pos="absolute" fontSize="xs" left={0} transform="translate(-10%, 10%)" color="main.brightRed">
                {format(new Date(saleTime.public), "H:mm d/M")}
            </Box>

            {/* 0.1 */}
            <Box
                pos="absolute"
                color="main.yellow"
                left={priceToPercent(START_PRICE)}
                top={"-0.25rem"}
                transform="translate(-50%, -100%)"
                fontWeight="bold"
                fontSize="sm"
            >
                {`${BASE_PRICE} ETH`}
            </Box>
            <Box
                pos="absolute"
                left={priceToPercent(START_PRICE)}
                transform="translate(-50%, 10%)"
                color="main.brightRed"
                fontSize="xs"
            >
                {format(new Date(saleTime.public + ((1 - 0.1) / PRICE_STEP) * INTERVAL), "H:mm d/M")}
            </Box>

            {/* END SALE */}
            <Box
                pos="absolute"
                color="main.yellow"
                right={0}
                top={"-0.25rem"}
                transform="translate(-0%, -100%)"
                fontWeight="bold"
                fontSize="sm"
            >
                END
            </Box>
            <Box pos="absolute" fontSize="xs" right={0} transform="translate(-0%, 10%)" color="main.brightRed">
                {format(new Date(saleTime.end), "H:mm d/M")}
            </Box>
        </Box>
    )
}

export default ProgressBar
