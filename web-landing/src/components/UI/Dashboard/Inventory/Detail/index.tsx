import React from "react"
import { Box, Flex, Spinner, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import { NFTRace } from "@@types"
import Head from "next/head"
import useInventoryDetail from "./useInventoryDetail"
import { Typo } from "@components/shared"
import { useRouter } from "next/router"
import { isMobile } from "react-device-detect"
import DetailsPC from "./DetailsPC"
import DetailsMobile from "./DetailsMobile"

interface PopupProps {
    race: NFTRace
}

const Detail = ({ race }: PopupProps) => {
    const routers = useRouter()
    const { id } = routers.query
    const { data, currentEmotion, merkle, availableEmotions, handleDownJSON, mutateChangeEmotion, router } =
        useInventoryDetail({ id, race })

    return (
        <>
            {id ? (
                data && merkle ? (
                    <Modal
                        isOpen={!!id}
                        isCentered={isMobile ? false : true}
                        size="4xl"
                        onClose={() =>
                            router.push(`/dashboard/inventory/${race.toLowerCase()}`, undefined, { scroll: false })
                        }
                    >
                        <ModalOverlay bg="blackAlpha.800" />
                        <ModalContent h={["100%", "auto"]} rounded="none" overflow="hidden" my={["0", "3.75rem"]}>
                            <ModalBody
                                p={[0, 4]}
                                overflow="hidden"
                                borderLeft="2px"
                                borderColor="#f4143599"
                                pos="relative"
                                bg="blackAlpha.900"
                                pr={["0", "calc(1rem + 4px)"]}
                                shadow="lg"
                                position="relative"
                                role="group"
                                _before={{
                                    content: '""',
                                    position: "absolute",
                                    width: "calc(100% - 2px)",
                                    left: "0px",
                                    height: "2rem",
                                    bottom: "0px",
                                    border: "2px solid #f4143599",
                                    borderWidth: "0px 3px 2px 0px",
                                    transform: "skew(-45deg)",
                                    transformOrigin: "left top",
                                }}
                                _after={{
                                    content: '""',
                                    position: "absolute",
                                    width: "calc(100% - 2px)",
                                    left: "0px",
                                    height: "calc(100% - 2rem )",
                                    top: "0px",
                                    border: "2px solid #f4143599",
                                    borderWidth: "2px 2px 0px 0px",
                                }}
                            >
                                <Head>
                                    <title>{data ? `${data.name} | Sipher` : "Loading... | Sipher"}</title>
                                </Head>
                                <ModalCloseButton
                                    display={["none", "block"]}
                                    zIndex={1}
                                    color="#9B9E9D"
                                    size="lg"
                                    _hover={{ color: "red" }}
                                    _focus={{ shadow: "none" }}
                                />
                                <DetailsPC
                                    data={data}
                                    currentEmotion={currentEmotion}
                                    availableEmotions={availableEmotions}
                                    mutateChangeEmotion={mutateChangeEmotion}
                                    merkle={merkle}
                                    handleDownJSON={handleDownJSON}
                                />
                                <Box p={4} pos="relative" w="full" h="full" mt={["64px", 0]}>
                                    <DetailsMobile
                                        data={data}
                                        currentEmotion={currentEmotion}
                                        availableEmotions={availableEmotions}
                                        mutateChangeEmotion={mutateChangeEmotion}
                                        merkle={merkle}
                                        handleDownJSON={handleDownJSON}
                                    />
                                </Box>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                ) : (
                    <Flex w="full" h="full" align="center" justify="center">
                        <Flex align="center">
                            <Spinner size="sm" mr={2} />
                            <Typo.Text>Loading</Typo.Text>
                        </Flex>
                    </Flex>
                )
            ) : (
                ""
            )}
        </>
    )
}

export default Detail
