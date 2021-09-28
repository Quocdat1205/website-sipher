import { Box, Flex, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { MyText } from "@sipher/web-components"
import React from "react"
import { BiWallet, BiChevronDown, BiChevronUp } from "react-icons/bi"
import CopyClipboard from "./CopyClipboard"

interface Props {
	account?: string | ""
	signOut?: () => void
}

const AccountAddress = ({ account = "", signOut }: Props) => {
	return (
		<Flex borderLeft="1px" ml="4" pl="3" borderColor="whiteAlpha.300" flexDir="row" align="center" pos="relative">
			<Box
				zIndex="1"
				bg="black"
				border="1px"
				borderColor="yellow.400"
				p={[0, 1, 1.5, 2]}
				borderRadius="99"
				fontSize={["sm", "sm", "md", "lg"]}
			>
				<BiWallet color="#ecc94b" />
			</Box>
			<Menu>
				{({ isOpen }) => (
					<>
						<MenuButton
							_hover={{ bg: "none" }}
							_active={{ bg: "none" }}
							as={Button}
							variant="ghost"
							rightIcon={isOpen ? <BiChevronUp fontSize="24px" /> : <BiChevronDown fontSize="24px" />}
						>
							{account !== "" && account.slice(0, 6)}
							...
							{account.slice(account.length - 4, account.length)}
						</MenuButton>
						<MenuList borderColor="gray.800" bg="gray.800">
							<MyText p="2">Connected</MyText>
							<Flex
								px="2"
								align="center"
								mt="2"
								justify="space-between"
								minH="48px"
								_focus={{ bg: "none" }}
								cursor="unset"
								_hover={{ bg: "none" }}
							>
								<Box
									zIndex="1"
									bg="transparent"
									border="1px"
									borderColor="yellow.400"
									p={[0, 1, 1.5, 2]}
									borderRadius="99"
									fontSize={["sm", "sm", "md", "lg"]}
								>
									<BiWallet color="#ecc94b" />
								</Box>
								<Box ml="2">
									<MyText>
										{account !== "" && account.slice(0, 6)}
										...
										{account.slice(account.length - 4, account.length)}
									</MyText>
								</Box>
								<CopyClipboard />
							</Flex>
							{/* <MenuItem minH="48px" _hover={{ bg: "gray.700" }}>
								<span>My NFTs</span>
							</MenuItem> */}
							<Box px="2" mt="2">
								<Button w="full" onClick={signOut} minH="48px" colorScheme="red">
									Exit
								</Button>
							</Box>
						</MenuList>
					</>
				)}
			</Menu>
		</Flex>
	)
}
export default AccountAddress
