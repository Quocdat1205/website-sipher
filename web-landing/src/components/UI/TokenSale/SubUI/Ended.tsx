import { Image, chakra, Grid, Stack, Text } from "@chakra-ui/react"
import { BackgroundContainer } from "@components/shared"
import { ActionButton } from "../ActionButton"
import { useMutation, useQuery, useQueryClient } from "react-query"
import useWalletContext from "@hooks/web3/useWalletContext"
import { numberWithCommas } from "@source/utils"
import { useChakraToast } from "@sipher/web-components"

interface EndedProps {}

const Ended = ({}: EndedProps) => {
    const { scCaller, account } = useWalletContext()
    const qc = useQueryClient()
    const toast = useChakraToast()

    const { data: ReceivedToken } = useQuery("received-token", () => scCaller.current?.getEstReceivedToken(account!), {
        enabled: !!scCaller.current && !!account,
        initialData: 0,
    })

    const { mutate: claim, isLoading: isClaiming } = useMutation(() => scCaller.current!.claim(account!), {
        onError: (err: any) => toast({ title: "Error", message: err.message }),
        onSuccess: () => {
            toast({ title: "Claimed successfully!" })
            qc.invalidateQueries("received-token")
        },
    })

    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="100%"
            h="100vh"
            pt={24}
            pb={16}
            bgColor="#090909"
        >
            <Grid h="full" placeItems="center">
                <Stack
                    spacing={6}
                    flexDir="column"
                    align="center"
                    justify="center"
                    minW="640px"
                    p={8}
                    rounded="xl"
                    overflow="hidden"
                    bg="rgba(0,0,0,0.9)"
                    border="1px"
                    borderColor="#383838"
                >
                    <Text mb={2} letterSpacing="3px" fontSize="2xl" fontWeight="semibold" textTransform="uppercase">
                        Successfully ended!
                    </Text>
                    <Text w="240px" textAlign="center">
                        Amount of $Sipher tokens that you are available to claim:
                    </Text>
                    <chakra.span display="flex" alignItems="center">
                        <Image mr={4} h="2.4rem" src="/images/icons/community/main-black.png" alt="icon" />
                        <Text mb={2} letterSpacing="3px" fontSize="2xl" fontWeight="semibold" textTransform="uppercase">
                            {numberWithCommas(parseInt(ReceivedToken!.toString()))} $SIPHER
                        </Text>
                    </chakra.span>
                    <ActionButton
                        w="400px"
                        isLoading={isClaiming}
                        disabled={ReceivedToken! <= 0}
                        text="Claim $Sipher"
                        onClick={() => claim()}
                    />
                </Stack>
            </Grid>
        </BackgroundContainer>
    )
}

export default Ended
