// * DESCRIPTION:

import { Box, BoxProps } from "@chakra-ui/layout"

interface BackgroundContainerProps extends BoxProps {
    image?: string
}

export const BackgroundContainer = ({ image = "/images/pc/home/homenew2.png", ...rest }: BackgroundContainerProps) => {
    return (
        <Box bgImage={image} bgSize="contain" minH="100%" overflowY="auto" overflowX="hidden" py={8} px={4} {...rest} />
    )
}

export default BackgroundContainer
