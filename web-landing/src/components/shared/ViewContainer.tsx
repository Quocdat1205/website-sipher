// * DESCRIPTION:

import { Box, BoxProps } from "@chakra-ui/layout"
import useObserver from "@hooks/useObserver"
import { useEffect } from "react"
import { textToPath } from "src/utils"

interface ViewContainerProps extends BoxProps {
    label: string
    onView?: (hash: string) => void
    threshold?: number
}

export const ViewContainer = ({ label, onView, threshold, ...rest }: ViewContainerProps) => {
    const { ref, isInView } = useObserver(threshold)
    useEffect(() => {
        if (isInView && onView) {
            onView(textToPath(label))
            history.replaceState(undefined, "", `#${textToPath(label)}`)
        }
    }, [isInView, label, onView])

    return <Box id={textToPath(label)} ref={ref} {...rest} />
}
