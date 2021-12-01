import { Flex, chakra, Grid, Stack, Text } from "@chakra-ui/react"
import { BackgroundContainer, IconSipher } from "@components/shared"
import { ActionButton } from "../ActionButton"
import { useMutation, useQuery, useQueryClient } from "react-query"
import useWalletContext from "@hooks/web3/useWalletContext"
import { numberWithCommas } from "@source/utils"
import { useChakraToast } from "@sipher/web-components"
import FormStake from "@components/UI/TokenSale/FormStake"

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
                    maxW="52rem"
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
                    <Text textAlign="center">Amount of $Sipher tokens that you are available to claim:</Text>
                    <chakra.span display="flex" alignItems="center">
                        <IconSipher mr={2} />
                        <Text letterSpacing="3px" fontSize="2xl" fontWeight="semibold" textTransform="uppercase">
                            {numberWithCommas(parseInt(ReceivedToken!.toString()))} $SIPHER
                        </Text>
                    </chakra.span>
                    <Stack w="full" align="center" spacing={6} px={28}>
                        <FormStake />
                        <Flex
                            rounded="xl"
                            overflow="hidden"
                            justify="center"
                            align="center"
                            bg="blackAlpha.900"
                            flexDir="column"
                            border="1px"
                            borderColor="border.gray"
                            py={8}
                            px={16}
                            w="full"
                        >
                            <Text mb={2} textAlign="center">
                                Stake $Sipher and earn rewards or claim assets:
                            </Text>
                            <ActionButton
                                w="full"
                                isLoading={isClaiming}
                                disabled={ReceivedToken! <= 0}
                                text="Claim $Sipher"
                                onClick={() => claim()}
                            />
                        </Flex>
                    </Stack>
                </Stack>
            </Grid>
        </BackgroundContainer>
    )
}

export default Ended
