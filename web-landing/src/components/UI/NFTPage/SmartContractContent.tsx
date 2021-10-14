import { Box, Stack, Image } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import { GradientHeading, MyText } from "@sipher/web-components"
import React from "react"

interface Props {}

const SmartContractContent = (props: Props) => {
    return (
        <Stack
            flexDir={["column-reverse", "column-reverse", "row"]}
            w="full"
            maxW={["48rem", "48rem", "48rem", "56rem", "72rem"]}
            align="center"
            px={4}
        >
            <Box p={4} flex={1}>
                <Typo.Heading isGradient textAlign={["center", "center", "left"]}>
                    Smart Contract
                </Typo.Heading>
                <Typo.Text textAlign={["center", "center", "left"]}>
                    Our smart contract address is carefully coded based on the standards of ERC-721 to allow for safety
                    and digital fungible and non-fungible assets functionalities. This will allow for longevity of our
                    project, our characters and our items, growing together with Sipheria.
                </Typo.Text>
            </Box>
            <Box flex={1}>
                <Image src="/images/pc/laboratory/laboratory1.png" alt="" />
            </Box>
        </Stack>
    )
}

export default SmartContractContent
