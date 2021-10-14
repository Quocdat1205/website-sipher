import { UnityContext } from "react-unity-webgl"

export const unityContext = new UnityContext({
    loaderUrl: "/unity/unity9.loader.js",
    dataUrl: "/unity/unity9.data",
    frameworkUrl: "/unity/unity9.framework.js",
    codeUrl: "/unity/unity9.wasm",
    webglContextAttributes: {
        powerPreference: "low-power",
        preserveDrawingBuffer: true,
    },
})

export default unityContext
