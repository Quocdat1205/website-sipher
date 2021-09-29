import { Box, chakra, Flex } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"
import { useMetamask } from "@hooks/useMetamask"
import React from "react"
import CountDown from "@components/shared/CountDown"

interface Props {
	isPublic?: boolean
}

function HowtoMint({ isPublic = false }: Props) {
	const { metaState } = useMetamask()
	return (
		<Flex flexDir="row" w="100%" px="4" justifyContent="space-between">
			<Box flex="1" textAlign="left" fontSize={["sm", "sm", "md", "lg"]} borderRight="1px" borderColor="gray.600">
				<MyText fontWeight="bold">
					{isPublic
						? metaState.status.public === "PUBLIC_SALE" && "PUBLIC SALE"
						: metaState.status.private === "PRIVATE_SALE" && "PRIVATE_SALE"}
				</MyText>
				<chakra.ul fontWeight="thin" px="4">
					{isPublic ? (
						metaState.status.public === "NOT_FOR_SALE" ? (
							<>
								<li>Each address will be able to mint 05 NFTs at maximum.</li>
								<li>Public sale start time.</li>
							</>
						) : metaState.status.public === "PUBLIC_SALE" ? (
							<>
								<li>Each address will be able to mint 05 NFTs at maximum.</li>
								<li>Public sale end time.</li>
							</>
						) : (
							""
						)
					) : metaState.status.private === "NOT_FOR_SALE" ? (
						<>
							<li>
								Available for whitelisted address only. The purchase limit will be based on contribution
								history to Sipher community.
							</li>
							<li>Private sale start time.</li>
						</>
					) : metaState.status.private === "PRIVATE_SALE" ? (
						<>
							<li>
								Available for whitelisted address only. The purchase limit will be based on contribution
								history to Sipher community.
							</li>
							<li>Private sale end time.</li>
						</>
					) : (
						""
					)}
				</chakra.ul>
				{isPublic
					? metaState.status.public !== "END_SALE" && <CountDown deadline={metaState.time.public} />
					: metaState.status.private !== "END_SALE" && <CountDown deadline={metaState.time.private} />}
				<Box mt="2">
					<MyText fontWeight="bold">GUIDE</MyText>
					<chakra.ol fontWeight="thin" px="4">
						<li>Connect Wallet</li>
						<li>Choose quantity</li>
						<li>Click Mint Now</li>
					</chakra.ol>
				</Box>
			</Box>
			<Box flex="1" textAlign="left" ml="2%" fontSize={["sm", "sm", "md", "lg"]}>
				<MyText fontWeight="bold">NOTE</MyText>
				<chakra.ul px="4" fontWeight="thin">
					{isPublic ? (
						metaState.status.public !== "END_SALE" ? (
							<>
								<li>Only confirm transaction when your wallet provider shows no error/warning.</li>
								<li>
									Adjust Gas Fees accordingly for your transaction to go through fast.{" "}
									<chakra.a color="blue.400" href="https://ethgasstation.info" target="_blank">
										(For reference: https://ethgasstation.info)
									</chakra.a>
								</li>
								<li>
									Be careful before confirming a transaction when all NFTs are almost minted. Your
									transaction could be reverted if all supplies sold out.
								</li>
								<li>
									Sipher NEKO reveal party will take place on SEP 11th (09:00 AM UTC+7) or when sold
									out, whichever comes first.
								</li>
							</>
						) : (
							<>
								<li>Never provider your private key.</li>
								<li>Adjust Gas Fees according for your transaction to go through fast.</li>
								<li>
									Be careful before confirming a transaction when all NFTs are almost minted. Your
									transaction could be reverted if all supplies sold out.
								</li>
							</>
						)
					) : metaState.status.private !== "END_SALE" ? (
						<>
							<li>Only confirm transaction when your wallet provider shows no error/warning.</li>
							<li>
								Adjust Gas Fees accordingly for your transaction to go through fast.{" "}
								<chakra.a color="blue.400" href="https://ethgasstation.info" target="_blank">
									(For reference: https://ethgasstation.info)
								</chakra.a>
							</li>
							<li>
								Be careful before confirming a transaction when all NFTs are almost minted. Your
								transaction could be reverted if all supplies sold out.
							</li>
							<li>
								Sipher NEKO reveal party will take place on SEP 11th (09:00 AM UTC+7) or when sold out,
								whichever comes first.
							</li>
						</>
					) : (
						<>
							<li>Never provider your private key.</li>
							<li>Adjust Gas Fees according for your transaction to go through fast.</li>
							<li>
								Be careful before confirming a transaction when all NFTs are almost minted. Your
								transaction could be reverted if all supplies sold out.
							</li>
						</>
					)}
				</chakra.ul>
			</Box>
		</Flex>
	)
}

export default HowtoMint
