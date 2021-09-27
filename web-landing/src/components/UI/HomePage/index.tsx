// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import HomeBody from "./HomeBody"

interface HomeUIProps {}

const HomeUI = ({}: HomeUIProps) => {
    return (
        <Flex bg="black" direction="column">
            <HomeBody />
        </Flex>
    )
}

export default HomeUI
