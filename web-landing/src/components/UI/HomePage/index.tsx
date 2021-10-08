// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { Footer } from "@components/shared"
import Loader from "@components/shared/InitialLoader"
import { useStoreActions, useStoreState } from "@store"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import HomeBody from "./HomeBody"

interface HomeUIProps {}

const HomeUI = ({}: HomeUIProps) => {
    const initialLoading = useStoreState(s => s.initialLoading)
    const setInitialLoading = useStoreActions(a => a.setInitialLoading)
    useEffect(() => {
        return () => setInitialLoading(true)
    }, [setInitialLoading])
    const ctnRef = useRef<HTMLDivElement>(null)
    const router = useRouter()
    useEffect(() => {
        if (ctnRef.current) {
            ctnRef.current.scrollTop = 0
        }
    }, [router.pathname])
    return (
        <Flex flex={1} overflow="overlay" direction="column" id="body" bg="black" ref={ctnRef}>
            <Loader isVisible={initialLoading} />
            <HomeBody />
        </Flex>
    )
}

export default HomeUI
