import { browserName } from "react-device-detect";
import { Box, Flex, Img } from "@chakra-ui/react";
import unityContext from "src/utils/unity";
import { useStoreActions } from "@store";
import FirstScreen from "./FirstScreen";
import AmountScreen from "./AmountScreen";
import Unity from "react-unity-webgl";
import { MouseEvent, useEffect, useState, useRef } from "react";
import CountDownScreen from "./CountDownScreen";
import BenefitsScreen from "./BenefitsScreen";
import PlayScreen from "./PlayScreen";
interface HeroProps {}

export const fontSizes = ["3.0rem", "3.5rem", "4rem", "4.5rem"];

const Hero = ({}: HeroProps) => {
  const setInitialLoading = useStoreActions((action) => action.setInitialLoading);
  unityContext.on("loaded", () => setInitialLoading(false));
  // const [scrollY, setScrollY] = useState(0)
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (delay) {
      timeout = setTimeout(() => {
        setDelay(false);
      }, 50);
    }
    return () => clearTimeout(timeout);
  }, [delay, setDelay]);

  const ctnRef = useRef<HTMLDivElement>(null);
  const handleMouseWheel = () => {
    if (ctnRef.current) unityContext.send("Main Camera", "angle", (window.scrollY / ctnRef.current.clientHeight) * 5);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (delay) return;
    else {
      unityContext.send("Main Camera", "effectNekoX", e.clientX / window.innerWidth);
      // unityContext.send("Main Camera", "effectNekoY", 1 - e.clientY / window.innerHeight)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleMouseWheel);
    return () => window.removeEventListener("scroll", handleMouseWheel);
  }, []);

  return (
    <Box
      pos="relative"
      zIndex={0}
      overflowX="hidden"
      onMouseMove={handleMouseMove}
      // onWheel={handleMouseWheel}
      ref={ctnRef}
      id="hero"
    >
      <Flex direction="column" w="full">
        <FirstScreen />
        <CountDownScreen />
        <AmountScreen />
        <BenefitsScreen />
        <PlayScreen />
      </Flex>
      {/* {browserName !== "Chrome" && (
        <Box pos="fixed" top={0} left={0} h="full" w="full">
          <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }} />
        </Box>
      )}
      {browserName === "Chrome" && (
        <Box pos="fixed" top={0} left={0} h="full" w="full">
            <Img src="/images/mainlogo.svg" style={{ width: "100%", height: "100%" }} alt="sipher-logo" />
        </Box>
      )} */}
      <Box pos="fixed" top={0} left={0} h="full" w="full">
        <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }} />
      </Box>
    </Box>
  );
};

export default Hero;
