import React from "react"
import { chakra, Flex, Image, Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react"
import BorderLine from "@components/shared/BorderLine"
import { MyHeading } from "@sipher/web-components"
import ListNFTs from "./ListNFTs"
interface Props {}

const HomeList = (props: Props) => {
	return (
		<Flex
			bg="url(https://sipher.xyz/images/pc/background.jpg)"
			flexDir="column"
			overflow="hidden"
			p="4"
			h="100vh"
			w="100%"
		>
			<Flex py="2" align="center" justify="space-between">
				<Flex>
					<chakra.a href="https://sipher.xyz" display="block" cursor="pointer">
						<Image
							h={["1.5rem", "2rem", "2rem", "2rem"]}
							src="https://sipher.xyz/images/general/logo_pc.png"
							alt=""
						/>
					</chakra.a>
				</Flex>
				<MyHeading ml="4" fontWeight="normal" flex="1" py="2" color="red.500">
					NFTs Sipherian Surge List
				</MyHeading>
				{/* <MyButton
					bgGradient="linear(180deg, #FF6795 0%, #FF710B 84.37%)"
					colorScheme="orange"
					color="whiteAlpha.800"
					borderRadius="99"
					p={[2, 4]}
					onClick={() => (window.location.href = "https://sipher.xyz/")}
				>
					Back to home
				</MyButton> */}
			</Flex>
			<BorderLine />
			<Tabs>
				<TabList my="1em" borderColor="whiteAlpha.300" color="gray.500">
					<Tab
						fontSize={["sm", "md", "lg"]}
						_selected={{
							color: "yellow.500",
							borderBottomColor: "yellow.500",
						}}
						_focus={{ boxShadow: "none" }}
					>
						INU
					</Tab>
					<Tab
						fontSize={["sm", "md", "lg"]}
						_selected={{
							color: "yellow.500",
							borderBottomColor: "yellow.500",
						}}
						_focus={{ boxShadow: "none" }}
					>
						EKO
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<ListNFTs type="INU" />
					</TabPanel>
					<TabPanel>
						<ListNFTs type="NEKO" />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	)
}
export default HomeList
