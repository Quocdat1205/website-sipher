import React from "react"
import { TabOptionProps } from "."
import { Flex } from "@chakra-ui/react"

interface Props {
    selected: TabOptionProps
    tabOptions: readonly ["Flexible", "Locked"]
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
        >
            {tabOptions.map(option => (
                <Flex
                    flex={1}
                    key={option}
                    align="center"
                    justify="center"
                    rounded="full"
                    px={8}
                    py={4}
                    fontWeight={400}
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
