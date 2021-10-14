import { UnityContext } from "react-unity-webgl"

export const unityContext = new UnityContext({
    loaderUrl: "/unity/unity2.loader.js",
    dataUrl: "/unity/unity2.data",
    frameworkUrl: "/unity/unity2.framework.js",
    codeUrl: "/unity/unity2.wasm",
    webglContextAttributes: {
        powerPreference: "low-power",
        preserveDrawingBuffer: true,
    },
})

export default unityContext
