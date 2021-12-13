import { Box, Flex, Image, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react"
import { MotionBox, MotionFlex } from "@components/shared"
import { AnimatePresence } from "framer-motion"
import React from "react"
import EmotionChanger from "./EmotionChanger"
import ProofsTable from "./ProofsTable"

export interface DetailsProps {
    data: any
    currentEmotion: any
    availableEmotions: any
    mutateChangeEmotion: any
    merkle: any
    handleDownJSON: () => void
}

export const DetailsPC = ({
    data,
    currentEmotion,
    availableEmotions,
    mutateChangeEmotion,
    merkle,
    handleDownJSON,
}: DetailsProps) => {
    return (
        <Box display={["none", "block"]} w="full">
            <Box
                pos="absolute"
                right={0}
                boxSize="2.6rem"
                bgGradient="linear(to-t, #FF7F00,#F44A67, #FF7F00 )"
                bottom={0}
                transform="translate(50%, 50%) rotate(-45deg)"
                transformOrigin="50% 50%"
            />
            <Flex overflow="hidden" w="full" justify="center" px={4} py={4}>
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
                            h={["60vh", "60vh", "60vh", "60vh", "auto"]}
                            overflow="hidden"
                        >
                            <Box pos="relative" w="full" h={["21rem", "21rem", "21rem", "22.5rem", "22.5rem"]} mb={4}>
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
                            h={["60vh", "60vh", "60vh", "60vh", "auto"]}
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

export default DetailsPC
