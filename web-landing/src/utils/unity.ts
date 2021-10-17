import { UnityContext } from "react-unity-webgl"
import { isMobile } from "react-device-detect"

export const unityContext = isMobile
    ? new UnityContext({
          loaderUrl: "/unity/neko-mobile.loader.js",
          dataUrl: "/unity/neko-mobile.data",
          frameworkUrl: "/unity/neko-mobile.framework.js",
          codeUrl: "/unity/neko-mobile.wasm",
          webglContextAttributes: {
              powerPreference: "low-power",
              preserveDrawingBuffer: true,
          },
      })
    : new UnityContext({
          loaderUrl: "/unity/noscroll.loader.js",
          dataUrl: "/unity/noscroll.data",
          frameworkUrl: "/unity/noscroll.framework.js",
          codeUrl: "/unity/noscroll.wasm",
          webglContextAttributes: {
              powerPreference: "low-power",
              preserveDrawingBuffer: true,
          },
      })

export default unityContext
