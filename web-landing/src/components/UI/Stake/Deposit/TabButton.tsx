import { Box, Flex, Text, Tooltip } from "@chakra-ui/react"
import { BsQuestionCircle } from "react-icons/bs"
import { TabOptionProps } from "."

interface Props {
    selected: string
    tabOptions: string[]
    onChange: (option: TabOptionProps) => void
}
;["Flexible", "Locked"]
const TabButton = ({ selected, tabOptions, onChange }: Props) => {
    return (
        <Flex
            w="full"
            overflow="hidden"
            bg="#131313"
            border="1px"
            borderColor="border.gray"
            rounded="full"
            shadow="base"
            userSelect="none"
            cursor="pointer"
            p={1}
            mb={4}
        >
            {tabOptions.map(option => (
                <Flex
                    flex={1}
                    key={option}
                    align="center"
                    justify="center"
                    rounded="full"
                    px={6}
                    py={2}
                    bg={selected === option ? "#1d1d1d" : "transparent"}
                    onClick={() => {
                        onChange(option)
                    }}
                    pos="relative"
                >
                    {" "}
                    {option === "Flexible" ? (
                        <Text
                            fontWeight={selected === option ? "semibold" : "normal"}
                            color={selected === option ? "#FF9800" : "white"}
                        >
                            {option}
                        </Text>
                    ) : (
                        <Flex align="center">
                            <Text
                                fontWeight={selected === option ? "semibold" : "normal"}
                                color={selected === option ? "#FF9800" : "white"}
                            >
                                {option}
                            </Text>
                            <Tooltip
                                label="A fixed duration your assets are locked before they are transferred back into your wallet."
                                hasArrow
                                placement="bottom-end"
                                fontSize="sm"
                                bg="#383838DD"
                                fontWeight={400}
                                rounded="lg"
                                p={2}
                                w="240px"
                            >
                                <Box pos="absolute" top="50%" right="2.5rem" transform="translateY(-50%)">
                                    <BsQuestionCircle size="1rem" />
                                </Box>
                            </Tooltip>
                        </Flex>
                    )}
                </Flex>
            ))}
        </Flex>
    )
}

export default TabButton
