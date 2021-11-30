import { Flex, Box } from "@chakra-ui/react"
import { Typo } from "@components/shared"
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
        lockDate: 1638272266000,
        unlockDate: 1638272266000,
        active: true,
    },
    {
        id: 2,
        type: 2,
        amount: "24567",
        rewards: "0.00023",
        lockDate: 1638272266000,
        unlockDate: 1638272266000,
        active: false,
    },
]

const StakingDeposits = (props: Props) => {
    let options: any = { year: "numeric", month: "short", day: "numeric" }
    return (
        <Flex py={8} px={4} bg="blackAlpha.900" border="1px" borderColor="border.gray" rounded="xl" flexDir="column">
            <Flex flexDir="row" w="full">
                <FlexHeader p={2} text="Pools" w="24%" />
                <FlexHeader p={2} text="Amount Staked" w="18%" />
                <FlexHeader p={2} text="Est. Rewards" w="18%" />
                <FlexHeader p={2} text="Lock Date" w="14%" />
                <FlexHeader p={2} text="Unlock Date" w="14%" />
                <FlexHeader p={2} text="" w="12%" />
            </Flex>
            {data.map(item => (
                <FlexRow key={item.id}>
                    <FlexCell p={2} w="24%">
                        <Flex pos="relative" flexDir="row" align="center">
                            {(item.type === 1 || item.type === 2) && <IconSipher boxSize="2rem" />}
                            {item.type === 2 && <IconETH boxSize="2rem" pos="absolute" left="15%" top="0" zIndex={1} />}
                            <Typo.Text pl={6} size="small">
                                $SIPHER
                            </Typo.Text>
                        </Flex>
                    </FlexCell>
                    <FlexCell p={2} w="18%">
                        <Typo.Text size="small">${item.amount}</Typo.Text>
                    </FlexCell>
                    <FlexCell p={2} w="18%">
                        <Typo.Text size="small">${item.rewards}</Typo.Text>
                    </FlexCell>
                    <FlexCell p={2} w="14%">
                        <Typo.Text size="small">
                            {new Date(item.lockDate).toLocaleDateString("en-GB", options)}
                        </Typo.Text>
                    </FlexCell>
                    <FlexCell p={2} w="14%">
                        <Typo.Text size="small">
                            {new Date(item.unlockDate).toLocaleDateString("en-GB", options)}
                        </Typo.Text>
                    </FlexCell>
                    <FlexCell p={2} justify="flex-end" w="12%">
                        <ActionButton disabled={!item.active} px={2} py={2} text="UNLOCK" />
                    </FlexCell>
                </FlexRow>
            ))}
        </Flex>
    )
}

export default StakingDeposits
