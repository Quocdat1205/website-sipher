import { Box, Flex, Heading } from "@chakra-ui/react"
import { MyHeading } from "@sipher/web-components"
import { Typo } from "."

interface Props {
    title?: string
    description?: string
    srcImg?: string
    isChangeBG?: boolean
}

const HeaderBackground = ({ isChangeBG = false, srcImg = "/images/pc/bg-title.png", title, description }: Props) => {
    return (
        <Flex
            align="center"
            justify="center"
            bg={`url(${srcImg})`}
            bgRepeat="no-repeat"
            bgSize="cover"
            pt="11rem"
            pb="7rem"
            px="2rem"
            flexDir="column"
            h="100%"
            pos="relative"
        >
            <Typo.Heading mb={2}>{title}</Typo.Heading>
            <Typo.BoldText textAlign="center">{description}</Typo.BoldText>
            {isChangeBG && <Box pos="absolute" top="0" left="0" w="100%" h="100%" bg="blackAlpha.700" />}
        </Flex>
    )
}

export default HeaderBackground
