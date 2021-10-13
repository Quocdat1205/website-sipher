// * DESCRIPTION:

import { Flex, FlexProps } from "@chakra-ui/layout"

interface BackgroundContainerProps extends FlexProps {
    image?: string
}

export const BackgroundContainer = ({ image = "/images/pc/home/homenew2.png", ...rest }: BackgroundContainerProps) => {
    return (
        <Flex
            direction="column"
            bgImage={image}
            h="full"
            bgSize="contain"
            overflowX="hidden"
            px={4}
            flex={1}
            {...rest}
        />
    )
}

export default BackgroundContainer
