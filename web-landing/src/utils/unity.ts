import { UnityContext } from "react-unity-webgl"

export const unityContext = new UnityContext({
    loaderUrl: "/unity/unity7.loader.js",
    dataUrl: "/unity/unity7.data",
    frameworkUrl: "/unity/unity7.framework.js",
    codeUrl: "/unity/unity7.wasm",
    webglContextAttributes: {
        powerPreference: "low-power",
        preserveDrawingBuffer: true,
    },
})

export default unityContext
