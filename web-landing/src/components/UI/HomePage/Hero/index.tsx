import { Box, Flex } from "@chakra-ui/react";
import unityContext from "src/utils/unity";
import { useStoreActions } from "@store";
import FirstScreen from "./FirstScreen";
import HeroScreen from "./HeroScreen";
import AmountScreen from "./AmountScreen";
import CountDown from "./CountDown";
import { Typo } from "@components/shared";
import Unity from "react-unity-webgl";
import { MouseEvent, MouseEventHandler, useEffect, useState, useRef } from "react";
interface HeroProps {}

const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates inventore soluta rerum similique totam facilis cupiditate, cum aut incidunt quod. Consequatur eveniet, laborum, cumque itaque officiis rem inventore iste sequi dicta dolorum magnam reiciendis aut nemo, hic nam doloremque eius nostrum quisquam accusantium ducimus aliquid earum? Dignissimos, placeat velit?";

export const variants = {
  visible: { opacity: 1, y: 0, transformOrigin: "50% 100% 0" },
  hidden: { opacity: 0, y: 100, transformOrigin: "50% 100% 0" },
};

const Hero = ({}: HeroProps) => {
    const setInitialLoading = useStoreActions(action => action.setInitialLoading)
    unityContext.on("loaded", () =>
        setTimeout(() => {
            setInitialLoading(false)
        }, 2000)
    )
    // const [scrollY, setScrollY] = useState(0)
    const [delay, setDelay] = useState(false)
    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (delay) {
            timeout = setTimeout(() => {
                setDelay(false)
            }, 50)
        }
        return () => clearTimeout(timeout)
    }, [delay, setDelay])

    // const [scrollDelay, setScrollDelay] = useState(false)
    // useEffect(() => {
    //     let timeout: NodeJS.Timeout
    //     if (scrollDelay) {
    //         timeout = setTimeout(() => {
    //             setScrollDelay(false)
    //         }, 500)
    //     }
    //     return () => clearTimeout(timeout)
    // }, [scrollDelay, setScrollDelay])

    // useEffect(() => {
    //     console.log("Scroll Y:", scrollY)
    //     if (scrollDelay) return
    //     else if (ctnRef.current) {
    //         console.log("Scroll", scrollY, "Height", ctnRef.current.getBoundingClientRect().height)
    //         unityContext.send("Main Camera", "angle", (scrollY / ctnRef.current.getBoundingClientRect().height) * 5)
    //         setScrollDelay(true)
    //     }
    // }, [scrollY])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (delay) return;
    else {
      unityContext.send("Main Camera", "effectNekoX", e.clientX / window.innerWidth);
      unityContext.send("Main Camera", "effectNekoY", 1 - e.clientY / window.innerHeight);
      // setDelay(true)
    }
  };
  const ctnRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setScrollY(window.scrollY)
    //     })
    //     return () =>
    //         window.removeEventListener("scroll", () => {
    //             setScrollY(window.scrollY)
    //         })
    // }, [scrollY])

  return (
    <Box
      pt={[24, 0, 0]}
      pos="relative"
      zIndex={0}
      overflowX="hidden"
      onMouseMove={handleMouseMove}
      onWheel={handleMouseMWheel}
      ref={ctnRef}
    >
      <Flex direction="column" w="full">
        <FirstScreen />
        <HeroScreen position="L" heading={<CountDown deadline={1635645600000} />} content={content} heading2="" />
        <AmountScreen />
        <HeroScreen
          position="L"
          heading={
            <Typo.Heading isGradient textAlign="left" fontWeight={900} fontSize={["4rem", "5rem"]} mb={0}>
              Benefits
            </Typo.Heading>
          }
          content={content}
        />
        <HeroScreen
          position="R"
          heading={
            <Typo.Heading isGradient textAlign="left" fontWeight={900} fontSize={["4rem", "5rem"]} mb={0}>
              Play to earn
            </Typo.Heading>
          }
          content={content}
        />
      </Flex>
      <Box pos="fixed" top={0} left={0} h="full" w="full">
        <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }} />
      </Box>
    </Box>
  );
};

export default Hero;
