import { Box, Flex, Heading } from "@chakra-ui/react"
import { MyHeading } from "@sipher/web-components"
import { Typo } from "."

interface Props {
    title?: string
    description?: string
    srcImg?: string
    isCoatedBg?: boolean
}

export const HeaderBackground = ({
    isCoatedBg = false,
    srcImg = "/images/pc/bg-title.png",
    title,
    description,
}: Props) => {
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
            direction="column"
            pos="relative"
        >
            {isCoatedBg && (
                <Box pos="absolute" zIndex="1" content="''" top="0" left="0" w="100%" h="100%" bg="blackAlpha.700" />
            )}
            <Typo.Heading zIndex={1} mb={2}>
                {title}
            </Typo.Heading>
            <Typo.BoldText textTransform="uppercase" zIndex={1} align="center">
                {description}
            </Typo.BoldText>
        </Flex>
    )
}

export default HeaderBackground
