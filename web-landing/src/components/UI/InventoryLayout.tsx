// * DESCRIPTION:

import { Flex, Box, Button, Text } from "@chakra-ui/react"
import { NavBar, Footer } from "@components/shared"
import { useRouter } from "next/router"

interface NewsLayoutProps {
    children: React.ReactNode
}
const menuRace = [
    { id: "INU", path: "/inventory/inu" },
    { id: "NEKO", path: "/inventory/neko" },
]
const InventoryLayout = ({ children }: NewsLayoutProps) => {
    const router = useRouter()
    return (
        <Flex minH="100vh" w="full" direction="column" overflow="hidden" color="whiteAlpha.900" id="main-layout">
            <NavBar />
            <Flex
                flex={1}
                overflow="overlay"
                direction="column"
                id="body"
                bgImage="/images/pc/inventory_background.png"
                bgSize="cover"
                bgRepeat="no-repeat"
                pt={"4.5rem"}
            >
                <Flex direction="column" flex={1} backgroundColor="blackAlpha.300">
                    <Flex flexDir="column" w="full" align="center" py={4} minH="100vh">
                        <Flex
                            pos="relative"
                            _before={{
                                zIndex: 1,
                                content: `""`,
                                pos: "absolute",
                                bottom: "-1px",
                                left: 0,
                                w: "full",
                                h: "4px",
                                bg: "linear-gradient(270deg, rgba(255, 218, 0, 0) 0%, #FFDA00 55.21%, rgba(252, 209, 31, 0) 100%)",
                            }}
                            align="center"
                            justify="center"
                            flexDir="column"
                            px={4}
                            w="full"
                            overflow="hidden"
                            maxW="64rem"
                        >
                            <Text
                                bg="rgba(0, 0, 0, 0.9)"
                                px={4}
                                py={1}
                                fontSize="3xl"
                                mb={4}
                                fontWeight={500}
                                letterSpacing="1px"
                            >
                                INVENTORY
                            </Text>
                            <Flex flexDir="row">
                                {menuRace.map(item => (
                                    <Button
                                        key={item.id}
                                        rounded="none"
                                        pos="relative"
                                        w="8rem"
                                        _hover={{
                                            bg:
                                                router.pathname.split("/")[2] === item.path.split("/")[2]
                                                    ? "main.yellow"
                                                    : "black",
                                        }}
                                        _active={{
                                            bg:
                                                router.pathname.split("/")[2] === item.path.split("/")[2]
                                                    ? "main.yellow"
                                                    : "black",
                                        }}
                                        bg={
                                            router.pathname.split("/")[2] === item.path.split("/")[2]
                                                ? "main.yellow"
                                                : "black"
                                        }
                                        color={
                                            router.pathname.split("/")[2] === item.path.split("/")[2]
                                                ? "blackAlpha.800"
                                                : "rgba(255,255,255,0.6)"
                                        }
                                        onClick={() => router.push(item.path)}
                                    >
                                        <Text fontWeight="semibold" letterSpacing="3px" color="inherit">
                                            {item.id}
                                        </Text>
                                    </Button>
                                ))}
                            </Flex>
                        </Flex>
                        <Flex
                            flexDir="column"
                            px={4}
                            flex={1}
                            w="full"
                            overflow="hidden"
                            maxW="64rem"
                            bg="blackAlpha.800"
                        >
                            {children}
                        </Flex>
                    </Flex>
                </Flex>
                <Footer />
            </Flex>
        </Flex>
    )
}

export default InventoryLayout
