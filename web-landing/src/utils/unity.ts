import { UnityContext } from "react-unity-webgl"
import { isMobile,isSafari } from "react-device-detect"
// import { useUserAgent } from "next-useragent";

// const { isIos, isIpad, isIphone, isSafari } = useUserAgent( window.navigator.userAgent);
// const isIOS = isIos || isIpad || isIphone || isSafari || isMobile;

export const unityContext = (isMobile || isSafari)
    ? new UnityContext({
          loaderUrl: "/unity/mobile.loader.js",
          dataUrl: "/unity/mobile.data",
          frameworkUrl: "/mobile/mobile.framework.js",
          codeUrl: "/unity/mobile.wasm",
          webglContextAttributes: {
              powerPreference: "low-power",
              preserveDrawingBuffer: true,
          },
      })
    : new UnityContext({
          loaderUrl: "/unity/mobile.loader.js",
          dataUrl: "/unity/mobile.data",
          frameworkUrl: "/unity/mobile.framework.js",
          codeUrl: "/unity/mobile.wasm",
          webglContextAttributes: {
              powerPreference: "low-power",
              preserveDrawingBuffer: true,
          },
      })

export default unityContext
