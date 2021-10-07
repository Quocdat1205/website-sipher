// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import Loader from "@components/shared/InitialLoader"
import { useStoreActions, useStoreState } from "@store"
import { useEffect } from "react"
import HomeBody from "./HomeBody"

interface HomeUIProps {}

const HomeUI = ({}: HomeUIProps) => {
    const initialLoading = useStoreState(s => s.initialLoading)
    const setInitialLoading = useStoreActions(a => a.setInitialLoading)
    useEffect(() => {
        return () => setInitialLoading(true)
    }, [setInitialLoading])

    return (
        <Flex bg="black" direction="column">
            <Loader isVisible={initialLoading} />
            <HomeBody />
        </Flex>
    )
}

export default HomeUI
