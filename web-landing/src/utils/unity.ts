import { UnityContext } from "react-unity-webgl"

export const unityContext = new UnityContext({
    loaderUrl: "/unity/unity5.loader.js",
    dataUrl: "/unity/unity5.data",
    frameworkUrl: "/unity/unity5.framework.js",
    codeUrl: "/unity/unity5.wasm",
    webglContextAttributes: {
        powerPreference: "low-power",
        preserveDrawingBuffer: true,
    },
})

export default unityContext
