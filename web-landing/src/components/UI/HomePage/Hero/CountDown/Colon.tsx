// * DESCRIPTION:

import { Flex, FlexProps } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"

interface ColonProps extends FlexProps {}

const Colon = (props: ColonProps) => {
    return (
        <Flex pb={[6, 6, 6, 6, 4]} align="center" {...props}>
            <MyText fontSize="2xl" fontWeight="bold" color="main.orange">
                :
            </MyText>
        </Flex>
    )
}

export default Colon
