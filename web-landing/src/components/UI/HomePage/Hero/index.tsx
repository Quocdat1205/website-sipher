import { Box, Flex, Img } from "@chakra-ui/react";
import unityContext from "src/utils/unity";
import { useStoreActions } from "@store";
import FirstScreen from "./FirstScreen";
import AmountScreen from "./AmountScreen";
import Unity from "react-unity-webgl";
import { MouseEvent, useEffect, useRef } from "react";
import CountDownScreen from "./CountDownScreen";
import PlayScreen from "./PlayScreen";
import PlayForJoyScreen from "./PlayForJoyScreen";

import { useUserAgent } from "next-useragent";

export const fontSizes = ["3.0rem", "3.5rem", "4rem", "4.5rem"];

interface HeroProps {
  uaString: string;
}

const Hero = ({ uaString }) => {
  const { isIos, isIpad, isIphone, isSafari } = useUserAgent(uaString || window.navigator.userAgent);
  const isIOS = isIos || isIpad || isIphone || isSafari;
  const setInitialLoading = useStoreActions((action) => action.setInitialLoading);
  unityContext.on("loaded", () => setInitialLoading(false));
  const ctnRef = useRef<HTMLDivElement>(null);
  const handleMouseWheel = () => {
    if (ctnRef.current) unityContext.send("Main Camera", "angle", (window.scrollY / ctnRef.current.clientHeight) * 5);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    unityContext.send("Main Camera", "effectNekoX", e.clientX / window.innerWidth);
  };

//   useEffect(() => {
//     if (isIOS) setInitialLoading(false);
//   }, [setInitialLoading, isIOS]);

  useEffect(() => {
    window.addEventListener("scroll", handleMouseWheel);
    return () => window.removeEventListener("scroll", handleMouseWheel);
  }, []);

  return (
    <Box pos="relative" zIndex={0} overflowX="hidden" onMouseMove={handleMouseMove} ref={ctnRef} id="hero">
      <Flex direction="column" w="full">
        <FirstScreen />
        <CountDownScreen isIOS={isIOS} />
        <AmountScreen />
        <PlayForJoyScreen isIOS={isIOS} />
        <PlayScreen />
      </Flex>
      {/* {isIOS ? (
                <Flex align="center" justify="center" pos="fixed" top={0} left={0} h="full" w="full">
                    <Img
                        src="/images/pc/home/NEKO_3D.png"
                        alt="sipher-logo"
                        w="full"
                        maxW={["36rem", "36rem", "36rem", "40rem", "44rem"]}
                    />
                </Flex>
            ) : (
                <Box pos="fixed" top={0} left={0} h="full" w="full">
                    <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }} />
                </Box>
            )} */}
      <Box pos="fixed" top={0} left={0} h="full" w="full">
        <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }} />
      </Box>
    </Box>
  );
};

export default Hero;
