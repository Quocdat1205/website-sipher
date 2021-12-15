import { Box, Flex, Image, ModalCloseButton, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react"
import { MotionFlex } from "@components/shared"
import React from "react"
import { DetailsProps } from "./DetailsPC"
import EmotionChanger from "./EmotionChanger"
import ProofsTable from "./ProofsTable"

export const DetailsMobile = ({
    data,
    currentEmotion,
    availableEmotions,
    mutateChangeEmotion,
    merkle,
    handleDownJSON,
}: DetailsProps) => {
    return (
        <Box pb={4} display={["block", "none"]} w="full" h="calc(100% - 2rem)" overflow="auto">
            <Flex overflow="hidden" w="full" justify="center" px={4} py={6}>
                <Flex flex={1} direction="column" w="full" zIndex="popover">
                    <ModalCloseButton
                        top="0"
                        display={["block", "none"]}
                        zIndex={2}
                        color="#9B9E9D"
                        size="lg"
                        _hover={{ color: "red" }}
                        _focus={{ shadow: "none" }}
                    />
                    <MotionFlex
                        flexDir="column"
                        w="full"
                        overflow="hidden"
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
                    >
                        <Box overflow="hidden">
                            <Flex justify="center" pos="relative" w="full" mb={4}>
                                <Image
                                    src={data.emotions.find(e => e.id === currentEmotion)!.image}
                                    alt={currentEmotion}
                                />
                            </Flex>
                            <EmotionChanger
                                availableEmotions={availableEmotions.map(e => e.id)}
                                currentEmotion={currentEmotion}
                                onChangeEmotion={mutateChangeEmotion}
                            />
                        </Box>
                        <Flex overflow="auto" direction="column" flex={3}>
                            <Text
                                textTransform="uppercase"
                                fontSize="3xl"
                                fontWeight={500}
                                w="full"
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
                </Flex>
            </Flex>
        </Box>
    )
}

export default DetailsMobile
