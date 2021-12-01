import { Flex, Text } from "@chakra-ui/react"
import { IconSipher } from "@components/shared"
import React, { useState } from "react"
import FormUI from "./FormUI"
import TabButton from "./TabButton"

export const tabOptions = ["Flexible", "Locked"] as const
export type TabOptionProps = typeof tabOptions[number]

interface Props {}

const FormStake = (props: Props) => {
    const [selected, setSelected] = useState<TabOptionProps>(tabOptions[0])

    return (
        <Flex
            border="1px"
            borderColor="border.gray"
            rounded="xl"
            pos="relative"
            direction="column"
            align="center"
            py={8}
            px={16}
            w="full"
        >
            <TabButton selected={selected} tabOptions={tabOptions} onChange={setSelected} />
            <FormUI mode={selected} />
        </Flex>
    )
}

export default FormStake
