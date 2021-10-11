import { useDisclosure } from "@chakra-ui/hooks"
import { Center, Grid, SimpleGrid } from "@chakra-ui/layout"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/modal"
import { BackgroundContainer, ViewContainer } from "@components/shared"
import { getListNews } from "@hooks/api/news"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { useQuery } from "react-query"
import Card from "./Card"
import PopupCard from "./PopupCard"

interface Props {}

const NewsBody = (props: Props) => {
	const { data: news } = useQuery("News", () => getListNews(1, 10))
	const { isOpen, onOpen, onClose } = useDisclosure()
	const router = useRouter()

	const [selected, setSelected] = useState({
		attachments: "",
		content: "",
		timestamp: "",
	})

	const handleSelect = (item) => {
		setSelected(item)
		router.push(`news?${item.id}`)
		onOpen()
	}

	const mb = [8, 8, 16]
	return (
		<BackgroundContainer>
			<ViewContainer label="News" mb={mb} py={20} threshold={0.2}>
				<Center pos="relative">
					<Grid
						overflow="hidden"
						maxW="48rem"
						gridTemplateColumns="repeat(auto-fill, 250px)"
						gridAutoColumns="1rem"
					>
						{news?.map((item) => (
							<Card
								onClick={() => {
									handleSelect(item)
								}}
								key={item.id}
								item={item}
							/>
						))}
					</Grid>
					<Modal scrollBehavior="inside" size="6xl" isOpen={isOpen} isCentered onClose={onClose}>
						<ModalOverlay bg="blackAlpha.900" />
						<ModalContent p={0}>
							<ModalCloseButton color="red" fontSize="1.3rem" />
							<ModalBody p={0} borderRadius="lg" bg="about.cardGray">
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
