import { IconButton } from "@chakra-ui/button"
import { Flex } from "@chakra-ui/layout"
import { Tooltip } from "@chakra-ui/tooltip"
import { ImAngry2, ImEvil2, ImHappy2, ImNeutral2, ImSad2, ImSmile2 } from "react-icons/im"

const emotionIcons = [
    {
        type: "DEFAULT",
        icon: <ImHappy2 />,
    },
    {
        type: "ANGRY",
        icon: <ImAngry2 />,
    },
    {
        type: "EVIL",
        icon: <ImEvil2 />,
    },
    {
        type: "MASK",
        icon: <ImSmile2 />,
    },
    {
        type: "NERVOUS",
        icon: <ImNeutral2 />,
    },
    {
        type: "SAD",
        icon: <ImSad2 />,
    },
]

interface EmotionChangerProps {
    availableEmotions: string[]
    currentEmotion: string
    onChangeEmotion: (newEmotion: string) => void
}

const EmotionChanger = ({ availableEmotions, currentEmotion, onChangeEmotion }: EmotionChangerProps) => {
    return (
        <Flex alignItems="center" justifyContent="space-between">
            {emotionIcons
                .filter(icon => availableEmotions.includes(icon.type))
                .map(icon => (
                    <Tooltip
                        hasArrow
                        label={icon.type}
                        placement="bottom"
                        fontSize="xs"
                        bg="blackAlpha.900"
                        openDelay={1000}
                    >
                        <IconButton
                            key={icon.type}
                            variant="ghost"
                            aria-label={icon.type}
                            _hover={{ bg: "none" }}
                            _focus={{ shadow: "none" }}
                            _active={{ bg: "none" }}
                            icon={icon.icon}
                            fontSize="1.8rem"
                            color={currentEmotion === icon.type ? "main.orange" : "whiteAlpha.500"}
                            onClick={() => onChangeEmotion(icon.type)}
                        />
                    </Tooltip>
                ))}
        </Flex>
    )
}

export default EmotionChanger
