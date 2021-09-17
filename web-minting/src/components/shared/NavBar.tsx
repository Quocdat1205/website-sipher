// * DESCRIPTION:
import { Flex, HStack, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NavBarLink } from "./NavBarLink";
import { useMetamask } from "@hooks/useMetamask";
import useChakraToast from "@hooks/useChakraToast";
import AccountAddress from "./AccountAddress";

interface NavBarProps {}

export const navMenus = [
	{ id: "Private Sale", path: "/minting-private" },
	{ id: "Public Sale", path: "/minting-public" },
	{ id: "Inventory", path: "/inventory" },
];

export const NavBar = ({}: NavBarProps) => {
	const { metaState, setMetaState } = useMetamask();
	const router = useRouter();
	const toast = useChakraToast();

	const signOut = () => {
		setMetaState("isConnected", false);
		toast("success", "Logout successfully");
	};

	return (
		<Flex px={4} py={4} bg="black" align="center" justify="space-between" overflow="hidden">
			<Flex
				cursor="pointer"
				mr="4"
				w={["auto", "auto", "18rem"]}
				flexShrink={0}
				align="center"
				onClick={() => window.open("https://sipher.xyz", "_blank")}
			>
				<Img src="/images/logo_pc.png" h={["10%", "2rem", "2.5rem"]} mx={[0, 0, "auto"]} />
			</Flex>
			<HStack spacing={[6, 8, 10, 12]} flex={3} justify="flex-start">
				{navMenus.map((menu) => (
					<NavBarLink
						key={menu.id}
						text={menu.id}
						href={menu.path}
						active={router.pathname.split("/")[1] === menu.path.split("/")[1]}
					/>
				))}
			</HStack>
			<AccountAddress signOut={signOut} account={metaState.accountLogin} />
		</Flex>
	);
};
