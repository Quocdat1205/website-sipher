import React from "react"
import { Flex } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import BuyDoge from "./BuyDoge"
import HowtoMint from "@components/shared/HowtoMint"
import { useSmartContract } from "@hooks/useSmartContract"
import Loading from "@components/shared/Loading"

interface Props {}

const PrivateSale = (props: Props) => {
	const { metaState } = useSmartContract()
	return metaState.isSmartContract === "CONNECT" ? (
		<Flex
			className="nice-scroll"
			overflow="auto"
			w="100%"
			flexDir="column"
			alignItems="center"
			justifyContent="center"
			h="100%"
		>
			<Flex
				flexDir="row"
				w="70%"
				p="1.5%"
				alignItems="center"
				justifyContent="center"
				bgGradient="linear(to-r, rgba(0,0,0,0.7), rgba(0,0,0,0.8),  rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.8), rgba(0,0,0,0.7))"
			>
				<Image
					w="25%"
					h="auto"
					border="5px solid"
					borderColor="whiteAlpha.800"
					src="/images/Minting.gif"
					alt=""
				/>
				<Flex
					w="100%"
					flexDir="column"
					alignItems="center"
					p="1.5%"
					sx={{ h4: { fontSize: "1.5rem", color: "yellow.500" } }}
				>
					<BuyDoge />
				</Flex>
			</Flex>
			<Flex
				mt="4"
				w="70%"
				flexDir="column"
				alignItems="center"
				p="1.5%"
				bgGradient="linear(to-r, rgba(0,0,0,0.7), rgba(0,0,0,0.8),  rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.9), rgba(0,0,0,0.8), rgba(0,0,0,0.7))"
			>
				<HowtoMint />
			</Flex>
		</Flex>
	) : (
		<Loading />
	)
}
export default PrivateSale
