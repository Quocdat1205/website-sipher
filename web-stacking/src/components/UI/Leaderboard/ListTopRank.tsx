import { HStack, Flex, useRadioGroup, Input } from "@chakra-ui/react"
import React from "react"
import RadioCard from "./RadioCard"

interface Props {}

const ListTopRank = (props: Props) => {
    const options = ["Top 10", "Top 50", "Top 200"]
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "react",
        onChange: console.log,
    })
    const group = getRootProps()

    return (
        <Flex
            flexDir="column"
            align="center"
            bg="hsla(0,0%,94.1%,.5)"
            backdropFilter="blur(100px)"
            rounded="3xl"
            p={6}
            w="full"
            maxW="720px"
        >
            <HStack bg="white" p={1} rounded="full" {...group}>
                {options.map(value => {
                    const radio = getRadioProps({ value })
                    return (
                        <RadioCard key={value} {...radio}>
                            {value}
                        </RadioCard>
                    )
                })}
            </HStack>
            <Input
                mt={6}
                color="stack.textBlack"
                py={3}
                pl={10}
                bg="white"
                rounded="full"
                placeholder="Search for an address"
            />
        </Flex>
    )
}

export default ListTopRank
