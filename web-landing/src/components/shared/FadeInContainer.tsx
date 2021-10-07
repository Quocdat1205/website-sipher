import { Box, BoxProps } from "@chakra-ui/layout"
import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface FadeInContainerProps {
    children: React.ReactNode
}

const MotionBox = motion<Omit<BoxProps, "transition">>(Box)

const FadeInContainer = ({ children }: FadeInContainerProps) => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    return (
        <Box overflow="hidden" mb={16}>
            <MotionBox
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, y: 0, transformOrigin: "50% 100% 0" },
                    hidden: { opacity: 0, y: 100, transformOrigin: "50% 100% 0" },
                }}
            >
                {children}
            </MotionBox>
        </Box>
    )
}
export default FadeInContainer
