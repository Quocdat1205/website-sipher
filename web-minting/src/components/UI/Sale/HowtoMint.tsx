import { Box, chakra, HStack, UnorderedList, ListItem, Flex } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"
import React, { useMemo } from "react"
import NewCountDown from "@components/UI/CountDown"
import useWalletContext from "@hooks/useWalletContext"
import { sale, note } from "@constant/content/howToMint"
import { ISalePhase } from "@@types"
interface Props {
    mode: ISalePhase
}

function HowtoMint({ mode }: Props) {
    const { states } = useWalletContext()
    const endTime = useMemo(
        () =>
            mode === "public"
                ? states.saleConfig.privateTime
                : mode === "private"
                ? states.saleConfig.freeMintTime
                : states.saleConfig.endTime,
        []
    )
    const startTime = useMemo(() => states.saleConfig[`${mode}Time`], [])

    return (
        <HStack w="100%" justifyContent="space-between" spacing={4} align="flex-start" h="16rem" overflow="hidden">
            {(states.status[mode] === "SALE" || (sale[mode][states.status[mode]] || []).length > 0) && (
                <Box flex="2" borderRight="1px" borderColor="gray.600" h="full">
                    {states.status[mode] === "SALE" && (
                        <MyText fontWeight="bold">{`${mode.toUpperCase()} SALE`}</MyText>
                    )}
                    <UnorderedList fontWeight="thin">
                        {(sale[mode][states.status[mode]] || []).map(p => (
                            <ListItem key={p}>
                                <MyText>{p}</MyText>
                            </ListItem>
                        ))}
                    </UnorderedList>
                    {states.status[mode] !== "END_SALE" && (
                        <NewCountDown deadline={states.status[mode] === "NOT_FOR_SALE" ? startTime : endTime} />
                    )}
                </Box>
            )}
            <Flex direction="column" flex="3" overflow="auto" h="full">
                <MyText fontWeight="bold">NOTE</MyText>
                <Box flex={1} overflow="auto">
                    <UnorderedList fontWeight="thin">
                        {(states.status[mode] !== "END_SALE" ? note.NOT_END_SALE : note.END_SALE).map(p => (
                            <ListItem key={p.text}>
                                <MyText>{p.text}</MyText>{" "}
                                {p.link && (
                                    <chakra.a color="blue.400" href={p.link.path} target="_blank">
                                        <MyText>{p.link.text}</MyText>
                                    </chakra.a>
                                )}
                            </ListItem>
                        ))}
                    </UnorderedList>
                </Box>
            </Flex>
        </HStack>
    )
}

export default HowtoMint
