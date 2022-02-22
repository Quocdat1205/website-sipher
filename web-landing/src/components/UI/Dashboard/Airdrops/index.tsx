import { Box, chakra, Flex, Text } from "@chakra-ui/react";
import { ActionButton, HeaderBackground } from "@components/shared";
import { getAirdrop } from "@hooks/api";
import useTransactionToast from "@hooks/useTransactionToast";
import useWallet from "@hooks/web3/useWallet";
import { weiToEther } from "@source/contract";
import { currency } from "@source/utils";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

const Airdrops = () => {
    const { account, scCaller } = useWallet();
    const [isLoading, setIsLoading] = useState(false);
    const transactionToast = useTransactionToast();
    const qc = useQueryClient();

    const { data: token } = useQuery(["token-airdrops", account], () => getAirdrop(account!), {
        enabled: !!account,
    });

    const { data: claimableAmount } = useQuery(
        ["token-claimable-amount", account],
        () => scCaller.current!.Airdrops.getClaimableAmountAtTimestamp(account!, token!.totalAmount, token!.proof),
        {
            enabled: !!account,
            initialData: 0,
        }
    );

    const { data: tokenClaimed } = useQuery(
        ["token-claimed", account],
        () => scCaller.current!.Airdrops.claimed(account!),
        {
            enabled: !!account,
            initialData: 0,
        }
    );

    const { mutate: claim } = useMutation(
        () => scCaller.current!.Airdrops.claim(account!, token!.totalAmount, token!.proof),
        {
            onMutate: () => {
                setIsLoading(true);
                transactionToast({ status: "processing" });
            },
            onSuccess: () => {
                transactionToast({ status: "successClaim" });
                setIsLoading(false);
                qc.invalidateQueries("token-claimed");
                qc.invalidateQueries("token-claimable-amount");
            },
            onError: () => {
                setIsLoading(false);
                transactionToast({ status: "failed" });
            },
        }
    );

    return (
        <>
            <HeaderBackground title="AIRDROPS" description={`Check if you're eligible`} />
            <Flex
                pos="relative"
                flexDir="column"
                px={4}
                flex={1}
                w="full"
                overflow="hidden"
                maxW="64rem"
                bg="transparent"
            >
                <Flex w="full" flex={1} align="center" justify="center">
                    <Flex direction="column" align="center" maxW="45rem">
                        {token?.totalAmount ? (
                            <>
                                <Text textAlign="center" fontWeight={500} fontSize="2xl">
                                    You are eligible for
                                </Text>
                                <Box my={4} bg="#F4B533" py={2} px={6} transform="skew(-5deg)">
                                    <Text
                                        textAlign="center"
                                        fontSize="2xl"
                                        fontWeight={500}
                                        color="#282B3A"
                                        transform="skew(5deg)"
                                    >
                                        <chakra.span fontWeight={700}>
                                            {currency(weiToEther(token.totalAmount) - (tokenClaimed || 0))} $SIPHER
                                        </chakra.span>{" "}
                                        Token(s) Airdrop
                                    </Text>
                                </Box>
                                <Text textAlign="center" fontSize="2xl">
                                    over a 6 month Vesting Period with each month getting
                                </Text>
                                <Text mb={8} textAlign="center" fontSize="2xl">
                                    {currency(weiToEther(token.totalAmount) / 6)} $SIPHER starting on March 01 2022.
                                </Text>
                                <Text px={8} color="#7C7D91" textAlign="center" mb={4} fontWeight={500} fontSize="md">
                                    Your current claimable amount is {currency(claimableAmount!)} $SIPHER. You could
                                    claim every period or claim all at the end of the airdrops (09:00 AM UTC SEP 01 2022
                                    {/* Please come back for your first Vested Airdrop of{" "}
                                    {currency(weiToEther(token.totalAmount) / 6)} $SIPHER on March 01 2022. */}
                                </Text>
                                <Text color="#7C7D91" textAlign="center" mb={6} fontWeight={500} fontSize="md">
                                    Your claimed amount: {currency(tokenClaimed!)} $SIPHER
                                </Text>
                                <ActionButton
                                    onClick={() => claim()}
                                    disabled={claimableAmount === 0}
                                    isLoading={isLoading}
                                    w="10rem"
                                    text="CLAIM"
                                    rounded="full"
                                />
                            </>
                        ) : (
                            <>
                                <Text textAlign="center" fontWeight={500} fontSize="2xl">
                                    You are not eligible for any Airdrops at this time.
                                </Text>
                            </>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Airdrops;
