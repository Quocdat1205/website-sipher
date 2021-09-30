// * DESCRIPTION:

import { Box, Flex, Img } from "@chakra-ui/react"
import { useChakraToast } from "@sipher/web-components"
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

	return (
		<Box h="0.5rem" w="full" pos="relative" mb={2}>
			<Flex w="full" h="full" bg="whiteAlpha.500" justify="flex-end" transform="auto" skewX="-35deg">
				<Box
					h="full"
					w={`${Math.round(((currentPrice - basePrice) / (startPrice - basePrice)) * 100).toString()}%`}
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
			<Box
				pos="absolute"
				color="main.yellow"
				left={0}
				top={"-0.25rem"}
				transform="translate(-50%, -100%)"
				fontWeight="bold"
			>
				{startPrice}
			</Box>

			<Box
				pos="absolute"
				color="main.yellow"
				left={`${(0.5 / (startPrice - basePrice)) * 100}%`}
				top={"-0.25rem"}
				transform="translate(-50%, -100%)"
				fontWeight="bold"
			>
				{0.5}
			</Box>
			<Box
				pos="absolute"
				color="main.yellow"
				right={0}
				top={"-0.25rem"}
				transform="translate(50%, -100%)"
				fontWeight="bold"
			>
				{basePrice}
			</Box>
			<Box pos="absolute" fontSize="sm" left={0} transform="translate(-5%, 10%)" color="main.brightRed">
				{format(new Date(publicSaleTime), "H:mm d/M")}
			</Box>
			<Box
				pos="absolute"
				fontSize="sm"
				left={`${(0.5 / (startPrice - basePrice)) * 100}%`}
				transform="translate(-50%, 10%)"
				color="main.brightRed"
			>
				{format(new Date(publicSaleTime + ((1 - 0.5) / priceStep) * interval), "H:mm d/M")}
			</Box>
			<Box pos="absolute" fontSize="sm" right={0} transform="translate(5%, 10%)" color="main.brightRed">
				{format(new Date(publicSaleTime + ((1 - 0.1) / priceStep) * interval), "H:mm d/M")}
			</Box>
		</Box>
	)
}

export default ProgressBar
