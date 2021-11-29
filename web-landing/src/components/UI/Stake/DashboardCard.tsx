import { Image } from "@chakra-ui/image"
import { Flex, Box, Text } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Typo } from "@components/shared"
import React from "react"
import { ActionButton } from "./ActionButton"

interface Props {
    img: string
    title: string
    dollarValue: number | string
    sipherValue: number | string
    textButton?: string
    onClick?: () => void
}
const DashboardCard = ({ img, title, dollarValue, sipherValue, textButton = "", onClick }: Props) => {
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
        >
            <Image mb={4} src={img} alt="icon" h="5rem" />
            <Typo.Text lineHeight="1" color="#9B9E9D" fontWeight="semibold">
                {title}
            </Typo.Text>
            <Text py={3} lineHeight="1" fontSize={["2rem", "2.5rem", "2.5rem", "2.5rem", "3rem"]} fontWeight="semibold">
                ${dollarValue}
            </Text>
            <chakra.span pb={4} display="flex" alignItems="center">
                <Image mr={1} src="/images/icons/community/main-black.png" alt="icon" h="1.5rem" />
                <Typo.Text size="small">$SIPHER {sipherValue}</Typo.Text>
            </chakra.span>
            {textButton !== "" && (
                <Box w="full" pt={8} borderTop="1px" borderColor="rgba(155,158,157, 0.5)">
                    <ActionButton onClick={onClick} text={textButton} w="full" />
                </Box>
            )}
        </Flex>
    )
}

export default DashboardCard
