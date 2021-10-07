import { UnityContext } from "react-unity-webgl"

export const unityContext = new UnityContext({
    loaderUrl: "/unity/unity.loader.js",
    dataUrl: "/unity/unity.data",
    frameworkUrl: "/unity/unity.framework.js",
    codeUrl: "/unity/unity.wasm",
    webglContextAttributes: {
        powerPreference: "low-power",
        preserveDrawingBuffer: true,
    },
})
// const unityContext = new UnityContext({
//     loaderUrl: "https://sipherstorage.s3.ap-southeast-1.amazonaws.com/web3d/demo/unity.loader.js",
//     dataUrl: "https://sipherstorage.s3.ap-southeast-1.amazonaws.com/web3d/demo/unity.data",
//     frameworkUrl: "https://sipherstorage.s3.ap-southeast-1.amazonaws.com/web3d/demo/unity.framework.js",
//     codeUrl: "https://sipherstorage.s3.ap-southeast-1.amazonaws.com/web3d/demo/unity.wasm",
// })
export default unityContext
