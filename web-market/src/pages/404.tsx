import { Flex, Text } from "@chakra-ui/layout"
import { Typo } from "@components/shared"
import LinkButton from "@components/shared/LinkButton"
import Metadata from "@components/shared/Metadata"
import { useRouter } from "next/router"

const NotfoundPage = () => {
    const router = useRouter()
    return (
        <>
            <Metadata title="Page not found | Sipher" description="" />
            <Flex
                w="full"
                h="100vh"
                bg="black"
                bgImage="/images/pc/home/homenew2.png"
                align="center"
                justify="center"
                p={4}
            >
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
                        {
                            "OOPS! THE PAGE YOU'RE LOOKING FOR IS EITHER NOT AVAILABLE, LOADING INCORRECRLY, OR HAS BEEN LOST SOMEWHERE IN THE METAVERSE."
                        }
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
