// * DESCRIPTION:

import { Flex, FlexProps } from "@chakra-ui/react"
import { GradientText } from "@sipher/web-components"

interface ColonProps extends FlexProps {}

const Colon = (props: ColonProps) => {
    return (
        <Flex h={12} align="center" {...props}>
            <GradientText fontSize="xl" fontWeight="bold">
                :
            </GradientText>
        </Flex>
    )
}

export default Colon
