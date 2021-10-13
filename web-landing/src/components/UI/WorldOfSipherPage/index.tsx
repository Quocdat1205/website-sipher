// * DESCRIPTION:

import { Flex } from "@chakra-ui/react"
import HeaderBackground from "@components/shared/HeaderBackground"
import { blockchainContent, factionsContent, gameplayContent, theWorldContent } from "@constant/content/why"
import React, { useState } from "react"
import MainContent from "./MainContent"
import BackgroundContainer from "@components/shared/BackgroundContainer"
import TheWorldContent from "./TheWorldContent"
import GameplayContent from "./GameplayContent"
import FactionsContent from "./FactionsContent"
import BlockchainContent from "./BlockchainContent"

interface WorldOfSipherUIProps {}

const WorldOfSipherUI = ({}: WorldOfSipherUIProps) => {
    const [currentPage, setCurrentPage] = useState<"theworld" | "gameplay" | "factions" | "blockchain">("theworld")

    const renderImage = () =>
        `/images/pc/${
            currentPage === "theworld"
                ? "why/why1.png"
                : currentPage === "gameplay"
                ? "why/gameplay1.png"
                : currentPage === "factions"
                ? "nft/banner.png"
                : "news.png"
        }`

    const renderHeadline = () =>
        currentPage === "theworld"
            ? "The world"
            : currentPage === "gameplay"
            ? "Gameplay"
            : currentPage === "factions"
            ? "Factions"
            : "Blockchain"

    const renderContent = () =>
        currentPage === "theworld"
            ? theWorldContent.worldBlockCategory
            : currentPage === "gameplay"
            ? gameplayContent.gameCategory
            : currentPage === "factions"
            ? factionsContent.main
            : blockchainContent.main

    return (
        <BackgroundContainer px={0}>
            <HeaderBackground title="WORLD OF SIPHER" description="DONEC VIVERRA, METUS EU CONDIMENTUM" />
            <Flex flex={1} direction="column" align="center" py={24}>
                <MainContent
                    srcImg={renderImage()}
                    headline={renderHeadline()}
                    content={renderContent()}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                >
                    {currentPage === "theworld" ? (
                        <TheWorldContent />
                    ) : currentPage === "gameplay" ? (
                        <GameplayContent />
                    ) : currentPage === "factions" ? (
                        <FactionsContent />
                    ) : (
                        <BlockchainContent />
                    )}
                </MainContent>
            </Flex>
        </BackgroundContainer>
    )
}

export default WorldOfSipherUI
