// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import Body from "./Body"

interface FaqAndSocialUIProps {}

const FaqAndSocialUI = ({}: FaqAndSocialUIProps) => {
    return (
        <Flex bg="black" direction="column">
            <Body />
        </Flex>
    )
}

export default FaqAndSocialUI
