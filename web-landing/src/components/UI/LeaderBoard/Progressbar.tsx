import { Box, chakra, Text } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"

interface Props {
    value?: number
}

const Progressbar = ({ value = 60 }: Props) => {
    return (
        <Box mb={4} p={8} w="full" pos="relative">
            <Box bg="border.gray" pos="relative" w="full" h="1rem" rounded="full" overflow="hidden">
                <Box bgGradient="linear(180deg, #FF6795 0%, #FF710B 84.37%)" w={`${value}%`} h="full" rounded="full" />
            </Box>
            <Box pos="absolute" top="17%" left="0" zIndex={2}>
                <Image quality={100} width={50} height={50} src="/images/pc/leaderboard/money.png" />
                <Text color="sipher.orange" fontWeight="semibold" fontSize="xs">
                    Holding <chakra.span color="white">$SIPHER</chakra.span>
                </Text>
            </Box>
            <Box pos="absolute" top="17%" left="calc(50% - 2rem)" zIndex={2}>
                <Image quality={100} width={50} height={50} src="/images/pc/leaderboard/nft.png" />
                <Text transform="translateX(-25%)" color="sipher.orange" fontWeight="semibold" fontSize="xs">
                    Top 200:{" "}
                    <chakra.span color="white" fontWeight="normal">
                        Free NFT
                    </chakra.span>
                </Text>
            </Box>
            <Box pos="absolute" top="17%" left="calc(100% - 4rem)" zIndex={3}>
                <Image quality={100} width={50} height={50} src="/images/pc/leaderboard/nft.png" />
            </Box>
            <Box pos="absolute" top="17%" left="calc(100% - 3rem)" zIndex={2}>
                <Image quality={100} width={50} height={50} src="/images/pc/leaderboard/nft.png" />
                <Text
                    transform="translateX(-60%)"
                    isTruncated
                    color="sipher.orange"
                    fontWeight="semibold"
                    fontSize="xs"
                >
                    Top 50:{" "}
                    <chakra.span color="white" fontWeight="normal">
                        2 Free NFTs
                    </chakra.span>
                </Text>
            </Box>
        </Box>
    )
}
export default Progressbar
