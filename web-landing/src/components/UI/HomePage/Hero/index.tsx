import { Box, Flex } from "@chakra-ui/react";
import unityContext from "src/utils/unity";
import { useStoreActions } from "@store";
import FirstScreen from "./FirstScreen";
import HeroScreen from "./HeroScreen";
import AmountScreen from "./AmountScreen";
import { Typo } from "@components/shared";
import Unity from "react-unity-webgl";
import { MouseEvent, useEffect, useState, useRef } from "react";
import CountDownScreen from "./CountDownScreen";
import BenefitsScreen from "./BenefitsScreen";
import PlayScreen from "./PlayScreen";
interface HeroProps {}

const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates inventore soluta rerum similique totam facilis cupiditate, cum aut incidunt quod. Consequatur eveniet, laborum, cumque itaque officiis rem inventore iste sequi dicta dolorum magnam reiciendis aut nemo, hic nam doloremque eius nostrum quisquam accusantium ducimus aliquid earum? Dignissimos, placeat velit?";

export const variants = {
  visible: { opacity: 1, y: 0, transformOrigin: "50% 100% 0" },
  hidden: { opacity: 0, y: 100, transformOrigin: "50% 100% 0" },
};

const Hero = ({}: HeroProps) => {
  const setInitialLoading = useStoreActions((action) => action.setInitialLoading);
  unityContext.on("loaded", () =>
    setTimeout(() => {
      setInitialLoading(false);
    }, 2000)
  );
  const [scrollY, setScrollY] = useState(0);
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
  // const handleMouseMWheel = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
  //     console.log("1");
  //     if (ctnRef.current)
  //         unityContext.send("Main Camera", "angle", (window.scrollY / ctnRef.current.clientHeight) * 5)
  // }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
      unityContext.send("Main Camera", "angle", (window.scrollY / ctnRef.current.clientHeight) * 5);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
  }, [scrollY]);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (delay) return;
    else {
      unityContext.send("Main Camera", "effectNekoX", e.clientX / window.innerWidth);
      unityContext.send("Main Camera", "effectNekoY", 1 - e.clientY / window.innerHeight);
    }
  };

  return (
    <Box pos="relative" zIndex={0} overflowX="hidden" onMouseMove={handleMouseMove} ref={ctnRef} id="hero">
      <Flex direction="column" w="full">
        <FirstScreen />
        <CountDownScreen />
        <AmountScreen />
        <BenefitsScreen />
        <PlayScreen />
      </Flex>
      <Box pos="fixed" top={0} left={0} h="full" w="full">
        <Unity unityContext={unityContext} style={{ width: "100%", height: "100%" }} />
      </Box>
    </Box>
  );
};

export default Hero;
