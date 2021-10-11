// * DESCRIPTION:

import { Box, BoxProps } from "@chakra-ui/layout"

interface BackgroundContainerProps extends BoxProps {
    image?: string
}

export const BackgroundContainer = ({ image = "/images/pc/home/homenew2.png", ...rest }: BackgroundContainerProps) => {
    return <Box bgImage={image} bgSize="contain" overflowX="hidden" px={4} {...rest} />
}

export default BackgroundContainer
