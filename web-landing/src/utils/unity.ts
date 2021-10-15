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
      loaderUrl: "/unity/unity11.loader.js",
      dataUrl: "/unity/unity11.data",
      frameworkUrl: "/unity/unity11.framework.js",
      codeUrl: "/unity/unity11.wasm",
      webglContextAttributes: {
        powerPreference: "low-power",
        preserveDrawingBuffer: true,
      },
    });

export default unityContext;
