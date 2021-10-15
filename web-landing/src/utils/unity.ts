import { UnityContext } from "react-unity-webgl";
import { isMobile } from "react-device-detect";

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
      loaderUrl: "/unity/unity10.loader.js",
      dataUrl: "/unity/unity10.data",
      frameworkUrl: "/unity/unity10.framework.js",
      codeUrl: "/unity/unity10.wasm",
      webglContextAttributes: {
        powerPreference: "low-power",
        preserveDrawingBuffer: true,
      },
    });

export default unityContext;
