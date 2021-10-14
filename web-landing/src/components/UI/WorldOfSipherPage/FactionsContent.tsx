// * DESCRIPTION:

import { Box, Flex, VStack, Img } from "@chakra-ui/react"
import { factionsContent } from "@constant/content/why"
import { MyHeading, MyText } from "@sipher/web-components"

const FactionsContent = () => {
    return (
        <VStack spacing={8}>
            <Flex p={[2, 4]} bg="about.cardGray" align="center" flexDir={["column", "row"]} rounded="md">
                <Box flex={1}>
                    <Img src="/images/pc/why/faction1.png" alt="MAXIMALIST TEMPLARS" />
                </Box>
                <Box flex={2} ml={[0, 4]} mt={[4, 0]}>
                    <MyHeading>MAXIMALIST TEMPLARS</MyHeading>
                    <MyText mt={2}>{factionsContent.maximalistTemplars}</MyText>
                </Box>
            </Flex>
            <Flex p={[2, 4]} bg="about.cardGray" align="center" flexDir={["column", "row"]} rounded="md">
                <Box flex={1}>
                    <Img src="/images/pc/why/faction2.png" alt="CENTURION SCHOLARS" />
                </Box>
                <Box flex={2} ml={[0, 4]} mt={[4, 0]}>
                    <MyHeading>CENTURION SCHOLARS</MyHeading>
                    <MyText mt={2}>{factionsContent.centurionScholars}</MyText>
                </Box>
            </Flex>
            <Flex p={[2, 4]} bg="about.cardGray" align="center" flexDir={["column", "row"]} rounded="md">
                <Box flex={1}>
                    <Img src="/images/pc/why/faction3.png" alt="SHADE BROTHERHOOD" />
                </Box>
                <Box flex={2} ml={[0, 4]} mt={[4, 0]}>
                    <MyHeading>SHADE BROTHERHOOD</MyHeading>
                    <MyText mt={2}>{factionsContent.shadeBrotherhood}</MyText>
                </Box>
            </Flex>
        </VStack>
    )
}

export default FactionsContent