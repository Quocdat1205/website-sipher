import { Flex, Text, Box, Img } from "@chakra-ui/react"
import { ActionButton, AddressContractCopy, BackgroundContainer, Typo } from "@components/shared"
import { useMutation, useQuery, useQueryClient } from "react-query"
import useWalletContext from "@hooks/web3/useWalletContext"
import { currency } from "@source/utils"
import useTransactionToast from "@hooks/useTransactionToast"
import { useChakraToast } from "@sipher/web-components"
import { checkSmartContract } from "@hooks/api"

const Ended = () => {
    const { scCaller, account } = useWalletContext()

    const { data: receivedToken } = useQuery(
        ["estimate-received-token", account],
        () => scCaller.current!.SipherIBCO.getEstReceivedToken(account!),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
        }
    )

    const transactionToast = useTransactionToast()

    const toast = useChakraToast()

    const qc = useQueryClient()

    const { mutate: claim, isLoading } = useMutation(() => scCaller.current!.SipherIBCO.claim(account!), {
        onMutate: () => {
            transactionToast({ status: "processing" })
        },
        onSuccess: () => {
            transactionToast({ status: "successClaim" })
            qc.invalidateQueries("estimate-received-token")
        },
        onError: () => {
            transactionToast({ status: "failed" })
        },
    })

    const handleClaim = async () => {
        claim()
    }

    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
        >
            <Flex pt={24} pb={16} flexDir="column" minH="100vh" maxH="1080px" justify="center" align="center">
                <Typo.Heading>$SIPHER INITIAL PUBLIC SALE</Typo.Heading>
                <Flex
                    direction="column"
                    align="center"
                    w="full"
                    maxW="52rem"
                    py={8}
                    px={[4, 16, 32]}
                    rounded="xl"
                    overflow="hidden"
                    bg="rgba(0,0,0,0.9)"
                    border="1px"
                    borderColor="#383838"
                >
                    <Text letterSpacing="3px" fontSize="lg" fontWeight="semibold" mb={6}>
                        SUCCESSFULLY ENDED!
                    </Text>
                    <Text textAlign="center">Amount of $Sipher tokens</Text>
                    <Text textAlign="center" mb={6}>
                        that you can claim:
                    </Text>
                    <Flex align="center" mb={3}>
                        <Img src="/images/icons/sipher.png" alt="sipher-token" boxSize="1.5rem" mr={4} />
                        <Text letterSpacing="3px" fontSize="xl" fontWeight="semibold">
                            {currency(receivedToken!)} $SIPHER
                        </Text>
                    </Flex>
                    <ActionButton
                        text="CLAIM $SIPHER"
                        py={4}
                        w="full"
                        maxW="25rem"
                        onClick={handleClaim}
                        isLoading={isLoading}
                        disabled={receivedToken! <= 0}
                        my={4}
                    />

                    <Box>
                        <Text py={1} textAlign="center" color="#828282">
                            $SIPHER Contract Address:
                        </Text>
                        <AddressContractCopy />
                    </Box>
                </Flex>
            </Flex>
        </BackgroundContainer>
    )
}

export default Ended
