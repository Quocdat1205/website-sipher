import { browserName } from "react-device-detect"
import { Box, Flex, Img, Grid } from "@chakra-ui/react"
import unityContext from "src/utils/unity"
import { useStoreActions } from "@store"
import FirstScreen from "./FirstScreen"
import AmountScreen from "./AmountScreen"
import Unity from "react-unity-webgl"
import { MouseEvent, useEffect, useRef } from "react"
import CountDownScreen from "./CountDownScreen"
import PlayScreen from "./PlayScreen"
import PlayForJoyScreen from "./PlayForJoyScreen"
interface HeroProps {}

export const fontSizes = ["3.0rem", "3.5rem", "4rem", "4.5rem"]

const Hero = ({}: HeroProps) => {
    const setInitialLoading = useStoreActions(action => action.setInitialLoading)
    if (browserName !== "Safari") {
        unityContext.on("loaded", () => setInitialLoading(false))
    } else {
        setInitialLoading(false)
    }

    const ctnRef = useRef<HTMLDivElement>(null)
    const handleMouseWheel = () => {
        if (ctnRef.current)
            unityContext.send("Main Camera", "angle", (window.scrollY / ctnRef.current.clientHeight) * 5)
    }

    const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        unityContext.send("Main Camera", "effectNekoX", e.clientX / window.innerWidth)
    }

    useEffect(() => {
        if (true) setInitialLoading(false)
        // if (browserName === "Safari") setInitialLoading(false)
    }, [setInitialLoading])

    useEffect(() => {
        window.addEventListener("scroll", handleMouseWheel)
        return () => window.removeEventListener("scroll", handleMouseWheel)
    }, [])

    return (
        <Box pos="relative" zIndex={0} overflowX="hidden" onMouseMove={handleMouseMove} ref={ctnRef} id="hero">
            <Flex direction="column" w="full">
                <FirstScreen />
                <CountDownScreen />
                <AmountScreen />
                <PlayForJoyScreen />
                <PlayScreen />
            </Flex>
            {false ? (
                <Box pos="fixed" top={0} left={0} h="full" w="full">
                    <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }} />
                </Box>
            ) : (
                <Grid pos="fixed" top={0} left={0} h="full" w="full" placeItems="center">
                    <Img src="/images/pc/home/NEKO_3D.png" alt="sipher-logo" w="full" maxW="35rem" />
                </Grid>
            )}
        </Box>
    )
}

export default Hero
