import React from "react"
import { Box, Flex, Tbody, Tr, Td, Table, Spinner, Text } from "@chakra-ui/react"
import { NFTRace } from "@@types"
import Head from "next/head"
import EmotionChanger from "./EmotionChanger"
import { Typo } from "@components/shared/Typo"
import { MotionBox, MotionFlex } from "@components/shared/Motion"
import { FiArrowLeft } from "react-icons/fi"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import ProofsTable from "./ProofsTable"
import useInventoryDetail from "./useInventoryDetail"
interface PopupProps {
    id: number
    race: NFTRace
}

const Detail = (props: PopupProps) => {
    const { data, currentEmotion, merkle, availableEmotions, handleDownJSON, mutateChangeEmotion, router } =
        useInventoryDetail(props)

    return (
        <Flex w="full" justify="center" px={4} py={8}>
            <Head>
                <title>{data ? `${data.name} | Sipher` : "Loading... | Sipher"}</title>
            </Head>
            <Flex direction="column" w="full" maxW="56rem">
                {data && merkle ? (
                    <>
                        <Flex
                            _hover={{ color: "main.yellow" }}
                            mb={4}
                            cursor="pointer"
                            wrap="wrap"
                            align="center"
                            onClick={() => router.back()}
                        >
                            <FiArrowLeft size="1.2rem" />
                            <Text color="inherit" ml={2} fontWeight={500}>
                                BACK TO DASHBOARD
                            </Text>
                        </Flex>
                        <MotionFlex
                            w="full"
                            overflow="hidden"
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
                        >
                            <Box w="20rem">
                                <Box pos="relative" w="full" h="22.5rem" mb={4}>
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
                                                src={data.emotions.find(e => e.id === currentEmotion)!.image}
                                                alt={currentEmotion}
                                                width={320}
                                                height={361}
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
                            <Flex direction="column" flex={3} ml="4" overflow="hidden">
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
                                                            <Text fontWeight={500}>1 of {item.total}</Text>
                                                        </Td>
                                                    </Tr>
                                                ))
                                            ) : (
                                                <Text fontWeight={500}>Data not found</Text>
                                            )}
                                        </Tbody>
                                    </Table>
                                </Box>
                                {merkle.proof && <ProofsTable proofs={merkle.proof} onDownload={handleDownJSON} />}
                            </Flex>
                        </MotionFlex>
                    </>
                ) : (
                    <Flex w="full" h="full" align="center" justify="center">
                        <Flex align="center">
                            <Spinner size="sm" mr={2} />
                            <Typo.Text>Loading</Typo.Text>
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Flex>
    )
}

export default Detail
