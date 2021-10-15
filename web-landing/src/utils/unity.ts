import { isMobile } from "react-device-detect";
import { UnityContext } from "react-unity-webgl";

const isMobileOrApple = isMobile ? true : false;

export const unityContext = isMobileOrApple
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
      loaderUrl: "/unity/unity9.loader.js",
      dataUrl: "/unity/unity9.data",
      frameworkUrl: "/unity/unity9.framework.js",
      codeUrl: "/unity/unity9.wasm",
      webglContextAttributes: {
        powerPreference: "low-power",
        preserveDrawingBuffer: true,
      },
    });

export default unityContext;
