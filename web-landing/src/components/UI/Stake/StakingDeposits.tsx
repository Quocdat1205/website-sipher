import { Flex } from "@chakra-ui/react"
import { Typo } from "@components/shared"
import { IconSipher } from "@components/shared/IconSipher"
import React from "react"
import { FlexCell, FlexHeader, FlexRow, IconETH } from "./FlexTable"

interface Props {}

const StakingDeposits = (props: Props) => {
    return (
        <Flex p={8} bg="blackAlpha.900" border="1px" borderColor="border.gray" rounded="xl" flexDir="column">
            <Flex flexDir="row" w="full">
                <FlexHeader text="Pools" w="28%" />
                <FlexHeader text="Amount Staked" w="20%" />
                <FlexHeader text="Est. Rewards" w="18%" />
                <FlexHeader text="Lock Date" w="17%" />
                <FlexHeader text="Unlock Date" w="17%" />
            </Flex>
            <FlexRow>
                <FlexCell w="28%">
                    <Flex pos="relative" flexDir="row" align="center">
                        <IconSipher />
                        <IconETH pos="absolute" left="15%" top="0" zIndex={1} />
                        <Typo.Text pl={6} size="small">
                            $SIPHER
                        </Typo.Text>
                    </Flex>
                </FlexCell>
                <FlexCell w="20%">
                    <Typo.Text size="small">$2332</Typo.Text>
                </FlexCell>
                <FlexCell w="18%">
                    <Typo.Text size="small">$2332</Typo.Text>
                </FlexCell>
                <FlexCell w="17%">
                    <Typo.Text size="small">11 Nov 2021</Typo.Text>
                </FlexCell>
                <FlexCell w="17%">
                    <Typo.Text size="small">11 Nov 2021</Typo.Text>
                </FlexCell>
            </FlexRow>
        </Flex>
    )
}

export default StakingDeposits
