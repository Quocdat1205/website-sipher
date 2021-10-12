import { Box, Flex } from "@chakra-ui/react"
import unityContext from "src/utils/unity"
import { useStoreActions } from "@store"
import FirstScreen from "./FirstScreen"
import HeroScreen from "./HeroScreen"
import AmountScreen from "./AmountScreen"
import CountDown from "./CountDown"
import { Typo } from "@components/shared"
import Unity from "react-unity-webgl"
import { MouseEvent, MouseEventHandler, useEffect, useState } from "react"
interface HeroProps {}

const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates inventore soluta rerum similique totam facilis cupiditate, cum aut incidunt quod. Consequatur eveniet, laborum, cumque itaque officiis rem inventore iste sequi dicta dolorum magnam reiciendis aut nemo, hic nam doloremque eius nostrum quisquam accusantium ducimus aliquid earum? Dignissimos, placeat velit?"

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

    const [delay, setDelay] = useState(false)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (delay) {
            timeout = setTimeout(() => {
                setDelay(false)
            }, 250)
        }
        return () => clearTimeout(timeout)
    }, [delay, setDelay])

    const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        if (delay) return
        else {
            // console.log(
            //     "Mouse Event:",
            //     Math.floor(e.clientX / (window.innerWidth / 3)) - 1,
            //     Math.floor(e.clientY / (window.innerHeight / 3)) - 1
            // )
            // unityContext.send("Main Camera", "effectNekoX", Math.floor(e.clientX / (window.innerWidth / 3)) - 1)
            // unityContext.send("Main Camera", "effectNekoY", Math.floor(e.clientY / (window.innerHeight / 3)) - 1)
            // setDelay(true)

            console.log(
                    "Mouse Event:",
                    (e.clientX / (window.innerWidth) ),
                    (e.clientY / (window.innerHeight)  )
                )
            unityContext.send("Main Camera", "effectNekoX", (e.clientX / (window.innerWidth) ))
            unityContext.send("Main Camera", "effectNekoY", 1-(e.clientY / (window.innerHeight)  ))
            setDelay(true)
        }
    }

    return (
        <Box pt={[24, 0, 0]} pos="relative" zIndex={0} overflowX="hidden" onMouseMove={handleMouseMove}>
            <Flex direction="column" w="full">
                <FirstScreen />
                <HeroScreen
                    position="L"
                    heading={<CountDown deadline={1635645600000} />}
                    content={content}
                    angle={2}
                    heading2=""
                />
                <AmountScreen />
                <HeroScreen
                    position="L"
                    heading={
                        <Typo.Heading isGradient textAlign="left" fontWeight={900} fontSize={["4rem", "5rem"]} mb={0}>
                            Benefits
                        </Typo.Heading>
                    }
                    content={content}
                    angle={4}
                />
                <HeroScreen
                    position="R"
                    heading={
                        <Typo.Heading isGradient textAlign="left" fontWeight={900} fontSize={["4rem", "5rem"]} mb={0}>
                            Play to earn
                        </Typo.Heading>
                    }
                    content={content}
                    angle={5}
                />
            </Flex>
            <Box pos="fixed" top={0} left={0} h="full" w="full">
                <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }} />
            </Box>
        </Box>
    )
}

export default Hero
