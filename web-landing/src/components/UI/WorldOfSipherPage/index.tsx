import { Flex } from "@chakra-ui/react";
import { blockchainContent, factionsContent, gameplayContent, theWorldContent } from "@constant/content/why";
import React, { useState } from "react";
import MainContent from "./MainContent";
import TheWorldContent from "./TheWorldContent";
import GameplayContent from "./GameplayContent";
import FactionsContent from "./FactionsContent";
import BlockchainContent from "./BlockchainContent";
import { LinkButton, BackgroundContainer, HeaderBackground } from "@components/shared";

type Page = "theworld" | "gameplay" | "factions" | "blockchain";

const WorldOfSipherUI = () => {
  const [currentPage, setCurrentPage] = useState<Page>("theworld");

  const renderImage = () =>
    `/images/pc/${
      currentPage === "theworld"
        ? "why/theworld.png"
        : currentPage === "gameplay"
        ? "why/gameplay.png"
        : currentPage === "factions"
        ? "nft/banner.png"
        : "news.png"
    }`;

  const renderHeadline = () =>
    currentPage === "theworld"
      ? "The world"
      : currentPage === "gameplay"
      ? "Gameplay"
      : currentPage === "factions"
      ? "Factions"
      : "Blockchain";

  const renderContent = () =>
    currentPage === "theworld"
      ? theWorldContent.worldBlockCategory
      : currentPage === "gameplay"
      ? gameplayContent.gameCategory
      : currentPage === "factions"
      ? factionsContent.main
      : blockchainContent.main;

  return (
    <BackgroundContainer px={0}>
      <HeaderBackground
        title="WORLD OF SIPHER"
        description="Learn why we're the next awesome blockchain game you'll play!"
      />
      <Flex flex={1} direction="column" w="full" align="center" py={24} px={4}>
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
        <LinkButton text="View The Sipher Atlas" href="https://t.ly/sipheratlas" size="large" mt={8} />
      </Flex>
    </BackgroundContainer>
  );
};

export default WorldOfSipherUI;
