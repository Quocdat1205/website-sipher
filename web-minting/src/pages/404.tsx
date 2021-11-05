import { Flex, Text } from "@chakra-ui/layout"
import LinkButton from "@components/shared/LinkButton"
import { Typo } from "@components/shared/Typo"
import Head from "next/head"
import { useRouter } from "next/router"
interface NotfoundPageProps {}

const NotfoundPage = ({}: NotfoundPageProps) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Page not found | Sipher</title>
            </Head>
            <Flex w="full" h="100vh" bg="black" bgImage="/images/bgBlack.png" align="center" justify="center">
                <Flex direction="column" align="center" maxW="64rem">
                    <Text
                        fontFamily="Hacked"
                        color="white"
                        fontSize={["12rem", "15rem"]}
                        lineHeight="12rem"
                        letterSpacing="4px"
                        sx={{
                            textShadow: "-5px 0px 0px rgb(125, 255, 125), 5px 0px rgb(255, 75, 75)",
                        }}
                        mb={4}
                    >
                        404
                    </Text>
                    <Typo.Heading isGradient fontSize="3xl">
                        PAGE NOT FOUND
                    </Typo.Heading>
                    <Typo.BoldText textAlign="center">
                        OOPS! THE PAGE YOU'RE LOOKING FOR IS EITHER NOT AVAILABLE, LOADING INCORRECRLY, OR HAS BEEN LOST
                        SOMEWHERE IN THE METAVERSE.
                    </Typo.BoldText>
                    <LinkButton
                        text="Return Home"
                        size="large"
                        mt={12}
                        px={16}
                        onClick={() => router.push("/")}
                        cursor="pointer"
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default NotfoundPage
