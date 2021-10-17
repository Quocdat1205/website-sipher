import { Box, Flex, Img, Stack, VStack } from "@chakra-ui/react"
import WorldMenu, { WorldMenuId } from "./MenuWorld"
import React from "react"
import { Typo } from "@components/shared"

interface MainContentProps {
    headline: string
    content: string[]
    srcImg?: string
    children: React.ReactChild
    currentPage: WorldMenuId
    setCurrentPage: (newPage: WorldMenuId) => void
}

const MainContent = ({
    headline,
    content,
    srcImg = "/images/pc/nft/banner.png",
    children,
    currentPage,
    setCurrentPage,
}: MainContentProps) => {
    return (
        <VStack maxW={["48rem", "48rem", "48rem", "56rem", "72rem"]} spacing={16}>
            <Stack direction={["column-reverse", "column-reverse", "row"]} spacing={[8, 8, 4]} w="full">
                <VStack justifyContent="space-between" flex={1} spacing={4}>
                    <Flex flexDir="column" flex={1}>
                        <Typo.Heading isGradient textAlign={["center", "center", "left"]}>
                            {headline}
                        </Typo.Heading>
                        {content.map(p => (
                            <Typo.Text key={p}>{p}</Typo.Text>
                        ))}
                    </Flex>
                    <WorldMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </VStack>
                <Box flex={1}>
                    <Img w="full" src={srcImg} alt={headline} />
                </Box>
            </Stack>
            <Box>{children}</Box>
        </VStack>
    )
}

export default MainContent
