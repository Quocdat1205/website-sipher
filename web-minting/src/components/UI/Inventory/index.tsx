import { Box, Flex, Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react"
import React from "react"
import { MyHeading, MyText } from "@sipher/web-components"
import { useStoreState } from "src/store"
import ListNFTs from "./NFTList"

function Inventory() {
	const total = useStoreState((_) => _.total)

	return (
		<Flex
			flexDir="column"
			justifyContent="center"
			alignItems="center"
			p="4"
			bg="rgba(0, 0, 0, 0.8)"
			w="100%"
			h="100%"
		>
			<MyHeading fontFamily="Chakra Petch" textAlign="right" textTransform="uppercase" color="#B70F28" w="full">
				Inventory
			</MyHeading>
			<Box
				w="100%"
				h="1px"
				bg="#6f111f"
				pos="relative"
				_before={{
					pos: "absolute",
					content: "''",
					h: "2px",
					w: "10px",
					bottom: 0,
					left: 0,
					bgColor: "red.500",
				}}
			/>
			<Flex w="100%" p="2" flexDir="column" flex="1" overflow="hidden">
				<MyText p="2" textAlign="right">
					You currently have {total} Sipher NFTs
				</MyText>
				<Tabs display="flex" flexDirection="column" overflow="hidden">
					<TabList borderColor="whiteAlpha.300" color="gray.500">
						<Tab
							fontWeight="bold"
							fontSize={["sm", "md", "lg"]}
							_selected={{
								color: "yellow.500",
								borderBottomColor: "yellow.500",
							}}
							_focus={{ boxShadow: "none" }}
							px="6"
						>
							INU
						</Tab>
						<Tab
							fontWeight="bold"
							fontSize={["sm", "md", "lg"]}
							_selected={{
								color: "yellow.500",
								borderBottomColor: "yellow.500",
							}}
							_focus={{ boxShadow: "none" }}
							px="6"
						>
							NEKO
						</Tab>
					</TabList>
					<TabPanels overflow="hidden" className="tab-panel" flex={1}>
						<TabPanel overflow="hidden" p={0} h="full">
							<ListNFTs type="INU" />
						</TabPanel>
						<TabPanel overflow="hidden" p={0} h="full">
							<ListNFTs type="NEKO" />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Flex>
		</Flex>
	)
}

export default Inventory
