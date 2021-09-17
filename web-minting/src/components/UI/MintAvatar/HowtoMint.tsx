import { Box, chakra, Flex } from "@chakra-ui/react";
import { MyText } from "@sipher/web-components";
import { useMetamask } from "@hooks/useMetamask";
import React from "react";
import CountDown from "./CountDown";

function HowtoMint() {
	const { metaState } = useMetamask();

	return (
		<Flex flexDir="row" w="100%" px="4" justifyContent="space-between">
			<Box
				flex="1"
				textAlign="left"
				fontSize={{
					base: "1rem",
					sm: "1rem",
					md: "1rem",
					xl: "1rem",
					xxl: "1.2rem",
					xxxl: "2rem",
				}}
				borderRight="1px"
				borderColor="gray.600"
			>
				<MyText>
					{metaState.status === "PUBLIC_SALE"
						? "PUBLIC SALE:"
						: metaState.status === "END_SALE"
						? ""
						: "PRIVATE SALE:"}
				</MyText>
				<chakra.ul px="4">
					{metaState.status === "NOT_FOR_SALE" ? (
						<>
							<li>Available for whitelisted addresses only.</li>
							<li>Each address will be able to mint 01 NFT.</li>
							<li>Start at 08:00 AM Sep 07, 2021 UTC+7.</li>
						</>
					) : metaState.status === "PRIVATE_SALE" ? (
						<>
							<li>Available for whitelisted addresses only.</li>
							<li>Each address will be able to mint 01 NFT.</li>
							<li>Pre-sale end time.</li>
						</>
					) : metaState.status === "PUBLIC_SALE" ? (
						<>
							<li>Each address will be able to mint maximum 05 NFTs.</li>
							<li>Public sale end time.</li>
						</>
					) : (
						""
					)}
				</chakra.ul>
				{metaState.time !== 0 && metaState.status !== "END_SALE" && <CountDown />}
				<Box mt="2">
					<MyText>GUIDE</MyText>
					<chakra.ol px="4">
						<li>Connect Wallet</li>
						<li>Choose quantity</li>
						<li>Click Mint Now</li>
					</chakra.ol>
				</Box>
			</Box>
			<Box
				flex="1"
				textAlign="left"
				ml="2%"
				fontSize={{
					base: "1rem",
					sm: "1rem",
					md: "1rem",
					xl: "1rem",
					xxl: "1.2rem",
					xxxl: "2rem",
				}}
			>
				<MyText>NOTE</MyText>
				<chakra.ul px="4">
					{metaState.status !== "END_SALE" ? (
						<>
							<li>
								Adjust Gas Fees accordingly for your transaction to go through fast.{" "}
								<chakra.a color="blue.400" href="https://ethgasstation.info" target="_blank">
									(For reference: https://ethgasstation.info)
								</chakra.a>
							</li>
							<li>
								Cancel your transaction when all 9500 NFTs are almost minted and your transaction is
								still stuck NFT.
							</li>
							<li>
								NFT reveal will be on SEP 11th (09:00 AM UTC+7) or when sold out, whichever comes first.
							</li>
						</>
					) : (
						<>
							<li>Never provider your private key.</li>
							<li>Adjust Gas Fees according for your transaction to go through fast.</li>
							<li>
								Cancel your transaction when all 9500 NFTs are almost minted and your transaction is
								still stuck
							</li>
						</>
					)}
				</chakra.ul>
			</Box>
		</Flex>
	);
}

export default HowtoMint;
