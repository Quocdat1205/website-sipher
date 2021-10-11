import { Box } from "@chakra-ui/react"
import React from "react"

interface LeftBarProps {
    isExpanded?: boolean
}

const LeftBar = ({ isExpanded }: LeftBarProps) => {
    return (
        <>
            <Box
                position="absolute"
                top="-0.5rem"
                left="4%"
                h="1.7rem"
                w="3px"
                zIndex="1"
                bgGradient={isExpanded ? "linear(to-b, bgGradient.orange)" : "linear(to-b, bgGradient.white)"}
            />
            <Box
                position="absolute"
                top="2rem"
                left="4%"
                bgGradient={isExpanded ? "linear(to-b, bgGradient.orange)" : "linear(to-b, bgGradient.white)"}
                boxSize="0.75rem"
                transform="rotate(45deg) translateX(-50%)"
                transformOrigin="50% 50%"
            />
            <Box
                pos="absolute"
                left="4%"
                top="3.1rem"
                h="calc(100% - 1.9rem)"
                w="3px"
                zIndex="2"
                bgGradient={isExpanded ? "linear(to-b, bgGradient.orange)" : "linear(to-b, bgGradient.white)"}
            />
        </>
    )
}

export default LeftBar
