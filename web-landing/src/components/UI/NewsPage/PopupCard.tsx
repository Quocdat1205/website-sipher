import { Image } from "@chakra-ui/image"
import { Box, HStack, Flex } from "@chakra-ui/layout"
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react"
import React from "react"
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import { getDetailsNews } from "@hooks/api/news"
import ReactHtmlParser from "react-html-parser"
import { MyHeading } from "@sipher/web-components"

interface Props {}

const PopupCard = ({}: Props) => {
	// const createDate = new Date(timestamp)
	const router = useRouter()
	const { data: details, isLoading } = useQuery(
		`${router.query.type}-News-${router.query.published}`,
		() => getDetailsNews(router.query.type, router.query.published),
		{
			onError: (error) => {
				console.log(error)
			},
			enabled: !!router.query.type && !!router.query.published,
		}
	)

	return (
		<Modal
			scrollBehavior="inside"
			size="6xl"
			isOpen={!!router.query.published && !!router.query.type}
			isCentered
			onClose={() => router.push("news")}
		>
			<ModalOverlay bg="blackAlpha.900" />
			<ModalContent p={0}>
				<ModalCloseButton color="red" fontSize="1.3rem" />
				<ModalBody p={0} borderRadius="lg" bg="about.cardGray">
					{!isLoading && details ? (
						<Flex flexDir={["column", "row"]}>
							{details.type !== "medium" && (
								<Box flex={1}>
									<Image
										w="full"
										h="auto"
										src={details.thumbnail !== "" ? details.thumbnail : "/images/pc/news.png"}
										alt=""
									/>
								</Box>
							)}
							<Box flex={1} p={details.type !== "medium" ? 4 : 8}>
								<MyHeading>{details.title}</MyHeading>
								<Box sx={{ img: { m: "0 auto" } }} color="white">
									{ReactHtmlParser(details.content && details.content)}
								</Box>
								<Box sx={{ img: { m: "0 auto" } }} color="white">
									{ReactHtmlParser(details.description && details.description)}
								</Box>
							</Box>
						</Flex>
					) : (
						"Loading ..."
					)}
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default PopupCard
