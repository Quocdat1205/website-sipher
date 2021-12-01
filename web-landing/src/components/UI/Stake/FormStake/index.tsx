import { Flex, Text } from "@chakra-ui/react"
import { BackgroundContainer, IconSipher } from "@components/shared"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { BiChevronLeft } from "react-icons/bi"
import FormUI from "./FormUI"
import TabButton from "./TabButton"

export const tabOptions = ["Flexible", "Locked"] as const
export type TabOptionProps = typeof tabOptions[number]

interface Props {
    type: "SIPHER" | "SIPHER/ETH"
}

const FormStake = ({ type }: Props) => {
    const [selected, setSelected] = useState<TabOptionProps>(tabOptions[0])
    const router = useRouter()
    return (
        <BackgroundContainer
            pos="relative"
            image="/images/demo/swap-demo.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            h="100vh"
            pt={24}
            pb={14}
            bgColor="#090909"
        >
            <Flex h="full" justify="center">
                <Flex
                    bg="blackAlpha.900"
                    maxW="38rem"
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
                    <Flex mb={2} w="full" justify="flex-start">
                        <Flex
                            cursor="pointer"
                            onClick={() => router.back()}
                            _hover={{ color: "main.yellow" }}
                            align="center"
                        >
                            <BiChevronLeft size="2rem" />
                            BACK
                        </Flex>
                    </Flex>
                    <Flex align="center" mb={2}>
                        <IconSipher mr={2} />
                        <Text size="large" letterSpacing="3px" fontWeight="semibold">
                            ${type}
                        </Text>
                    </Flex>
                    <TabButton selected={selected} tabOptions={tabOptions} onChange={setSelected} />
                    <FormUI mode={selected} />
                </Flex>
            </Flex>
        </BackgroundContainer>
    )
}

export default FormStake
