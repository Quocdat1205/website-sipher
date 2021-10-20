import { UnityContext } from "react-unity-webgl"
import { isMobile,isSafari } from "react-device-detect"

export const unityContext = (isMobile || isSafari)
    ? new UnityContext({
          loaderUrl: "/unity/mobile.loader.js",
          dataUrl: "/unity/mobile.data",
          frameworkUrl: "/unity/mobile.framework.js",
          codeUrl: "/unity/mobile.wasm",
          webglContextAttributes: {
              powerPreference: "low-power",
              preserveDrawingBuffer: true,
          },
      })
    : new UnityContext({
          loaderUrl: "/unity/unity15.loader.js",
          dataUrl: "/unity/unity15.data",
          frameworkUrl: "/unity/unity15.framework.js",
          codeUrl: "/unity/unity15.wasm",
          webglContextAttributes: {
              powerPreference: "low-power",
              preserveDrawingBuffer: true,
          },
      })

export default unityContext
