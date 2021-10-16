import { Box, Flex, Img } from "@chakra-ui/react";
// import unityContext from "src/utils/unity";
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
  // const { isIos, isIpad, isIphone, isSafari } = useUserAgent(uaString || window.navigator.userAgent);
  // const isIOS = isIos || isIpad || isIphone || isSafari;
  const setInitialLoading = useStoreActions((action) => action.setInitialLoading);
  //
  // const ctnRef = useRef<HTMLDivElement>(null);
  // const handleMouseWheel = () => {
  //   if (ctnRef.current) unityContext.send("Main Camera", "angle", (window.scrollY / ctnRef.current.clientHeight) * 5);
  // };

  // const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
  //   unityContext.send("Main Camera", "effectNekoX", e.clientX / window.innerWidth);
  // };

  useEffect(() => {
    setInitialLoading(false);
  }, [setInitialLoading]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleMouseWheel);
  //   return () => window.removeEventListener("scroll", handleMouseWheel);
  // }, []);
  // unityContext.on("loaded", () => setInitialLoading(false));
  return (
    <Box pos="relative" zIndex={0} overflowX="hidden" id="hero">
      <Flex direction="column" w="full">
        <FirstScreen />
        <CountDownScreen />
        <AmountScreen />
        <PlayForJoyScreen />
        <PlayScreen />
      </Flex>
      {/* <Box pos="fixed" top={0} left={0} h="full" w="full">
        <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }} />
      </Box> */}
      <Flex align="center" justify="center" pos="fixed" top={0} left={0} h="full" w="full">
        <div>          
        <iframe src="https://web-necko-nine.vercel.app/" height="1080px" width="1920px"/>         
      </div>
      </Flex>
    </Box>
  );
};

export default Hero;
