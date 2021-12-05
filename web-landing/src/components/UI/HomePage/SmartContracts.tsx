import { Image } from "@chakra-ui/image"
import { Box, Flex, Link, Text, Stack } from "@chakra-ui/layout"
import { Typo } from "@components/shared"
import { useChakraToast } from "@sipher/web-components"
import { SipherIBCOAddress, SipherTokenAddress } from "@source/contract/code"
import React from "react"

const contractData = [
    { id: "Sipher Token", address: SipherTokenAddress },
    { id: "Sipher IBCO", address: SipherIBCOAddress },
]

const SmartContracts = () => {
    const toast = useChakraToast()

    const handleCopy = async () => {
        await navigator.clipboard.writeText(SipherTokenAddress)
        toast({ status: "success", title: "Copied address to clipboard", message: "", duration: 1500 })
    }

    return (
        <Flex justify="center" w="full" pt={16}>
            <Stack direction={["column", "column", "row"]} align="center" spacing={8} maxW="72rem" w="full">
                <Flex align="center" justify="center">
                    <Image
                        src="/images/pc/home/bg-sipher.png"
                        alt="sipher-token"
                        w={["full", "full", "50rem", "90rem"]}
                    />
                </Flex>
                <Box w="full" p={4}>
                    <Typo.Heading isGradient textAlign={["center", "center", "left"]}>
                        SMART CONTRACTS
                    </Typo.Heading>
                    <Box mb={8}>
                        <Text mb={1} fontWeight="semibold" textAlign="left" letterSpacing="3px" fontSize="lg">
                            $SIPHER CONTRACT ADDRESS
                        </Text>
                        <Text fontSize={["sm", "md"]}>{SipherTokenAddress}</Text>
                    </Box>
                    <Box mb={8}>
                        <Text fontWeight="semibold" mb={2} fontSize="lg">
                            Contract Information
                        </Text>
                        {contractData.map(contract => (
                            <Box key={contract.id} mb={2} overflow="hidden">
                                <Text>{contract.id}</Text>
                                <Text
                                    w="full"
                                    isTruncated
                                    textDecor="underline"
                                    href={`https://etherscan.io/address/${contract.address}`}
                                    onClick={() => window.open(`https://etherscan.io/address/${contract.address}`)}
                                    cursor="pointer"
                                >
                                    https://etherscan.io/address/{contract.address}
                                </Text>
                            </Box>
                        ))}
                    </Box>
                    <Box mb={8}>
                        <Flex align="center" fontWeight="semibold" fontSize="lg" mb={2}>
                            Audit Report by <Image ml={2} h="1.5rem" src="/images/icons/verichains.png" alt="icon" />
                        </Flex>
                        <Text mb={1}>We are determined to achieve maximum security for all that we do at Sipher.</Text>
                        <Text mb={1}>This means that we aim to be transparent in our actions.</Text>
                        <Text mb={1}>
                            In strong collaboration with VeriChains we are proud to share the following audit reports:
                        </Text>
                        <Text mb={1}>
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
                        <Text mb={1}>
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
                </Box>
            </Stack>
        </Flex>
    )
}

export default SmartContracts
