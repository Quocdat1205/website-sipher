import React from "react"
import {
    Box,
    Flex,
    Tbody,
    Tr,
    Td,
    Table,
    Spinner,
    Text,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"
import { NFTRace } from "@@types"
import Head from "next/head"
import EmotionChanger from "./EmotionChanger"
import { MotionBox, MotionFlex } from "@components/shared/Motion"
import { FiArrowLeft } from "react-icons/fi"
import { AnimatePresence } from "framer-motion"
import ProofsTable from "./ProofsTable"
import useInventoryDetail from "./useInventoryDetail"
import { Typo } from "@components/shared"
import { useRouter } from "next/router"
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
            {!!id ? (
                data && merkle ? (
                    <Modal
                        isOpen={!!id}
                        isCentered
                        size="4xl"
                        onClose={() => router.push(`/inventory/${race.toLowerCase()}`, undefined, { scroll: false })}
                    >
                        <ModalOverlay bg="blackAlpha.800" />
                        <ModalContent h={["100%", "auto"]} rounded="none" overflow="hidden">
                            <ModalBody
                                overflow="hidden"
                                borderLeft="2px"
                                borderColor="#f4143599"
                                p={4}
                                pos="relative"
                                bg="blackAlpha.900"
                                pr="calc(1rem + 4px)"
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
                                <Box
                                    pos="absolute"
                                    right={0}
                                    boxSize="2.6rem"
                                    bgGradient="linear(to-t, #FF7F00,#F44A67, #FF7F00 )"
                                    bottom={0}
                                    transform="translate(50%, 50%) rotate(-45deg)"
                                    transformOrigin="50% 50%"
                                />
                                <ModalCloseButton
                                    zIndex={1}
                                    color="main.darkRed"
                                    size="lg"
                                    _hover={{ color: "red" }}
                                    _focus={{ shadow: "none" }}
                                />
                                <Flex overflow="hidden" w="full" justify="center" px={4} py={6}>
                                    <Head>
                                        <title>{data ? `${data.name} | Sipher` : "Loading... | Sipher"}</title>
                                    </Head>
                                    <Flex flex={1} direction="column" w="full" zIndex="popover">
                                        <MotionFlex
                                            w="full"
                                            overflow="hidden"
                                            initial={{ y: 200, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
                                        >
                                            <Box
                                                w={["17.5rem", "17.5rem", "17.5rem", "20rem", "20rem"]}
                                                h={["55vh", "55vh", "55vh", "55vh", "auto"]}
                                                overflow="hidden"
                                            >
                                                <Box
                                                    pos="relative"
                                                    w="full"
                                                    h={["20rem", "20rem", "20rem", "22.5rem", "22.5rem"]}
                                                    mb={4}
                                                >
                                                    <AnimatePresence>
                                                        <MotionBox
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            key={currentEmotion}
                                                            pos="absolute"
                                                            top={0}
                                                            left={0}
                                                            zIndex={1}
                                                        >
                                                            <Image
                                                                src={
                                                                    data.emotions.find(e => e.id === currentEmotion)!
                                                                        .image
                                                                }
                                                                alt={currentEmotion}
                                                                width={[280, 280, 280, 320, 320]}
                                                                height={[316, 316, 316, 361, 361]}
                                                            />
                                                        </MotionBox>
                                                    </AnimatePresence>
                                                </Box>
                                                <EmotionChanger
                                                    availableEmotions={availableEmotions.map(e => e.id)}
                                                    currentEmotion={currentEmotion}
                                                    onChangeEmotion={mutateChangeEmotion}
                                                />
                                            </Box>
                                            <Flex
                                                h={["55vh", "55vh", "55vh", "55vh", "auto"]}
                                                overflow="auto"
                                                direction="column"
                                                flex={3}
                                                ml="4"
                                            >
                                                <Text
                                                    textTransform="uppercase"
                                                    fontSize="3xl"
                                                    fontWeight={500}
                                                    w="max-content"
                                                    color="main.yellow"
                                                    mb={2}
                                                >
                                                    {data.name}
                                                </Text>

                                                <Flex w="full" mb={1} align="center">
                                                    <Text fontWeight="700" fontSize="2xl">
                                                        Properties
                                                    </Text>
                                                </Flex>
                                                <Box mb={4}>
                                                    <Table variant="unstyled">
                                                        <Tbody>
                                                            {data.attributes.length > 0 ? (
                                                                data.attributes.map(item => (
                                                                    <Tr key={item.value}>
                                                                        <Td
                                                                            textAlign="left"
                                                                            py={1}
                                                                            px={0}
                                                                            textTransform="capitalize"
                                                                            w="full"
                                                                        >
                                                                            <Text fontWeight={500}>
                                                                                {item.traitType} : {item.value}
                                                                            </Text>
                                                                        </Td>
                                                                        <Td py={1} px={0} whiteSpace="nowrap">
                                                                            <Text fontWeight={500}>
                                                                                1 of {item.total}
                                                                            </Text>
                                                                        </Td>
                                                                    </Tr>
                                                                ))
                                                            ) : (
                                                                <Text fontWeight={500}>Data not found</Text>
                                                            )}
                                                        </Tbody>
                                                    </Table>
                                                </Box>
                                                {merkle.proof && (
                                                    <ProofsTable proofs={merkle.proof} onDownload={handleDownJSON} />
                                                )}
                                            </Flex>
                                        </MotionFlex>
                                    </Flex>
                                </Flex>
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
