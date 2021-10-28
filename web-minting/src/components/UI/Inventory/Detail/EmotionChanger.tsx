import { Box, Wrap, Text } from "@chakra-ui/layout"

interface EmotionChangerProps {
    availableEmotions: string[]
    currentEmotion: string
    onChangeEmotion: (newEmotion: string) => void
}

const EmotionChanger = ({ availableEmotions, currentEmotion, onChangeEmotion }: EmotionChangerProps) => {
    return (
        <Wrap justify="center" alignItems="center" justifyContent="space-between" w="full">
            {availableEmotions.map(emotion => (
                <Box
                    key={emotion}
                    bg={emotion === currentEmotion ? "main.yellow" : "transparent"}
                    px={4}
                    py={1}
                    rounded="full"
                    border="1px"
                    borderColor="main.yellow"
                    cursor="pointer"
                    userSelect="none"
                    onClick={() => onChangeEmotion(emotion)}
                >
                    <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color={emotion === currentEmotion ? "black" : "main.yellow"}
                    >
                        {emotion}
                    </Text>
                </Box>
            ))}
        </Wrap>
    )
}

export default EmotionChanger
