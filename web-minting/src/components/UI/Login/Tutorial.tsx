import { Box, Flex, chakra, Text } from "@chakra-ui/react"
import { BsInfoCircle } from "react-icons/bs"
import { Typo } from "@components/shared/Typo"
import { MotionFlex } from "@components/shared/Motion"
import { FiArrowLeft } from "react-icons/fi"
import { useRouter } from "next/router"
const MetaMaskTutorial = ({}) => {
    const router = useRouter()
    return (
        <Flex
            direction="column"
            bg="url(/images/bgMintingNew.png)"
            w="100%"
            h="100vh"
            bgPosition="center"
            bgSize="cover"
            bgColor="blackAlpha.500"
            p={4}
        >
            <Flex align="center" justify="center" w="full" flex={1} color="whiteAlpha.900" direction="column" p={4}>
                <Flex w="full" mb={2} maxW="28rem">
                    <Flex
                        _hover={{ color: "main.yellow" }}
                        color="white"
                        mb={4}
                        cursor="pointer"
                        wrap="wrap"
                        align="center"
                        onClick={() => router.push("/")}
                    >
                        <FiArrowLeft size="1.2rem" />
                        <Text color="inherit" ml={2} fontWeight={500}>
                            BACK TO HOME
                        </Text>
                    </Flex>
                </Flex>
                <MotionFlex
                    direction="column"
                    w="full"
                    maxW="28rem"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0", opacity: 1 }}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
                    bg="blackAlpha.800"
                    p={8}
                >
                    <Typo.Heading fontSize="3xl" mb={4}>
                        METAMASK TUTORIAL
                    </Typo.Heading>
                    <Flex w="full" justify="center" mb={4}>
                        <Box>
                            <Text fontWeight={500}>
                                1. Install MetaMask extension{" "}
                                <chakra.span
                                    as="a"
                                    href="https://metamask.io/download.html"
                                    target="_blank"
                                    rel="noreferrer"
                                    fontWeight="bold"
                                    textDecor="underline"
                                    color="main.yellow"
                                >
                                    here
                                </chakra.span>
                                .
                            </Text>
                            <Text fontWeight={500}>2. Follow the instruction to set up your wallet.</Text>
                            <Text fontWeight={500}>3. Reload this page and connect to your wallet.</Text>
                        </Box>
                    </Flex>
                    <Text textAlign="justify" fontSize="sm" color="whiteAlpha.700" fontWeight={500}>
                        <chakra.span>
                            <BsInfoCircle style={{ display: "inline" }} size="1rem" />
                        </chakra.span>{" "}
                        When you created your first ethereum wallet, be sure to keep your mnemonic (presented as a
                        random 12-word phrase) at someplace safe. If you lose or forget the mnemonic, you might lose
                        your wallet and all asset within.
                    </Text>
                </MotionFlex>
            </Flex>
        </Flex>
    )
}

export default MetaMaskTutorial
