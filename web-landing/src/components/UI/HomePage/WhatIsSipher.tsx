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
            <Img src="/images/pc/home/home_img.png" w="full" alt="What Is Sipher" mt={8} />
            <SimpleGrid columns={[1, 3]} mt={16} spacing={8} px={4}>
                {content.map(item => (
                    <Flex direction="column" key={item.headline}>
                        <GradientOutlineButton
                            w={["full", "auto"]}
                            text={item.headline}
                            rounded="full"
                            backgroundColor="black"
                            cursor="unset"
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
