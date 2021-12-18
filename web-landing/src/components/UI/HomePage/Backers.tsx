// * DESCRIPTION:

import { Stack, Wrap, WrapItem, Box, Img } from "@chakra-ui/react"
import { TextContainer } from "@components/shared"
import Image from "next/image"

const smallBackers = [
    { path: "/images/icons/backers/defiance_capital.png", alt: "DeFiance Capital" },
    { path: "/images/icons/backers/signum_capital.png", alt: "Signum Capital" },
    { path: "/images/icons/backers/alameda_research.png", alt: "Alameda Research" },
    { path: "/images/icons/backers/cmtdigital.png", alt: "CMTDIGITAL" },
    { path: "/images/icons/backers/dragonfly_capital.png", alt: "Dragonfly Capital" },
    { path: "/images/icons/backers/fenbushi_capital.png", alt: "Fenbushi Capital" },
    { path: "/images/icons/backers/delphi_digital.png", alt: "Delphi Digital" },
    { path: "/images/icons/backers/bitkraft.png", alt: "Bitkraft" },
    { path: "/images/icons/backers/hyperchain.png", alt: "Hyperchain Capital" },
    { path: "/images/icons/backers/gbv.png", alt: "GBV" },
    { path: "/images/icons/backers/sfermion.png", alt: "Sfermion" },
    { path: "/images/icons/backers/merit_circle.png", alt: "Merit Circle" },
    { path: "/images/icons/backers/coin98.png", alt: "Coin 98" },
    { path: "/images/icons/backers/kyber_network.png", alt: "Kyber Network" },
    { path: "/images/icons/backers/yield_guild.png", alt: "Yield Guild" },
]

const Backers = () => {
    return (
        <TextContainer headline="Backers" px={4} maxW={["48rem", "48rem", "56rem"]}>
            <Stack
                w="full"
                justify="space-between"
                align="center"
                px={[8, 0]}
                spacing={8}
                direction={["column", "row", "row"]}
            >
                <Box>
                    <Image
                        quality={90}
                        width={198}
                        height={79}
                        src="/images/icons/backers/new_arrington_capital.png"
                        alt="Arrington XP Capital"
                    />
                </Box>
                <Box>
                    <Image
                        quality={90}
                        width={244}
                        height={40}
                        src="/images/icons/backers/new_konvoy.png"
                        alt="Konvoy Ventures"
                    />
                </Box>
                <Box>
                    <Image quality={90} width={165} height={42} src="/images/icons/backers/hashed.png" alt="Hashed" />
                </Box>
            </Stack>
            <Wrap mt={8} justify="space-around" align="center" spacing={14} my={8}>
                {smallBackers.map(backer => (
                    <WrapItem
                        pos="relative"
                        key={backer.alt}
                        overflow="hidden"
                        flexBasis={["30%", "auto"]}
                        justifyContent="center"
                    >
                        <Img src={backer.path} alt={backer.alt} />
                    </WrapItem>
                ))}
            </Wrap>
        </TextContainer>
    )
}

export default Backers
