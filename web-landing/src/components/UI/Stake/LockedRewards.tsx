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
        status: "Locked",
        unlockDate: 1638272266000,
        active: true,
    },
    {
        id: 2,
        type: 2,
        amount: "24567",
        rewards: "0.00023",
        status: "Unlock",
        unlockDate: 1638272266000,
        active: false,
    },
]

const LockedRewards = (props: Props) => {
    let options: any = { year: "numeric", month: "short", day: "numeric" }
    return (
        <Flex py={8} px={4} bg="blackAlpha.900" border="1px" borderColor="border.gray" rounded="xl" flexDir="column">
            <Flex flexDir="row" w="full">
                <FlexHeader p={2} text="Token" w="24%" />
                <FlexHeader p={2} text="Amount" w="18%" />
                <FlexHeader p={2} text="Dollar value" w="18%" />
                <FlexHeader p={2} text="Status" w="14%" />
                <FlexHeader p={2} text="Time Remaining" w="14%" />
                <FlexHeader p={2} text="" w="12%" />
            </Flex>
            {data.map(item => (
                <FlexRow key={item.id}>
                    <FlexCell pos="relative" p={2} w="24%">
                        <Flex flexDir="row" align="center">
                            {(item.type === 1 || item.type === 2) && <IconSipher boxSize="2rem" />}
                            {item.type === 2 && <IconETH boxSize="2rem" pos="absolute" left="10%" zIndex={1} />}
                            <Text pl={6} size="small">
                                {item.type === 1 ? "$SIPHER" : "$SIPHER/ETH Uniswap LP"}
                            </Text>
                        </Flex>
                    </FlexCell>
                    <FlexCell p={2} w="18%">
                        <Text size="small">${item.amount}</Text>
                    </FlexCell>
                    <FlexCell p={2} w="18%">
                        <Text size="small">${item.rewards}</Text>
                    </FlexCell>
                    <FlexCell p={2} w="14%">
                        <Text size="small">{item.status}</Text>
                    </FlexCell>
                    <FlexCell p={2} w="14%">
                        <Text size="small">{new Date(item.unlockDate).toLocaleDateString("en-GB", options)}</Text>
                    </FlexCell>
                    <FlexCell p={2} justify="flex-end" w="12%">
                        <ActionButton disabled={!item.active} px={2} py={2} text="UNLOCK" />
                    </FlexCell>
                </FlexRow>
            ))}
        </Flex>
    )
}

export default LockedRewards
