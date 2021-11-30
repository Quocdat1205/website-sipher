import { Flex, Text } from "@chakra-ui/react"
import { BackgroundContainer, IconSipher } from "@components/shared"
import React, { useState } from "react"
import FormUI from "./FormUI"
import TabButton from "./TabButton"

export const tabOptions = ["Flexible", "Locked"] as const
export type TabOptionProps = typeof tabOptions[number]

interface Props {}

const FormStake = (props: Props) => {
    const [selected, setSelected] = useState<TabOptionProps>(tabOptions[0])

    return (
        <BackgroundContainer
            pos="relative"
            image="/images/demo/swap-demo.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            px={0}
            pt={24}
            pb={16}
        >
            <Flex justify="center" align="center" flexDir="column" py={16}>
                <Flex
                    rounded="xl"
                    overflow="hidden"
                    justify="center"
                    align="center"
                    bg="blackAlpha.900"
                    flexDir="column"
                    border="1px"
                    borderColor="border.gray"
                    p={8}
                >
                    <Flex align="center">
                        <IconSipher mr={2} />
                        <Text size="large" fontWeight="semibold" letterSpacing="3px">
                            $SIPHER
                        </Text>
                    </Flex>
                    <Flex pos="relative" w="full" direction="column" align="center" p={4}>
                        <TabButton selected={selected} tabOptions={tabOptions} onChange={setSelected} />
                        <FormUI mode={selected} />
                    </Flex>
                </Flex>
            </Flex>
        </BackgroundContainer>
    )
}

export default FormStake
