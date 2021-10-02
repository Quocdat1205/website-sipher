// * DESCRIPTION:

import { Flex, FlexProps } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"

interface ColonProps extends FlexProps {}

const Colon = (props: ColonProps) => {
    return (
        <Flex h={8} align="center" {...props}>
            <MyText>:</MyText>
        </Flex>
    )
}

export default Colon
