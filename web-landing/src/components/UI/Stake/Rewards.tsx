import { Flex, Text } from "@chakra-ui/react"
import { IconSipher } from "@components/shared/IconSipher"
import React from "react"
import { ActionButton } from "./ActionButton"
import { FlexCell, FlexHeader, FlexRow, IconETH } from "./FlexTable"

interface Props {}

const data = [
    {
        id: 1,
        type: 1,
        amount: "24567",
        rewards: "0.00023",
    },
    {
        id: 2,
        type: 2,
        amount: "24567",
        rewards: "0.00023",
    },
]

const Rewards = (props: Props) => {
    let options: any = { year: "numeric", month: "short", day: "numeric" }
    return (
        <Flex py={8} px={8} bg="blackAlpha.900" border="1px" borderColor="border.gray" rounded="xl" flexDir="column">
            <Flex flexDir="row" w="full">
                <FlexHeader text="Core Pools" w="30%" />
                <FlexHeader text="Amount Staked" w="25%" />
                <FlexHeader text="Claimable Rewards" w="25%" />
                <FlexHeader text="" w="20%" />
            </Flex>
            {data.map(item => (
                <FlexRow key={item.id}>
                    <FlexCell w="30%">
                        <Flex pos="relative" flexDir="row" align="center">
                            {(item.type === 1 || item.type === 2) && <IconSipher boxSize="2rem" />}
                            {item.type === 2 && <IconETH boxSize="2rem" pos="absolute" left="15%" top="0" zIndex={1} />}
                            <Text pl={6} size="small">
                                SIPHER
                            </Text>
                        </Flex>
                    </FlexCell>
                    <FlexCell w="25%">
                        <Text size="small">${item.amount}</Text>
                    </FlexCell>
                    <FlexCell w="25%">
                        <Text size="small">${item.rewards}</Text>
                    </FlexCell>
                    <FlexCell justify="flex-end" w="20%">
                        <ActionButton text="CLAIM" />
                    </FlexCell>
                </FlexRow>
            ))}
        </Flex>
    )
}

export default Rewards
