// * DESCRIPTION:

import { Box, BoxProps } from "@chakra-ui/layout"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { textToPath } from "src/utils"

interface ViewContainerProps extends BoxProps {
    label: string
    onView?: (hash: string) => void
}

export const ViewContainer = ({ label, onView, ...rest }: ViewContainerProps) => {
    const { ref, inView } = useInView({
        // trigger onView when >65% of container is visible
        threshold: 0.65,
        // wait 0.5 seconds
        delay: 250,
    })
    useEffect(() => {
        if (inView && onView) {
            onView(textToPath(label))
            history.replaceState(undefined, "", `#${textToPath(label)}`)
        }
    }, [inView])
    return <Box id={textToPath(label)} ref={ref} {...rest} />
}
