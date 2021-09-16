import { useBreakpoint } from "@chakra-ui/media-query"

export const useDevice = () => {
    const bp = parseInt(useBreakpoint() || "")
    return bp !== undefined && bp <= 1 ? "phone" : "pc"
}

export default useDevice
