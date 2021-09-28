import { Flex, IconButton, Text } from "@chakra-ui/react"
import { IoRefreshCircle } from "react-icons/io5"
import { useQuery, useQueryClient } from "react-query"
import React from "react"
import { useSmartContract } from "@hooks/useSmartContract"

interface Props {}

const TotalSupplyNFTs = (props: Props) => {
	const queryClient = useQueryClient()
	const { getTotalSupply, setContractState } = useSmartContract()
	const { data: totalSupply, isLoading } = useQuery("totalSupplyNFTs", () => getTotalSupply(), {
		onError: (error) => {
			console.log(error)
			setContractState("isSmartContract", "ERROR")
		},
	})

	return (
		<Flex
			flexDir="row"
			justify="center"
			align="center"
			ml="4"
			pl="3"
			h="full"
			borderLeft="1px"
			borderColor="whiteAlpha.300"
		>
			<IconButton
				disabled={isLoading}
				onClick={() => queryClient.invalidateQueries("totalSupplyNFTs")}
				aria-label="refresh"
				variant="ghost"
				_focus={{ boxShadow: "none	" }}
				_hover={{ bg: "none" }}
				color="green.400"
				colorScheme="green"
				icon={<IoRefreshCircle size="24px" />}
			/>
			<Text ml="2" color="orange.300">
				{!isLoading ? (totalSupply ? totalSupply : 0) : "..."}/ 10000 NFTs
			</Text>
		</Flex>
	)
}

export default TotalSupplyNFTs
