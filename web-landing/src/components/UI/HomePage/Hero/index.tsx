// * DESCRIPTION:

import { Flex, Heading, Text } from "@chakra-ui/react"
import { LinkButton, MotionFlex, Typo } from "@components/shared"
import Title from "./Title"

interface FirstScreenProps {}

const FirstScreen = ({}: FirstScreenProps) => {
    return (
        <Flex
            direction="column"
            align="center"
            zIndex={2}
            justify="center"
            h="100vh"
            w="full"
            flexShrink={0}
            bgImage="/images/pc/home/background.png"
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
            p={4}
            pt={[16, 16, 4]}
        >
            <Flex direction="column" align="center" justify="center" w="full" maxW="64rem">
                <Title text="$SIPHER TOKEN" />
                <Title text="PUBLIC SALE" startIndex={"$SIPHER TOKEN".length} />
                <MotionFlex
                    direction="column"
                    align="center"
                    mt={8}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 2.5,
                    }}
                >
                    <Typo.Heading textAlign="center" mb={2}>
                        COMING SOON
                    </Typo.Heading>
                    <Typo.BoldText mb={8} textAlign="center">
                        BE PART OF THE SIPHER UNIVERSE
                    </Typo.BoldText>
                    <Flex>
                        <LinkButton text="follow us on medium" size="large" href="https://medium.com/SIPHERxyz" />
                    </Flex>
                </MotionFlex>
            </Flex>
        </Flex>
    )
}

export default FirstScreen
