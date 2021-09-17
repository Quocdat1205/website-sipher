// * DESCRIPTION:
import { Box, Flex, HStack, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NavBarLink } from "./NavBarLink";
import { BiWallet } from "react-icons/bi";
import { MyText } from "@sipher/web-components";
import { useSmartContract } from "@hooks/useSmartContract";

interface NavBarProps {}

export const navMenus = [
	{ id: "Private Sale", path: "/minting-private" },
	{ id: "Public Sale", path: "/minting-public" },
	{ id: "Inventory", path: "/inventory" },
];

export const NavBar = ({}: NavBarProps) => {
	const { metaState } = useSmartContract();
	const router = useRouter();

	return (
		<Flex px={4} py={4} bg="black" align="center" justify="space-between" overflow="hidden">
			<Flex mr="4" w={["auto", "auto", "18rem"]} flexShrink={0} align="center" onClick={() => router.push("/")}>
				<Img src="/images/logo_pc.png" h={["1.5rem", "2rem", "2.5rem"]} mx={[0, 0, "auto"]} />
			</Flex>
			<HStack
				spacing={[2, 2, 2, 4]}
				flex={3}
				justify="space-evenly"
				sx={{
					"@media (max-width: 960px)": {
						display: "none",
					},
				}}
			>
				{navMenus.map((menu) => (
					<NavBarLink
						key={menu.id}
						text={menu.id}
						href={menu.path}
						active={router.pathname.split("/")[1] === menu.path.split("/")[1]}
					/>
				))}
			</HStack>
			<Flex flexDir="row" align="center" pos="relative">
				<Box
					zIndex="1"
					bg="black"
					pos="absolute"
					left="0"
					top="50%"
					transform="translate(-50%,-50%)"
					border="1px"
					borderColor="yellow.400"
					p="2"
					borderRadius="99"
				>
					<BiWallet color="#ecc94b" size="1.2rem" />
				</Box>
				<MyText bg="gray.700" borderRadius="99" px="6" py="1">
					{metaState.accountLogin !== "" && metaState.accountLogin.slice(0, 6)}
					...
					{metaState.accountLogin.slice(metaState.accountLogin.length - 4, metaState.accountLogin.length)}
				</MyText>
			</Flex>
		</Flex>
	);
};
