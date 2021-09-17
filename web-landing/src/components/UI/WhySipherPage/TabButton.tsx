// * DESCRIPTION:

import { Img, Flex, Text } from "@chakra-ui/react"

interface TabButtonProps {
    type: string
    onClick: () => void
    active?: boolean
}

const TabButton = ({ type, onClick, active }: TabButtonProps) => {
    const genImage = () => {
        if (type === "The World") return ["/images/icons/ws_1_false.png", "/images/icons/ws_1_true.png"]
        if (type === "Gameplay") return ["/images/icons/ws_2_false.png", "/images/icons/ws_2_true.png"]
        if (type === "Factions") return ["/images/icons/ws_3_false.png", "/images/icons/ws_3_true.png"]
        return ["/images/icons/ws_4_false.png", "/images/icons/ws_4_true.png"]
    }
    return (
        <Flex direction="column" align="center" cursor="pointer" onClick={onClick}>
            <Img src={active ? genImage()[1] : genImage()[0]} h="12" alt="" />
            <Text fontSize="xs" isTruncated>
                {type}
            </Text>
        </Flex>
    )
}

export default TabButton
