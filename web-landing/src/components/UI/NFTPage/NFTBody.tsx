import { Center } from "@chakra-ui/layout"
import { BackgroundContainer, ViewContainer } from "@components/shared"
import React from "react"
import GalleryCollection from "./GalleryCollection"
import SmartContractContent from "./SmartContractContent"

interface Props {}

const NFTBody = (props: Props) => {
	const mb = [8, 8, 16]

	return (
		<BackgroundContainer>
			<ViewContainer label="Smart Contract" mb={mb} py={20} threshold={0.2}>
				<Center>
					<SmartContractContent />
				</Center>
			</ViewContainer>
			<ViewContainer label="Gallery" mb={mb} threshold={0.2}>
				<Center>
					<GalleryCollection />
				</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default NFTBody
