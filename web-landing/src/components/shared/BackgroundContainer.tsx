// * DESCRIPTION:

import { Box, BoxProps } from "@chakra-ui/layout"

interface BackgroundContainerProps extends BoxProps {
    image?: string
}

export const BackgroundContainer = ({ image = "/images/pc/background.jpg", ...rest }: BackgroundContainerProps) => {
    return <Box bgImage={image} bgSize="contain" minH="100%" overflow="auto" py={8} px={4} {...rest} />
}

export default BackgroundContainer
