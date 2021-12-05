// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import Body from "./Body"

interface HomeUIProps {}

const PrivacyPolicyUI = ({}: HomeUIProps) => {
    return (
        <Flex bg="black" direction="column">
            <Body />
        </Flex>
    )
}

export default PrivacyPolicyUI
