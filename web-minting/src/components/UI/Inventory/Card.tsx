import { NFTInfo } from "@api/nft"
import { Box, Img, Text } from "@chakra-ui/react"
import { MotionFlex } from "@components/shared/Motion"
import { useRouter } from "next/router"

interface CardProps {
    item: NFTInfo
    order: number
}

const Card = ({ item, order }: CardProps) => {
    const { name, origin, image_url } = item
    const router = useRouter()
    return (
        <MotionFlex
            cursor="pointer"
            flexDir="column"
            onClick={() => router.push(`/inventory/${item.race.toLowerCase()}/${item.id}`)}
            _hover={{
                bg: "blackAlpha.800",
                borderColor: "whiteAlpha.500",
            }}
            border="1px"
            borderColor="whiteAlpha.300"
            shadow="lg"
            bg="blackAlpha.900"
            overflow="hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", delay: order * 0.05 }}
        >
            <Img w="100%" src={image_url} alt={name} />
            <Box py={2} px={2}>
                <Text fontWeight="bold" bgGradient="linear(to-b, bgGradient.orange)" bgClip="text">
                    {name}
                </Text>
                <Text fontSize="sm">{origin}</Text>
            </Box>
        </MotionFlex>
    )
}
export default Card
