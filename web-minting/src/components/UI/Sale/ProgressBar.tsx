// * DESCRIPTION:

import { Box, Flex, Img } from "@chakra-ui/react"
import useWalletContext from "@hooks/useWalletContext"
import { MyText, useChakraToast } from "@sipher/web-components"
import { format } from "date-fns"
import { useEffect, useState } from "react"

interface ProgressBarProps {
    status: string
    startPrice: number
    basePrice: number
    priceStep: number
    interval: number
    publicSaleTime: number
    onPriceChange?: (price: number) => void
}

const ProgressBar = ({
    status,
    startPrice,
    basePrice,
    priceStep,
    interval,
    publicSaleTime,
    onPriceChange,
}: ProgressBarProps) => {
    const [currentTime, setCurrentTime] = useState(new Date().getTime())
    const { saleTime } = useWalletContext()
    const currentPrice = parseFloat(
        Math.min(
            Math.max(startPrice - Math.floor((currentTime - publicSaleTime) / interval) * priceStep, 0.1),
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

    useEffect(() => {
        onPriceChange && onPriceChange(currentPrice)
        status === "PUBLIC_SALE" && toast({ title: "NFT price has changed!" })
    }, [currentPrice, onPriceChange, status])

    const priceToPercent = (price: number) => {
        const pct = (((price - basePrice) / priceStep) * interval * 100) / (saleTime.end - saleTime.public)
        return `${pct}%`
    }

    const generateBlock = () => {
        let blocks: React.ReactNode[] = []
        for (let i = 1; i < startPrice / basePrice; i++) {
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
                w={priceToPercent(startPrice)}
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
                transform="translate(-50%, -100%)"
                fontWeight="bold"
            >
                {`${startPrice}`}
            </Box>
            <Box pos="absolute" fontSize="xs" left={0} transform="translate(-10%, 10%)" color="main.brightRed">
                {format(new Date(publicSaleTime), "H:mm d/M")}
            </Box>

            {/* 0.1 */}
            <Box
                pos="absolute"
                color="main.yellow"
                left={priceToPercent(startPrice)}
                top={"-0.25rem"}
                transform="translate(-50%, -100%)"
                fontWeight="bold"
            >
                {`${basePrice}`}
            </Box>
            <Box
                pos="absolute"
                left={priceToPercent(startPrice)}
                transform="translate(-50%, 10%)"
                color="main.brightRed"
                fontSize="xs"
            >
                {format(new Date(publicSaleTime + ((1 - 0.1) / priceStep) * interval), "H:mm d/M")}
            </Box>

            {/* END SALE */}
            <Box
                pos="absolute"
                color="main.yellow"
                left="100%"
                top={"-0.25rem"}
                transform="translate(-50%, -100%)"
                fontWeight="bold"
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

{
    /* 0.5
            <Box
                pos="absolute"
                color="main.yellow"
                left={priceToPercent(0.5)}
                top={"-0.25rem"}
                transform="translate(-50%, -100%)"
                fontWeight="bold"
            >
                {"0.5 ETH"}
            </Box>

            <Box pos="absolute" fontSize="sm" left={priceToPercent(0.5)} transform="translate(-50%, 10%)">
                <MyText color="main.brightRed" size="small">
                    {format(new Date(publicSaleTime + ((1 - 0.5) / priceStep) * interval), "H:mm d/M")}
                </MyText>
            </Box> */
}
