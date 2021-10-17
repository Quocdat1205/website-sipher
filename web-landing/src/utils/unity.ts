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
