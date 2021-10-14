import { UnityContext } from "react-unity-webgl"

export const unityContext = new UnityContext({
    loaderUrl: "/unity/unity8.loader.js",
    dataUrl: "/unity/unity8.data",
    frameworkUrl: "/unity/unity8.framework.js",
    codeUrl: "/unity/unity8.wasm",
    webglContextAttributes: {
        powerPreference: "low-power",
        preserveDrawingBuffer: true,
    },
})

export default unityContext
