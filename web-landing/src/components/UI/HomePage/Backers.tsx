// * DESCRIPTION:

import { Stack, Img, Wrap, WrapItem, Box } from "@chakra-ui/react"
import { TextContainer } from "@components/shared"

interface BackersProps {}

const smallBackers = [
    { path: "/images/icons/backers/defiance_capital.png", alt: "DeFiance Capital" },
    { path: "/images/icons/backers/signum_capital.png", alt: "Signum Capital" },
    { path: "/images/icons/backers/dragonfly_capital.png", alt: "Dragonfly Capital" },
    { path: "/images/icons/backers/cmtdigital.png", alt: "CMTDIGITAL" },
    { path: "/images/icons/backers/alameda_research.png", alt: "Alameda Research" },
    { path: "/images/icons/backers/bitkraft.png", alt: "Bitkraft" },
    { path: "/images/icons/backers/delphi_digital.png", alt: "Delphi Digital" },
    { path: "/images/icons/backers/fenbushi_capital.png", alt: "Fenbushi Capital" },
    { path: "/images/icons/backers/sfermion.png", alt: "Sfermion" },
    { path: "/images/icons/backers/hyperchain.png", alt: "Hyperchain Capital" },
    { path: "/images/icons/backers/gbv.png", alt: "GBV" },
    { path: "/images/icons/backers/yield_guild.png", alt: "Yield Guild" },
]

const Backers = ({}: BackersProps) => {
    return (
        <TextContainer headline="Backers" px={4}>
            <Stack w="full" justify="space-between" align="center" spacing={8} direction={["column", "column", "row"]}>
                <Box>
                    <Img src="/images/icons/backers/1.png" alt="Mysterious Backer 1" />
                </Box>
                <Box>
                    <Img src="/images/icons/backers/2.png" alt="Mysterious Backer 2" />
                </Box>
                <Box>
                    <Img src="/images/icons/backers/3.png" alt="Mysterious Backer 3" />
                </Box>
            </Stack>
            <Wrap mt={8} justify="space-around" align="center" spacing={16} my={8}>
                {smallBackers.map(backer => (
                    <WrapItem key={backer.alt}>
                        <Img src={backer.path} alt={backer.alt} />
                    </WrapItem>
                ))}
            </Wrap>
        </TextContainer>
    )
}

export default Backers
