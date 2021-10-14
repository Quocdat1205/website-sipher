import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import IconData from "@components/shared/CommunityIcon/IconData"
import CommunityIcon from "@components/shared/CommunityIcon"

interface StepButtonProps {
    icon: keyof typeof IconData
    title: string
    position?: "first" | "middle" | "last"
}

const StepButton = ({ icon, title, position = "middle" }: StepButtonProps) => {
    return (
        <Flex
            zIndex="1"
            flex={1}
            w={["full", "full", "7rem"]}
            px={[4, 4, 0]}
            flexDir="column"
            align="center"
            justify="center"
            sx={{
                "@media (max-width: 960px)": {
                    flexDirection: "row",
                    justifyContent: "flex-start",
                },
            }}
        >
            <Flex
                justify="center"
                pos="relative"
                w={["fit-content", "fit-content", "full"]}
                flexShrink={0}
                overflow="hidden"
                py={[2, 2, 0]}
            >
                <Box>
                    <CommunityIcon icon={icon} />
                </Box>
                <Box
                    h="2px"
                    bgGradient="linear(to-b, bgGradient.orange)"
                    pos="absolute"
                    w="full"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex="-1"
                    left={position === "first" ? "50%" : position === "middle" ? "0%" : "-50%"}
                    sx={{
                        "@media (max-width: 960px)": {
                            width: "2px",
                            height: "full",
                            left: "50%",
                            transform: "translate(-50%, 0%)",
                            top: position === "first" ? "50%" : position === "middle" ? "0%" : "-50%",
                        },
                    }}
                />
            </Flex>
            <Box
                mt={4}
                sx={{
                    "@media (max-width: 960px)": {
                        mt: 0,
                        ml: 4,
                    },
                }}
            >
                <Text textAlign={["left", "left", "center"]} fontSize="sm" px={4}>
                    {title}
                </Text>
            </Box>
        </Flex>
    )
}

export default StepButton
