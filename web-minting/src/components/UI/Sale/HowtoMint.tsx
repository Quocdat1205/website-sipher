import { Box, chakra, HStack, UnorderedList, ListItem } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"
import React from "react"
import CountDown from "@components/shared/CountDown"
import useWalletContext from "@hooks/useWalletContext"
import { sale, note } from "@constant/content/howToMint"
interface Props {
    mode: "public" | "private"
}

function HowtoMint({ mode }: Props) {
    const { metaState } = useWalletContext()
    return (
        <HStack w="100%" justifyContent="space-between" spacing={4}>
            {(metaState.status[mode] === "SALE" || (sale[mode][metaState.status[mode]] || []).length > 0) && (
                <Box flex="1" borderRight="1px" borderColor="gray.600">
                    {metaState.status[mode] === "SALE" && (
                        <MyText fontWeight="bold">{`${mode.toUpperCase()} SALE`}</MyText>
                    )}
                    <UnorderedList fontWeight="thin">
                        {(sale[mode][metaState.status[mode]] || []).map(p => (
                            <ListItem key={p}>
                                <MyText>{p}</MyText>
                            </ListItem>
                        ))}
                    </UnorderedList>
                    {metaState.status[mode] !== "END_SALE" && <CountDown deadline={metaState.time[mode]} />}
                </Box>
            )}
            <Box flex="1">
                <MyText fontWeight="bold">NOTE</MyText>
                <UnorderedList fontWeight="thin">
                    {(metaState.status[mode] !== "END_SALE" ? note.END_SALE : note.NOT_END_SALE).map(p => (
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
        </HStack>
    )
}

export default HowtoMint
