// * DESCRIPTION:

import { Flex } from "@chakra-ui/layout"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import HomeBody from "./HomeBody"

interface HomeUIProps {
    uaString: string
}

const HomeUI = ({ uaString }: HomeUIProps) => {
    const ctnRef = useRef<HTMLDivElement>(null)
    const router = useRouter()
    useEffect(() => {
        if (ctnRef.current) {
            ctnRef.current.scrollTop = 0
        }
    }, [router.pathname])

    return (
        <Flex flex={1} overflow="overlay" direction="column" id="body" bg="black" ref={ctnRef}>
            <HomeBody uaString={uaString} />
        </Flex>
    )
}

export default HomeUI
