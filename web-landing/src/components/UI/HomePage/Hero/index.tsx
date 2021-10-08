// * DESCRIPTION:

import { Box, Flex } from "@chakra-ui/react"
import Unity from "react-unity-webgl"
import unityContext from "src/utils/unity"
import { useStoreActions } from "@store"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import { useState } from "react"
import Screen3 from "./Screen3"
import Screen4 from "./Screen4"
import Screen5 from "./Screen5"
interface HeroProps {}

export const variants = {
    visible: { opacity: 1, y: 0, transformOrigin: "50% 100% 0" },
    hidden: { opacity: 0, y: 100, transformOrigin: "50% 100% 0" },
}

const Hero = ({}: HeroProps) => {
    const setInitialLoading = useStoreActions(action => action.setInitialLoading)

    unityContext.on("loaded", () =>
        setTimeout(() => {
            setInitialLoading(false)
        }, 2000)
    )
    unityContext.send("Main Camera", "next", 2)
    return (
        <Box pt={[24, 0, 0]} pos="relative" zIndex={0} overflowX="hidden">
            <Flex
                direction="column"
                w="full"
                sx={{
                    scrollSnapType: "y mandatory",
                }}
            >
                <Screen1 />
                <Screen2 />
                <Screen3 />
                <Screen4 />
                <Screen5 />
            </Flex>
            <Box pos="fixed" top={0} left={0} h="full" w="full">
                <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }} />
            </Box>
        </Box>
    )
}

export default Hero
