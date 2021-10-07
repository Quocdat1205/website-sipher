// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import Loader from "@components/shared/InitialLoader"
import { useStoreState } from "@store"
import HomeBody from "./HomeBody"

interface HomeUIProps {}

const HomeUI = ({}: HomeUIProps) => {
    const initialLoading = useStoreState(s => s.initialLoading)
    return (
        <Flex bg="black" direction="column">
            <Loader isVisible={initialLoading} />
            <HomeBody />
        </Flex>
    )
}

export default HomeUI
