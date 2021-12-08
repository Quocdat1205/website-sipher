import { Flex, Text, Box } from "@chakra-ui/react"
import { AddressContractCopy, BackgroundContainer, IconSipher, Typo } from "@components/shared"
import { useQuery } from "react-query"
import useWalletContext from "@hooks/web3/useWalletContext"
import { currency, numberWithCommas } from "@source/utils"
import ClaimNoStake from "../FormStake/ClaimNoStake"

const EndedClaim = () => {
    const { scCaller, account } = useWalletContext()

    const { data: ReceivedToken } = useQuery(
        ["estimate-received-token", account],
        () => scCaller.current?.SipherIBCO.getEstReceivedToken(account!),
        {
            enabled: !!scCaller.current && !!account,
            initialData: 0,
        }
    )

    return (
        <BackgroundContainer
            pos="relative"
            image="/images/pc/home/background.png"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
        >
            <Flex pt={24} pb={16} flexDir="column" h="100vh" maxH="1080px" justify="center" align="center">
                <Typo.Heading>$SIPHER INITIAL PUBLIC SALE</Typo.Heading>
                <Flex
                    direction="column"
                    align="center"
                    w="full"
                    maxW="52rem"
                    py={8}
                    px={[4, 8, 32]}
                    rounded="xl"
                    overflow="hidden"
                    bg="rgba(0,0,0,0.9)"
                    border="1px"
                    borderColor="#383838"
                >
                    <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={3}>
                        SUCCESSFULLY ENDED!
                    </Text>
                    <Text textAlign="center">Amount of $Sipher tokens</Text>
                    <Text textAlign="center" mb={6}>
                        that you can claim:
                    </Text>
                    <Flex align="center" mb={3}>
                        <IconSipher mr={4} />
                        <Text letterSpacing="3px" size="large" fontWeight="semibold">
                            {currency(ReceivedToken!)} $SIPHER
                        </Text>
                    </Flex>
                    <ClaimNoStake />
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

export default EndedClaim
