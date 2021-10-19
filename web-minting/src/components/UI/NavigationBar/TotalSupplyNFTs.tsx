import { Flex } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "react-query";
import React from "react";
import { getTotalSupply } from "@helper/smartContract";
import useWalletContext from "@hooks/useWalletContext";
import { MyText } from "@sipher/web-components";

interface Props {}

const TotalSupplyNFTs = (props: Props) => {
  const queryClient = useQueryClient();
  const { setState } = useWalletContext();
  const { data: totalSupply, isLoading } = useQuery("total-supply", getTotalSupply, {
    refetchInterval: 1000,
    onError: () => {
      setState("isSmartContract", "ERROR");
    },
  });

  return (
    <Flex justify="center" align="center" h="full">
      {/* <IconButton
                disabled={isLoading}
                onClick={() => queryClient.invalidateQueries("total-supply")}
                aria-label="refresh"
                variant="ghost"
                _focus={{ boxShadow: "none	" }}
                _hover={{ bg: "none" }}
                _active={{ color: "green.500" }}
                color="main.lightGreen"
                colorScheme="green"
                icon={<IoRefreshCircle size="24px" />}
            /> */}
      <MyText ml="2" color="main.yellow">
        {!isLoading ? (totalSupply ? totalSupply : 0) : "..."} / 10000 NFTs
      </MyText>
    </Flex>
  );
};

export default TotalSupplyNFTs;
