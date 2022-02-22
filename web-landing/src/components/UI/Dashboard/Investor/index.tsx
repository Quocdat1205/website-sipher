import { Box, chakra, Flex, Grid, GridItem, Img, Stack, Text } from "@chakra-ui/react";
import { ActionButton, IconSipher } from "@components/shared";
import { getInvestor, getSipherPrice } from "@hooks/api";
import useTransactionToast from "@hooks/useTransactionToast";
import useWallet from "@hooks/web3/useWallet";
import { weiToEther } from "@source/contract";
import { currency } from "@source/utils";
import { format } from "date-fns";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Card from "./Card";
import VestingTable from "./VestingTable";

const Investor = () => {
    const { account, scCaller } = useWallet();
    const [isLoading, setIsLoading] = useState(false);
    const transactionToast = useTransactionToast();
    const qc = useQueryClient();

    const handleSendMail = () => {
        window.open("mailto:hello@sipher.xyz");
    };

    const { data: token, isLoading: isTokenLoading } = useQuery(
        ["token-investor", account],
        () => getInvestor(account!),
        {
            enabled: !!account,
        }
    );

    const dataTable = () => {
        const arr: { id: number; startAt: number; totalAmount: number }[] = [];

        if (token) {
            let i = 0;
            while (i < parseInt(token.numberOfVestingPoint)) {
                arr.push({
                    id: i,
                    startAt: (parseInt(token.startTime) + parseInt(token.vestingInterval) * i) * 1000,
                    totalAmount: weiToEther(token.totalAmount || "0") / parseInt(token.numberOfVestingPoint),
                });
                i++;
            }

            return arr;
        } else {
            return arr;
        }
    };

    const { data: tokenClaimed } = useQuery(
        ["token-claimed", account],
        () => scCaller.current!.Investor.claimed(account!),
        {
            enabled: !!account,
            initialData: 0,
        }
    );

    const { data: claimableAmount, isLoading: isSCLoading } = useQuery(
        ["token-claimable-amount", account],
        () => scCaller.current!.Investor.getClaimableAmountAtTimestamp(account!, token!.totalAmount, token!.proof),
        {
            enabled: !!account,
            initialData: 0,
        }
    );

    const { data: sipherPrice } = useQuery(["sipher-price"], () => getSipherPrice(), {
        initialData: 0,
        enabled: !!account,
    });

    const { mutate: claim } = useMutation(
        () => scCaller.current!.Investor.claim(account!, token!.totalAmount, token!.proof),
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

    if (!token && isTokenLoading) {
        <Text>Loading ...</Text>;
    }

    if (!token && !isTokenLoading) {
        <Text>Error ...</Text>;
    }

    return (
        <Flex
            pos="relative"
            flexDir="column"
            pt={12}
            px={4}
            flex={1}
            w="full"
            overflow="hidden"
            maxW="68rem"
            bg="transparent"
        >
            <Flex flexDir="column" flex={1}>
                {token && token.totalAmount !== "0" ? (
                    <>
                        <Text fontSize="2xl" fontWeight={600} mb={8}>
                            Overview
                        </Text>
                        <Grid
                            h="full"
                            w="full"
                            templateRows={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
                            templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]}
                            gap={6}
                        >
                            <GridItem rounded="lg" colSpan={[1, 2]} bg="#292A40">
                                <Card
                                    sipherPrice={sipherPrice}
                                    title="Total Withdrawn"
                                    value={tokenClaimed || 0}
                                    icon={<Img src="/images/icons/bx-money.png" />}
                                />
                            </GridItem>
                            <GridItem rounded="lg" colSpan={[1, 2]} bg="#292A40">
                                <Card
                                    sipherPrice={sipherPrice}
                                    title="Locked Balance"
                                    value={weiToEther(token?.totalAmount || "0") - (tokenClaimed || 0)}
                                    icon={<Img src="/images/icons/bxs-lock.png" />}
                                />
                            </GridItem>
                            <GridItem rounded="lg" rowSpan={2} colSpan={[1, 3]} bg="#292A40">
                                <VestingTable data={dataTable()} />
                            </GridItem>
                            <GridItem rounded="lg" rowSpan={2} colSpan={1} bg="#292A40">
                                <Flex h="full" flexDir="column" justify="space-between" align="center" p={[4, 6]}>
                                    <Flex align="center">
                                        <Text fontSize="lg" color="#7C7D91">
                                            Total Vesting
                                        </Text>
                                    </Flex>
                                    <Stack spacing={4} align="center">
                                        <IconSipher boxSize="3rem" />
                                        <Text fontWeight={600} fontSize="2xl" ml={2}>
                                            {currency(weiToEther(token?.totalAmount || "0"))}
                                        </Text>
                                        <Text fontWeight={600} color="#7C7D91">
                                            ${currency(weiToEther(token?.totalAmount || "0") * sipherPrice!)}
                                        </Text>
                                    </Stack>
                                    <Box textAlign="center" bg="whiteAlpha.300" py={1} px={2} rounded="base">
                                        <Text>All released at:</Text>
                                        <Text>
                                            {dataTable().length > 0
                                                ? format(
                                                      new Date(dataTable()[dataTable().length - 1].startAt),
                                                      "hh:mm a"
                                                  ) +
                                                  " UTC " +
                                                  format(
                                                      new Date(dataTable()[dataTable().length - 1].startAt),
                                                      "dd MMM yyyy"
                                                  )
                                                : ""}
                                        </Text>
                                    </Box>
                                </Flex>
                            </GridItem>
                        </Grid>
                        <Flex pt={10} flexDir="column" align="center">
                            <Text color="#B8B9C7" textAlign="center">
                                Keep in mind that each time you withdraw gas fee appears.
                            </Text>
                            <Text mb={6} color="#B8B9C7" textAlign="center">
                                Please contact{" "}
                                <chakra.span
                                    cursor="pointer"
                                    _hover={{ textDecoration: "underline" }}
                                    color="blue.400"
                                    onClick={handleSendMail}
                                >
                                    hello@sipher.xyz
                                </chakra.span>{" "}
                                with any question relate to vesting
                            </Text>
                            <ActionButton
                                disabled={claimableAmount === 0}
                                isLoading={isLoading || isSCLoading}
                                text="Claim Available Tokens"
                                onClick={() => claim()}
                                rounded="base"
                                fontSize="md"
                                letterSpacing="0"
                                textTransform="none"
                            />
                        </Flex>
                    </>
                ) : (
                    <Flex flex={1} w="full" align="center" justify="center">
                        <Text textAlign="center" fontWeight={500} fontSize="2xl">
                            You are not eligible for any Airdrops at this time.
                        </Text>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
};

export default Investor;
