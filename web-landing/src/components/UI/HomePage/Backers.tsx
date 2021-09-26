// * DESCRIPTION:

import { Box, HStack, Img } from "@chakra-ui/react"
import { TextContainer } from "@components/shared"

interface BackersProps {}

const Backers = ({}: BackersProps) => {
    return (
        <TextContainer headline="Backers">
            <HStack w="full" justify="space-between" spacing={8}>
                <Img src="/images/icons/backer_konvoy_ventures.png" h="2rem" />
                <Img src="/images/icons/backer_hashed.png" h="2rem" />
                <Img src="/images/icons/backer_arrington.png" h="2rem" />
                <Img src="/images/icons/backer_dragonfly.png" h="2rem" />
            </HStack>
            <HStack w="full" justify="space-between" spacing={8} mt={8}>
                <Img src="/images/icons/backer_alameda.png" h="2rem" />
                <Img src="/images/icons/backer_cmtdigital.png" h="2rem" />
                <Img src="/images/icons/backer_signum.png" h="2rem" />
                <Img src="/images/icons/backer_fenbushi.png" h="2rem" />
            </HStack>
        </TextContainer>
    )
}

export default Backers
