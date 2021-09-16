// * DESCRIPTION:

import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"

interface MotionContainerProps {
    children: React.ReactNode
}
const pageVatiants = {
    out: {
        opacity: 0,
        y: "5vh",
    },
    in: {
        opacity: 1,
        y: 0,
    },
}
const pageTransition = {
    duration: 1,
}
export const MotionContainer = ({ children }: MotionContainerProps) => {
    return (
        <motion.div
            className="motion-container"
            initial="out"
            animate="in"
            variants={pageVatiants}
            transition={pageTransition}
        >
            <Box h="full" className="motion-box" overflow="auto">
                {children}
            </Box>
        </motion.div>
    )
}

export default MotionContainer
