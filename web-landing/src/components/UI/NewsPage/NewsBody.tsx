import { useDisclosure } from "@chakra-ui/hooks"
import { Center, SimpleGrid } from "@chakra-ui/layout"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/modal"
import { BackgroundContainer, ViewContainer } from "@components/shared"
import { getListNews } from "@hooks/api/news"
import React, { useState } from "react"
import { useQuery } from "react-query"
import Card from "./Card"
import PopupCard from "./PopupCard"

interface Props {}

const NewsBody = (props: Props) => {
	const { data: news } = useQuery("News", getListNews)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selected, setSelected] = useState({
		attachments: "",
		content: "",
		timestamp: "",
	})

	const mb = [8, 8, 16]
	return (
		<BackgroundContainer>
			<ViewContainer label="News" mb={mb} py={20} threshold={0.2}>
				<Center>
					<SimpleGrid spacing={4} maxW="48rem" columns={3}>
						{news?.map((item) => (
							<Card
								onClick={() => {
									setSelected(item)
									onOpen()
								}}
								key={item.id}
								item={item}
							/>
						))}
					</SimpleGrid>
					<Modal scrollBehavior="inside" size="6xl" isOpen={isOpen} isCentered onClose={onClose}>
						<ModalOverlay bg="blackAlpha.900" />
						<ModalContent
							justifyContent="center"
							alignItems="center"
							borderRadius="0"
							p="0.5"
							pos="relative"
							_before={{
								content: "''",
								w: "100%",
								h: "100%",
								transform: "scale(1.01)",
								zIndex: "-1",
								bgSize: "500%",
								pos: "absolute",
								bg: "linear-gradient(45deg, #FCD11F, #200B9F, #DF6767, rgb(106, 6, 153), #FCD11F)",
							}}
							_after={{
								content: "''",
								w: "100%",
								h: "100%",
								transform: "scale(1.01)",
								zIndex: "-1",
								bgSize: "500%",
								pos: "absolute",
								filter: "blur(20px)",
								bg: "linear-gradient(45deg, #FCD11F, #200B9F, #DF6767, rgb(106, 6, 153), #FCD11F)",
							}}
						>
							<ModalCloseButton color="red" fontSize="1.3rem" />
							<ModalBody w="100%" h="70vh" bg="#000" p="4">
								<PopupCard selected={selected} />
							</ModalBody>
						</ModalContent>
					</Modal>
				</Center>
			</ViewContainer>
		</BackgroundContainer>
	)
}

export default NewsBody
