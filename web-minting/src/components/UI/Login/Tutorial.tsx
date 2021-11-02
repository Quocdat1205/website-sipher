import { Box, Flex, chakra, Text } from "@chakra-ui/react"
import { BsInfoCircle } from "react-icons/bs"
import { Typo } from "@components/shared/Typo"
import { MotionFlex } from "@components/shared/Motion"

const MetaMaskTutorial = ({}) => {
    return (
        <Box bg="url(/images/bgMintingNew.png)" w="100%" h="100vh" bgPosition="center" bgSize="cover">
            <Flex
                justify="center"
                align="center"
                w="full"
                h="full"
                bgColor="blackAlpha.500"
                color="whiteAlpha.900"
                direction="column"
                p={4}
            >
                <MotionFlex
                    direction="column"
                    w="full"
                    maxW="32rem"
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
                            <Text fontSize="lg">
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
                            <Text fontSize="lg">2. Follow the instruction to set up your wallet.</Text>
                            <Text fontSize="lg">3. Reload this page and connect to your wallet.</Text>
                        </Box>
                    </Flex>
                    <Text ml={4} textAlign="justify">
                        <chakra.span>
                            <BsInfoCircle style={{ display: "inline" }} size="1.2rem" />
                        </chakra.span>{" "}
                        When you created your first ethereum wallet, be sure to keep your mnemonic (presented as a
                        random 12-word phrase) at someplace safe. If you lose or forget the mnemonic, you might lose
                        your wallet and all asset within.
                    </Text>
                </MotionFlex>
            </Flex>
        </Box>
    )
}

export default MetaMaskTutorial
