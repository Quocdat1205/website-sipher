// * DESCRIPTION:

import { Stack, Img } from "@chakra-ui/react"
import { TextContainer } from "@components/shared"

interface BackersProps {}

const Backers = ({}: BackersProps) => {
    return (
        <TextContainer headline="Backers">
            <Stack w="full" justify="space-between" align="center" spacing={8} direction={["column", "column", "row"]}>
                <Img src="/images/icons/backer_konvoy_ventures.png" h="2rem" />
                <Img src="/images/icons/backer_hashed.png" h="2rem" />
                <Img src="/images/icons/backer_arrington.png" h="2rem" />
                <Img src="/images/icons/backer_dragonfly.png" h="2rem" />
            </Stack>
            <Stack
                w="full"
                justify="space-between"
                align="center"
                mt={8}
                spacing={8}
                direction={["column", "column", "row"]}
            >
                <Img src="/images/icons/backer_alameda.png" h="2rem" />
                <Img src="/images/icons/backer_cmtdigital.png" h="2rem" />
                <Img src="/images/icons/backer_signum.png" h="2rem" />
                <Img src="/images/icons/backer_fenbushi.png" h="2rem" />
            </Stack>
        </TextContainer>
    )
}

export default Backers
