import { UnityContext } from "react-unity-webgl"
import { isMobile,isSafari } from "react-device-detect"
// import { useUserAgent } from "next-useragent";

// const { isIos, isIpad, isIphone, isSafari } = useUserAgent( window.navigator.userAgent);
// const isIOS = isIos || isIpad || isIphone || isSafari || isMobile;

export const unityContext = (isMobile || isSafari)
    ? new UnityContext({
          loaderUrl: "/unity/neko-lighting.loader.js",
          dataUrl: "/unity/neko-lighting.data",
          frameworkUrl: "/unity/neko-lighting.framework.js",
          codeUrl: "/unity/neko-lighting.wasm",
          webglContextAttributes: {
              powerPreference: "low-power",
              preserveDrawingBuffer: true,
          },
      })
    : new UnityContext({
          loaderUrl: "/unity/unity11.loader.js",
          dataUrl: "/unity/unity11.data",
          frameworkUrl: "/unity/unity11.framework.js",
          codeUrl: "/unity/unity11.wasm",
          webglContextAttributes: {
              powerPreference: "low-power",
              preserveDrawingBuffer: true,
          },
      })

export default unityContext
