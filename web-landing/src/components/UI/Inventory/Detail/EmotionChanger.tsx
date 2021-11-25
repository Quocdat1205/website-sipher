import { Box, Wrap, Text } from "@chakra-ui/layout"
import useWalletContext from "@hooks/web3/useWalletContext"
import { getAccessToken } from "@source/utils"

interface EmotionChangerProps {
    availableEmotions: string[]
    currentEmotion: string
    onChangeEmotion: (newEmotion: string) => void
}

const EmotionChanger = ({ availableEmotions, currentEmotion, onChangeEmotion }: EmotionChangerProps) => {
    const wallet = useWalletContext()

    const handleChange = async emotion => {
        const accessToken = getAccessToken()
        if (accessToken && accessToken !== "") {
            onChangeEmotion(emotion)
        } else {
            wallet.getAccessToken(wallet.account)
        }
    }

    return (
        <Wrap justify="center" alignItems="center" justifyContent="space-between" w="full">
            {availableEmotions.map(emotion => (
                <Box
                    key={emotion}
                    px={4}
                    py={1}
                    cursor="pointer"
                    userSelect="none"
                    onClick={() => handleChange(emotion)}
                    pos="relative"
                >
                    <Text
                        fontSize="sm"
                        fontWeight={500}
                        color={emotion === currentEmotion ? "black" : "main.yellow"}
                        pos="relative"
                        zIndex={2}
                    >
                        {emotion}
                    </Text>
                    <Box
                        pos="absolute"
                        w="full"
                        h="full"
                        transform="skewX(-25deg)"
                        bg={emotion === currentEmotion ? "main.yellow" : "whiteAlpha.100"}
                        top={0}
                        left={0}
                    ></Box>
                </Box>
            ))}
        </Wrap>
    )
}

export default EmotionChanger
