import { NFTInfo } from "@api/nft"
import { AspectRatio, Box, Img, Text, Flex } from "@chakra-ui/react"
import { MotionFlex } from "@components/shared/Motion"
import { useRouter } from "next/router"
import { ReactNode } from "react"

interface CardProps {
    item: NFTInfo
    order: number
}

const Card = ({ item, order }: CardProps) => {
    const { name, origin, image_url } = item
    const router = useRouter()
    const createStripe = () => {
        const elements: ReactNode[] = []
        for (let i = 0; i < 10; i++) {
            elements.push(<Box key={i} pos="absolute" w="6%" left={`${i * 10}%`} height="100%" bg="var(--border)" />)
        }
        return (
            <Box
                pos="absolute"
                h="12px"
                left="4px"
                bottom="4px"
                w="calc(100% - 2rem)"
                overflow="hidden"
                transform="skewX(-45deg)"
                transformOrigin="bottom left"
            >
                {elements}
            </Box>
        )
    }
    const createSmallStripe = () => {
        const elements: ReactNode[] = []
        for (let i = 0; i < 6; i++) {
            elements.push(<Box key={i} pos="absolute" w="10%" left={`${i * 16}%`} height="100%" bg="var(--border)" />)
        }
        return (
            <Box pos="absolute" h="8px" left={0} top={"4px"} w="full" transform="skewX(-45deg)" overflow="hidden">
                {elements}
            </Box>
        )
    }
    return (
        <MotionFlex
            cursor="pointer"
            flexDir="column"
            onClick={() => {
                if (name !== "???") router.push(`/inventory/${item.race.toLowerCase()}/${item.id}`)
            }}
            borderLeft="2px"
            sx={{ "--border": "#595959" }}
            _hover={{ "--border": "#f4143599" }}
            borderColor="var(--border)"
            p={4}
            pr="calc(1rem + 4px)"
            shadow="lg"
            overflow="hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", delay: order * 0.05 }}
            position="relative"
            role="group"
            _before={{
                content: '""',
                position: "absolute",
                width: "calc(100% - 2px)",
                left: "0px",
                height: "2rem",
                bottom: "0px",
                border: "2px solid var(--border)",
                borderWidth: "0px 3px 2px 0px",
                transform: "skew(-45deg)",
                transformOrigin: "left top",
            }}
            _after={{
                content: '""',
                position: "absolute",
                width: "calc(100% - 2px)",
                left: "0px",
                height: "calc(100% - 2rem )",
                top: "0px",
                border: "2px solid var(--border)",
                borderWidth: "2px 2px 0px 0px",
            }}
        >
            <AspectRatio w="full" ratio={125 / 141}>
                <Img w="full" src={image_url} alt={name} />
            </AspectRatio>
            <Flex w="full" justify="space-between" align="center">
                <Box py={2} px={2}>
                    <Text fontSize="xs">{origin}</Text>
                    <Text fontSize="sm" textTransform="uppercase" fontWeight={500}>
                        {name.split(" ").slice(0, 2).join(" ")}
                    </Text>
                </Box>
                <Box pos="relative">
                    <Text fontSize="2xl" fontWeight="bold" color="main.yellow" pos="relative" zIndex={2}>
                        {name.split(" ")[2]}
                    </Text>
                    {createSmallStripe()}
                </Box>
            </Flex>
            {createStripe()}
            <Box
                pos="absolute"
                right={0}
                boxSize="2.6rem"
                bgGradient="linear(to-t, #FF7F00,#F44A67, #FF7F00 )"
                bottom={0}
                transform="translate(50%, 50%) rotate(-45deg)"
                transformOrigin="50% 50%"
                display="none"
                _groupHover={{ display: "block" }}
            />
        </MotionFlex>
    )
}
export default Card
