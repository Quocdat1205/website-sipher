// * DESCRIPTION:

import { Flex, FlexProps } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"

interface ColonProps extends FlexProps {}

const Colon = (props: ColonProps) => {
    return (
        <Flex align="center" {...props} px={1} pb={5}>
            <MyText fontSize="lg" fontWeight="bold">
                :
            </MyText>
        </Flex>
    )
}

export default Colon
