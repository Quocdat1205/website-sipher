import { Box, Flex } from "@chakra-ui/react"
import { BoldText, Typo } from "."
import Image from "next/image"

interface HeaderBackgroundProps {
    title: string
    description: string
    srcImg?: string
    isCoatedBg?: boolean
}

export const HeaderBackground = ({
    isCoatedBg = false,
    srcImg = "/images/pc/bg-title.png",
    title,
    description,
}: HeaderBackgroundProps) => {
    return (
        <Flex
            w="full"
            align="center"
            justify="center"
            pt="11rem"
            pb="7rem"
            px={["1rem", "2rem"]}
            direction="column"
            pos="relative"
        >
            <Image quality={80} alt="bg-header" src={srcImg} layout="fill" objectFit="cover" />
            {isCoatedBg && (
                <Box pos="absolute" zIndex="1" content="''" top="0" left="0" w="100%" h="100%" bg="blackAlpha.700" />
            )}
            <Typo.Heading zIndex={1} mb={2}>
                {title}
            </Typo.Heading>
            <BoldText zIndex={1} textAlign="center">
                {description}
            </BoldText>
        </Flex>
    )
}

export default HeaderBackground
