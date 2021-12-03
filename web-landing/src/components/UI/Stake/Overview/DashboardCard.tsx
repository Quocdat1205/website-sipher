import { Flex, Box, Text, Img } from "@chakra-ui/react"
import { ActionButton } from "@components/shared"
import React from "react"

interface Props {
    img: string
    title: string
    dollarValue: number | string
    sipherValue: number | string
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
            p={8}
            rounded="xl"
            border="1px"
            borderColor="border.gray"
            align="center"
            justify="center"
            flexDir="column"
            w="full"
            h="full"
            bg={background}
        >
            <Img mb={4} src={img} alt={title} h="5rem" />
            <Text lineHeight="1" color="#9B9E9D" fontWeight="semibold">
                {title}
            </Text>
            <Text
                py={3}
                lineHeight="1"
                fontSize={["2rem", "2.5rem", "2.5rem", "2.5rem", "3rem"]}
                fontWeight="900"
                fontFamily="Brandon"
            >
                ${dollarValue}
            </Text>
            <Flex align="center">
                <Img mr={1} src="/images/icons/sipher.png" alt="sipher-token-icon" h="1rem" />
                <Text size="small">$SIPHER {sipherValue}</Text>
            </Flex>
            {buttonText !== "" && (
                <Box w="full" pt={8} borderTop="1px" borderColor="rgba(155,158,157, 0.5)" mt={4}>
                    <ActionButton
                        px={6}
                        py={4}
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
