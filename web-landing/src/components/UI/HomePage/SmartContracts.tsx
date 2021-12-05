import { Image } from "@chakra-ui/image"
import { Box, Flex, Link, Text, Stack } from "@chakra-ui/layout"
import { TextContainer, Typo } from "@components/shared"
import { GradientHeading, useChakraToast } from "@sipher/web-components"
import React from "react"

const SmartContracts = () => {
    const toast = useChakraToast()

    const handleCopy = async () => {
        await navigator.clipboard.writeText("0x4dDB0b8f49d29A433e6d39Df0d875a0d1F779115")
        toast({ status: "success", title: "Copied address to clipboard", message: "", duration: 1500 })
    }

    return (
        <Flex justify="center" w="full" py={16}>
            <Box maxW={["48rem", "48rem", "80rem", "85rem", "90rem"]} w="full">
                <Flex flexDir={["column", "column", "row", "row", "row"]} align="center">
                    <Flex flex={1} align="center" justify="center">
                        <Image
                            bg="transparent"
                            maxW={["25rem", "30rem", "30rem", "35rem", "40rem"]}
                            src="/images/pc/home/bg-sipher.png"
                            alt="bg"
                        />
                    </Flex>
                    <Stack ml={[0, 4, 6, 10, 12]} spacing={6} justify="flex-start" flex={1}>
                        <GradientHeading fontSize="6xl">SMART CONTRACTS</GradientHeading>
                        <Box>
                            <Typo.Heading mb={1} fontWeight="semibold" textAlign="left" fontSize="xl">
                                $SIPHER CONTRACT ADDRESS
                            </Typo.Heading>
                            <Flex align="center">
                                <Text>0x4dDB0b8f49d29A433e6d39Df0d875a0d1F779115</Text>
                                <Image
                                    cursor="pointer"
                                    onClick={handleCopy}
                                    display="block"
                                    ml={2}
                                    h="1.4rem"
                                    src="/images/icons/copy.png"
                                    alt="icon"
                                />
                            </Flex>
                        </Box>
                        <Box>
                            <Text fontWeight="semibold">Contract Information</Text>
                            <Text>Sipher Token</Text>
                            <Text
                                as="a"
                                isTruncated
                                _focus={{ boxShadow: "none" }}
                                textDecor="underline"
                                href="https://etherscan.io/address/0x4dDB0b8f49d29A433e6d39Df0d875a0d1F779115"
                                target="_blank"
                            >
                                https://etherscan.io/address/0x4dDB0b8f49d29A433e6d39Df0d875a0d1F779115
                            </Text>
                        </Box>
                        <Box>
                            <Text>Sipher IBCO</Text>
                            <Text
                                as="a"
                                isTruncated
                                _focus={{ boxShadow: "none" }}
                                textDecor="underline"
                                href="https://etherscan.io/address/0xAa3484b094D2Adc42A13B5A21C4B53DBcc4a125b"
                                target="_blank"
                            >
                                https://etherscan.io/address/0xAa3484b094D2Adc42A13B5A21C4B53DBcc4a125b
                            </Text>
                        </Box>
                        <Box>
                            <Flex align="center" fontWeight="semibold">
                                Audit Report by <Image ml={2} h="2rem" src="/images/icons/verichains.png" alt="icon" />
                            </Flex>
                            <Text>We are determined to achieve maximum security for all that we do at Sipher.</Text>
                            <Text>This means that we aim to be transparent in our actions.</Text>
                            <Text>
                                In strong collaboration with VeriChains we are proud to share the following audit
                                reports:
                            </Text>
                            <Text>
                                VeriChains{" "}
                                <Link
                                    _focus={{ boxShadow: "none" }}
                                    textDecor="underline"
                                    href="https://sipherstorage.s3.ap-southeast-1.amazonaws.com/audit/Verichains_Public_Audit_Report_Sipher_Tokens_and_IBCO_v1_1.pdf"
                                    target="_blank"
                                >
                                    Token Generation Audit Report & IBCO Audit Report
                                </Link>
                            </Text>
                            <Text>
                                VeriChains{" "}
                                <Link
                                    _focus={{ boxShadow: "none" }}
                                    textDecor="underline"
                                    href="https://sipherstorage.s3.ap-southeast-1.amazonaws.com/audit/Verichains+Public+Audit+Report+-+Sipher+Staking+-+v1.1.pdf"
                                    target="_blank"
                                >
                                    Staking & Liquidity Mining Audit Report
                                </Link>
                            </Text>
                        </Box>
                        <Text>
                            For more information, please visit our Atlas:{" "}
                            <Link
                                _focus={{ boxShadow: "none" }}
                                textDecor="underline"
                                href="https://atlas.sipher.xyz/tokenomic/smart-contract"
                                target="_blank"
                            >
                                https://atlas.sipher.xyz/tokenomic/smart-contract
                            </Link>
                        </Text>
                    </Stack>
                </Flex>
            </Box>
        </Flex>
    )
}

export default SmartContracts
