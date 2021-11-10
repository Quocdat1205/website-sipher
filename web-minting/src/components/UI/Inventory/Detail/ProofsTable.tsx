import { Box, Flex, Text, Tooltip } from "@chakra-ui/react"
import { BsQuestionCircle } from "react-icons/bs"

interface ProofsTableProps {
    proofs: string[]
    onDownload: () => void
}

const ProofsTable = ({ proofs, onDownload }: ProofsTableProps) => {
    return (
        <Box>
            <Flex w="full" justify="space-between" align="center">
                <Text fontWeight="700" fontSize="2xl" mb={1}>
                    Proofs
                </Text>

                <Flex align="center">
                    <Text
                        cursor="pointer"
                        fontSize="sm"
                        fontWeight={500}
                        color="main.yellow"
                        letterSpacing="0px"
                        onClick={onDownload}
                    >
                        DOWNLOAD
                    </Text>
                    <Tooltip
                        hasArrow
                        label="How to verify proofs"
                        placement="top"
                        fontSize="sm"
                        bg="about.darkRed"
                        openDelay={500}
                    >
                        <Box
                            cursor="pointer"
                            ml={2}
                            as="a"
                            href="https://sipherhq.notion.site/Step-by-Step-to-verify-your-Sipher-NFT-b18ae849204a403d9c987c5926c91f11"
                            rel="nonreferrer"
                            target="_blank"
                        >
                            <BsQuestionCircle size="1rem" />
                        </Box>
                    </Tooltip>
                </Flex>
            </Flex>
            <Flex direction="column" w="full" overflow="hidden">
                {proofs.map(p => (
                    <Text
                        textAlign="left"
                        letterSpacing="0.75px"
                        fontSize="sm"
                        color="whiteAlpha.700"
                        key={p}
                        isTruncated
                        fontFamily="mono"
                        fontWeight={700}
                        w="full"
                        overflow="hidden"
                    >
                        {p}
                    </Text>
                ))}
            </Flex>
        </Box>
    )
}

export default ProofsTable
