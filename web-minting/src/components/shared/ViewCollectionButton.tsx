import { Box, Flex, useOutsideClick, Collapse, Text, VStack } from "@chakra-ui/react"
import { GradientButton } from "@sipher/web-components"
import { useRef, useState } from "react"

interface SubLinkProps {
    text: string
    href: string
}
const SubLink = ({ text, href }: SubLinkProps) => {
    return (
        <Text
            fontWeight={"700"}
            bgGradient="linear(to-b, bgGradient.orange)"
            bgClip="text"
            fontSize="sm"
            as="a"
            href={href}
            rel="nonreferrer"
            target="_blank"
        >
            {text}
        </Text>
    )
}

const ViewCollectionButton = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    useOutsideClick({
        ref,
        handler: () => setIsExpanded(false),
    })
    return (
        <Box pos="relative" ref={ref}>
            <GradientButton text="VIEW COLLECTION ON OPENSEA" rounded="full" onClick={() => setIsExpanded(true)} />
            <Box pos="absolute" top="100%" left={0} w="full" transform="translateY(0.5rem)">
                <Collapse in={isExpanded}>
                    <VStack direction="column" w="full" align="center">
                        <SubLink text="NEKO - SIPHERIAN FLASH" href="https://opensea.io/collection/sipherianflash" />
                        <SubLink text="INU - SIPHERIAN SURGE" href="https://opensea.io/collection/sipheriansurge" />
                    </VStack>
                </Collapse>
            </Box>
        </Box>
    )
}

export default ViewCollectionButton
