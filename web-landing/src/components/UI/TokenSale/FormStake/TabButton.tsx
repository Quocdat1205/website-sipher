import { Flex } from "@chakra-ui/react"
import { TabOptionProps } from "./Stake"

interface Props {
    selected: string
    tabOptions: string[]
    onChange: (option: TabOptionProps) => void
}

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
                    fontWeight={selected === option ? "semibold" : "normal"}
                    color={selected === option ? "#FF9800" : "white"}
                    bg={selected === option ? "#1d1d1d" : "transparent"}
                    onClick={() => {
                        onChange(option)
                    }}
                >
                    {option}
                </Flex>
            ))}
        </Flex>
    )
}

export default TabButton
