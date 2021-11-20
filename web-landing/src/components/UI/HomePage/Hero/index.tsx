import { Box, Flex } from "@chakra-ui/react"
import FirstScreen from "./FirstScreen"

export const fontSizes = ["3.0rem", "3.5rem", "4rem", "4.5rem"]

interface HeroProps {
    uaString: string
}

const Hero = ({ uaString }: HeroProps) => {
    return (
        <Box pos="relative" zIndex={0} overflowX="hidden" id="hero">
            <Flex direction="column" w="full">
                <FirstScreen />
            </Flex>
        </Box>
    )
}

export default Hero
