// * DESCRIPTION:

import { Box, Flex, Img } from "@chakra-ui/react"
import { SetStateAction, useEffect } from "react"

interface ProgressBarProps {
	startPrice?: number
	basePrice?: number
	priceStep?: number
	duration?: number
	currentTime: number
	setCurrentTime: SetStateAction<any>
	publicSaleTime: number
	currentPrice: number
}

const ProgressBar = ({ currentPrice, setCurrentTime, startPrice = 1, basePrice = 0.1 }: ProgressBarProps) => {
	// const privateSaleTime = 1632664977000
	// const [currentTime, setCurrentTime] = useState(new Date().getTime())
	// const currentPrice = Math.max(startPrice - Math.round((currentTime - publicSaleTime) / duration) * priceStep, 0.1)
	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentTime(new Date().getTime())
		}, 1000)
		return () => clearTimeout(timeout)
	})

	return (
		<Box h="0.5rem" w="full" pos="relative">
			<Flex
				w="full"
				h="full"
				bg="whiteAlpha.500"
				justify="flex-end"
				transform="auto"
				skewX="-35deg"
				zIndex="banner"
			>
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
				fontSize="lg"
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
				fontSize="lg"
				right={0}
				top={"-0.25rem"}
				transform="translate(50%, -100%)"
				fontWeight="bold"
			>
				{basePrice}
			</Box>
		</Box>
	)
}

export default ProgressBar
