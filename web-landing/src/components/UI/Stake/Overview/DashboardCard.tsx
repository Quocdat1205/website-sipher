import { Flex, Box, Text, Img, Stack } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import { currency } from "@source/utils"
import React from "react"

interface Props {
    img: string
    title: string
    dollarValue: number
    sipherValue?: number
    buttonText?: string
    onClick?: () => void
    background?: string
    disabled?: boolean
    isLoading?: boolean
}
const DashboardCard = ({
    img,
    title,
    dollarValue,
    sipherValue,
    buttonText = "",
    onClick,
    background = "rgba(0, 0, 0, 0.9)",
    disabled,
    isLoading,
}: Props) => {
    return (
        <Flex
            flex={1}
            p={8}
            rounded="xl"
            border="1px"
            borderColor="#383838"
            flexDir="column"
            align="center"
            justify="center"
            // h="full"
            bg={background}
            overflow="hidden"
        >
            <Stack direction={["row", "row", "column"]} align="center" spacing={4} w="full">
                <Img src={img} alt={title} h="5rem" />
                <Flex direction="column" align="center" flex={1} overflow="hidden">
                    <Text lineHeight="1" color="#9B9E9D" fontWeight="semibold">
                        {title}
                    </Text>
                    <Text
                        fontSize={["2rem", "2.5rem"]}
                        fontWeight="900"
                        fontFamily="Brandon"
                        isTruncated
                        w="full"
                        textAlign="center"
                    >
                        ${currency(dollarValue)}
                    </Text>
                    <Flex align="center" overflow="hidden" w="full" justify="center" h="1rem">
                        {sipherValue !== undefined && (
                            <>
                                <Img mr={1} src="/images/icons/sipher.png" alt="sipher-token-icon" h="1rem" />
                                <Text fontSize="sm" isTruncated>
                                    {currency(sipherValue)}
                                </Text>
                            </>
                        )}
                    </Flex>
                </Flex>
            </Stack>
            {buttonText !== "" && (
                <Box w="full" pt={4} borderTop="1px" borderColor="rgba(155,158,157, 0.5)" mt={4}>
                    <ActionButton
                        px={6}
                        py={3}
                        onClick={onClick}
                        text={buttonText}
                        w="full"
                        disabled={disabled}
                        isLoading={isLoading}
                    />
                </Box>
            )}
        </Flex>
    )
}

export default DashboardCard
