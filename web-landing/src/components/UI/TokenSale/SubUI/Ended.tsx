import { Flex, chakra, Grid, Stack, Text } from "@chakra-ui/react"
import { BackgroundContainer, IconSipher, Typo } from "@components/shared"
import { ActionButton } from "../ActionButton"
import { useMutation, useQuery, useQueryClient } from "react-query"
import useWalletContext from "@hooks/web3/useWalletContext"
import { numberWithCommas } from "@source/utils"
import { useChakraToast } from "@sipher/web-components"
import FormStake from "@components/UI/TokenSale/FormStake"

const Ended = () => {
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
            bgSize="100%"
            pt={24}
            pb={16}
            bgColor="#090909"
        >
            <Grid h="full" placeItems="center">
                <Typo.Heading>$SIPHER TOKEN INITIAL SALE</Typo.Heading>
                <Flex
                    direction="column"
                    align="center"
                    maxW="52rem"
                    py={8}
                    px={32}
                    rounded="xl"
                    overflow="hidden"
                    bg="rgba(0,0,0,0.9)"
                    border="1px"
                    borderColor="#383838"
                >
                    <Text letterSpacing="3px" size="large" fontWeight="semibold" mb={3}>
                        SUCCESSFULLY ENDED!
                    </Text>
                    <Text textAlign="center" mb={3}>
                        Amount of $Sipher tokens that you are available to claim:
                    </Text>
                    <Flex align="center" mb={3}>
                        <IconSipher mr={4} />
                        <Text letterSpacing="3px" size="large" fontWeight="semibold">
                            {numberWithCommas(parseFloat(ReceivedToken!.toFixed(2)))} $SIPHER
                        </Text>
                    </Flex>
                    <FormStake />
                </Flex>
            </Grid>
        </BackgroundContainer>
    )
}

export default Ended
