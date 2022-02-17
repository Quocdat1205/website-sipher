import { Flex, Text, Box, Img, Grid, GridItem, Button, Link, Stack } from "@chakra-ui/react";
import { ActionButton, AddressContractCopy, BackgroundContainer, BoldText, PopoverCustom, Typo } from "@components/shared";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useWalletContext from "@hooks/web3/useWalletContext";
import { currency } from "@source/utils";
import useTransactionToast from "@hooks/useTransactionToast";
import { AiFillInfoCircle } from "react-icons/ai";
import { SipherTokenAddress } from "@source/contract/code";

const Ended = () => {
  const { scCaller, account } = useWalletContext();

  const { data: receivedToken } = useQuery(
    ["estimate-received-token", account],
    () => scCaller.current!.SipherIBCO.getEstReceivedToken(account!),
    {
      enabled: !!scCaller.current && !!account,
      initialData: 0,
    }
  );

  const transactionToast = useTransactionToast();

  const qc = useQueryClient();

  const { mutate: claim, isLoading } = useMutation(() => scCaller.current!.SipherIBCO.claim(account!), {
    onMutate: () => {
      transactionToast({ status: "processing" });
    },
    onSuccess: () => {
      transactionToast({ status: "successClaim" });
      qc.invalidateQueries("estimate-received-token");
    },
    onError: () => {
      transactionToast({ status: "failed" });
    },
  });

  return (
    <BackgroundContainer
      pos="relative"
      px={0}
    >
      <Flex pt={20} pb={16} flexDir="column" minH="100vh" align="center">
      <Box pos="relative" h="15rem" bg="url(/images/banner-token.png)" bgRepeat="no-repeat" bgSize="100%" w="full">
        <Box pos="absolute" top="50%" left="50%" transform="translate(-50%,-50%)">
          <Typo.Heading zIndex={1} mb={2}>
            GET $SIPHER
          </Typo.Heading>
          <BoldText zIndex={1} textAlign="center">
            Get $SIPHER today
          </BoldText>
        </Box>
      </Box>
        <Box w="full" maxW="58rem" px={2} >
        <Grid  h="full" w="full" templateRows={["repeat(3, 1fr)","repeat(2, 1fr)"]} templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)"]} gap={6}>
          <GridItem 
              p={[4,8]}
              pos="relative"
              rounded="xl"
              bg="rgba(0,0,0,0.9)"
              border="1px"
              borderColor="#383838" colSpan={[1,2]} spacing={6}>
              <Stack  direction={["column", "row"]}>
                <Flex display={["none", 'flex']} justify="center" flex={1} >
                  <Img pos="absolute" top="0"  transform="translateY(-30%)" h="40rem"  src="/images/coin.png" alt="coin"/>
                </Flex>
                <Box flex={1}>
                  <Text mb={4}>BUY $SIPHER ON</Text>
                  <Stack spacing={4}>
                    <Flex rounded="lg" align="center" justify="space-between" p={4} bg="rgba(255, 255, 255, 0.1)">
                      <Flex align="center">
                        <Img alt="uni" src="/images/icons/Uniswap.svg"/>
                        <Text ml={4}>Uniswap</Text>
                      </Flex>
                      <ActionButton onClick={() => window.open(`https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=${SipherTokenAddress}`, "_blank")} text="Buy now"/>
                    </Flex>
                    <Flex rounded="lg" align="center" justify="space-between" p={4} bg="rgba(255, 255, 255, 0.1)">
                      <Flex align="center">
                        <Img alt="kyper" src="/images/icons/Kyberswap.svg"/>
                        <Text ml={4}>Kyberswap</Text>
                      </Flex>
                      <ActionButton onClick={() => window.open(`https://kyberswap.com/?utm_source=Sipherwebsite&utm_medium=website&utm_campaign=SipherKyberSwap&utm_id=SipherKyberSwap&utm_content=website#/swap?outputCurrency=${SipherTokenAddress}&networkId=1`, "_blank")} text="Buy now"/>
                    </Flex>
                  </Stack>
                </Box>
              </Stack>
          </GridItem>
          <GridItem zIndex={2}   p={[4,8]}
              rounded="xl"
              bg="rgba(0,0,0,0.9)"
              border="1px"
              borderColor="#383838">
             <Stack spacing={4}>
              <Text>$SIPHER Contract Address</Text>
                <Box>
                  <AddressContractCopy />
                  <Button onClick={() => window.open("https://atlas.sipher.xyz/tokenomic/smart-contract", "_blank")} size="sm" fontSize="sm" _hover={{bg: "#F4B533"}} mt={2} bg="#F4B533" color="#292A40" rounded="base">Smart Contract Information</Button>
                </Box>
                <Text>Audit Report by VeriChains</Text>
                <Box>
                  <Text fontSize="sm"> <Link href="https://sipherstorage.s3.ap-southeast-1.amazonaws.com/audit/Verichains_Public_Audit_Report_Sipher_Tokens_and_IBCO_v1_2.pdf" isExternal color="#358CE1">Token Generation Audit Report & IBCO Audit Report</Link></Text>
                  <Text fontSize="sm"> <Link href="https://sipherstorage.s3.ap-southeast-1.amazonaws.com/audit/Verichains+Public+Audit+Report+-+Sipher+Staking+-+v1.1.pdf" isExternal color="#358CE1">Staking & Liquidity Mining Audit Report</Link></Text>
                </Box>
             </Stack>
          </GridItem>
          <GridItem   p={[4,8]}
              rounded="xl"
              bg="rgba(0,0,0,0.9)"
              border="1px"
              borderColor="#383838">
            <Flex
              direction="column"
              w="full"
              h="full"
              justify="space-between"
            >
              <Flex   align="center">
                <Text mr={2}>$SIPHER tokens that you can claim:</Text>
                <PopoverCustom color="black" bg="#FDF8E3" label="Eligible for participants of the $SIPHER PUBLIC SALE">
                  <Box cursor="pointer">
                    <AiFillInfoCircle size="1rem"/>
                  </Box>
                </PopoverCustom>
              </Flex>
              <Flex align="center" justify={["center","flex-start"]} >
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
                onClick={() => claim()}
                isLoading={isLoading}
                disabled={receivedToken! <= 0}
              />
            </Flex>
          </GridItem>
        </Grid>
        </Box>
      </Flex>
    </BackgroundContainer>
  );
};

export default Ended;
