import { Img } from "@chakra-ui/image"
import { Flex, SimpleGrid } from "@chakra-ui/layout"
import { GradientOutlineButton, TextContainer, Typo } from "@components/shared"
import { content, definition } from "@constant/content/whatIsSipher"
interface WhatIsSipherProps {}

const WhatIsSipher = ({}: WhatIsSipherProps) => {
    return (
        <TextContainer headline="What Is Sipher">
            <Typo.BoldText textAlign="center" textTransform="uppercase" px={4}>
                {definition}
            </Typo.BoldText>
            <Img
                src="https://s3-alpha-sig.figma.com/img/b0bd/73c7/caf43e86b11778686a5d2e4632181383?Expires=1635120000&Signature=bI8UqPIFpPo0towMU1xg3HM6Cong7MfuGQejz3IFxAPW6F7f-ZhAZP~lmu-~Hr1OfLNn7~bgp8PylbTE0zHhFoKMaIyU7t58JLEY3dCCFT64s4ynrb~bGHWMuFUdZkmUmFobrF9y9iq708N48cx6kSl9x4ISuOIYTga~E2DkyvBSUk51m4Mid86NIqh23LwLcu9W12YR3CrIO~~k4NXZ66he6eaYv-kpUCJr0tId1i-9oPNSaX~M1ZQkTtzuTNFpyysuXLoE6y-dzfCxUkiv4mMS52slMwInZsCVVLEBtnW2WRcA5-XsxfijmBq5-rcjRCmesRCOOPVUAjX9FCt4kQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                w="full"
                alt="What Is Sipher"
                mt={8}
            />
            <SimpleGrid columns={[1, 3]} mt={16} spacing={[8, 4]} px={4}>
                {content.map(item => (
                    <Flex direction="column" key={item.headline}>
                        <GradientOutlineButton
                            w={["full", "auto"]}
                            text={item.headline}
                            rounded="full"
                            backgroundColor="black"
                        />
                        <Typo.Text textAlign="justify" mt={4}>
                            {item.text}
                        </Typo.Text>
                    </Flex>
                ))}
            </SimpleGrid>
        </TextContainer>
    )
}

export default WhatIsSipher
