// * DESCRIPTION:

import { Flex, VStack } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import HeaderBackground from "@components/shared/HeaderBackground"
import React from "react"
import GalleryCollection from "./GalleryCollection"
import SmartContractContent from "./SmartContractContent"

interface NFTUIProps {}

const NFTUI = ({}: NFTUIProps) => {
    return (
        <BackgroundContainer px={0}>
            <HeaderBackground title="NFT" description="DONEC VIVERRA, METUS EU CONDIMENTUM" />
            <VStack w="full" py={24} px={4} align="center" spacing={24}>
                <SmartContractContent />
                <GalleryCollection />
            </VStack>
        </BackgroundContainer>
    )
}

export default NFTUI
