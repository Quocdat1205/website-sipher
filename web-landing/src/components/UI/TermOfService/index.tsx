// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import Body from "./Body"

interface HomeUIProps {}

const TermOfServiceUI = ({}: HomeUIProps) => {
    return (
        <Flex bg="black" direction="column">
            <Body />
        </Flex>
    )
}

export default TermOfServiceUI
