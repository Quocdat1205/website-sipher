import { useMutation, useQuery, useQueryClient } from "react-query";
import React from "react";
import { changeEmotion, getNFT, getMerkle } from "@api/index";
import { Box, Tooltip, Flex, Tbody, Tr, Td, Table, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import useWalletContext from "@hooks/useWalletContext";
import { NFTRace } from "@@types";
import Head from "next/head";
import EmotionChanger from "./EmotionChanger";
import { Typo } from "@components/shared/Typo";
import { BsQuestionCircle } from "react-icons/bs";
import { MotionBox, MotionFlex } from "@components/shared/Motion";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
interface PopupProps {
    id: number;
    race: NFTRace;
}

const Detail = ({ id, race }: PopupProps) => {
    const { states, toast } = useWalletContext();
    const queryClient = useQueryClient();
    const [currentEmotion, setCurrentEmotion] = useState("DEFAULT");
    const { data } = useQuery(["NFT", race, id], () => getNFT({ address: states.accountLogin, id, race }), {
        onSuccess: (data) => {
            setCurrentEmotion(data.emotion.toUpperCase());
        },
    });

    const { data: merkle } = useQuery(["merkle", race, id], () => getMerkle(id, race.toLowerCase()));

    const { mutate: mutateChangeEmotion } = useMutation<unknown, unknown, string>(
        (newEmotion) =>
            changeEmotion({
                accessToken: states.accessToken,
                address: states.accountLogin,
                emotion: newEmotion,
                id,
                race,
            }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("NFT");
            },
        }
    );

    const handleDownJSON = () => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([JSON.stringify(merkle)], { type: "text/json" }));
        a.download = "merkle.json";
        a.click();
    };

    const getAvailableEmotion = () => {
        if (!data || data.name === "???") return [];
        return data.emotions.filter((emotion) => !!emotion.image);
    };
    const router = useRouter();
    return (
        <MotionFlex
            w="full"
            justify="center"
            px={4}
            py={8}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
        >
            <Head>
                <title>{data ? data.name : "Loading..."}</title>
            </Head>
            <Flex direction="column" w="full" maxW="56rem">
                {data && merkle ? (
                    <>
                        <Flex
                            _hover={{ color: "main.yellow" }}
                            cursor="pointer"
                            align="center"
                            mb={4}
                            onClick={() => router.back()}
                        >
                            <FiArrowLeft size="1.2rem" />
                            <Text ml={2} color="inherit">
                                BACK
                            </Text>
                        </Flex>
                        <Flex w="full" overflow="hidden">
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
                                                src={data.emotions.find((e) => e.id === currentEmotion)!.image}
                                                alt={currentEmotion}
                                                width={320}
                                                height={361}
                                            />
                                        </MotionBox>
                                    </AnimatePresence>
                                </Box>
                                <EmotionChanger
                                    availableEmotions={getAvailableEmotion().map((e) => e.id)}
                                    currentEmotion={currentEmotion}
                                    onChangeEmotion={mutateChangeEmotion}
                                />
                            </Box>
                            <Flex direction="column" flex={3} ml="4" overflow="hidden">
                                <Typo.Heading
                                    isGradient
                                    textTransform="uppercase"
                                    fontSize="3xl"
                                    textAlign="left"
                                    mb={2}
                                >
                                    {data.name}
                                </Typo.Heading>
                                <Typo.BoldText textTransform="uppercase" mb={1}>
                                    Properties
                                </Typo.BoldText>
                                <Box mb={4} pb={4} borderBottom="1px" borderColor="whiteAlpha.300">
                                    <Table variant="unstyled">
                                        <Tbody>
                                            {data.attributes.length > 0
                                                ? data.attributes.map((item) => (
                                                      <Tr key={item.value}>
                                                          <Td
                                                              textAlign="left"
                                                              py={1}
                                                              px={0}
                                                              textTransform="capitalize"
                                                              w="full"
                                                          >
                                                              {item.traitType} : {item.value}
                                                          </Td>
                                                          <Td py={1} px={0} whiteSpace="nowrap">
                                                              1 of {item.total}
                                                          </Td>
                                                      </Tr>
                                                  ))
                                                : "No data"}
                                        </Tbody>
                                    </Table>
                                </Box>
                                {merkle.proof && (
                                    <>
                                        <Flex w="full" justify="space-between" align="center">
                                            <Typo.BoldText textTransform="uppercase" mb={1}>
                                                Proofs
                                            </Typo.BoldText>
                                            <Flex align="center">
                                                <Typo.BoldText
                                                    cursor="pointer"
                                                    fontSize="md"
                                                    fontWeight="semibold"
                                                    isGradient
                                                    letterSpacing="0px"
                                                    onClick={handleDownJSON}
                                                >
                                                    Download
                                                </Typo.BoldText>
                                                <Tooltip
                                                    hasArrow
                                                    label="How to verify proofs"
                                                    placement="bottom"
                                                    fontSize="xs"
                                                    bg="blackAlpha.900"
                                                    openDelay={500}
                                                >
                                                    <Box
                                                        cursor="pointer"
                                                        ml={2}
                                                        as="a"
                                                        href="https://www.notion.so/sipherhq/Step-by-Step-to-verify-your-Sipher-NFT-b18ae849204a403d9c987c5926c91f11"
                                                        rel="nonreferrer"
                                                        target="_blank"
                                                    >
                                                        <BsQuestionCircle />
                                                    </Box>
                                                </Tooltip>
                                            </Flex>
                                        </Flex>
                                        <Flex direction="column" w="full" overflow="hidden">
                                            {merkle.proof.map((p) => (
                                                <Text
                                                    textAlign="left"
                                                    letterSpacing="0.75px"
                                                    fontSize="sm"
                                                    color="about.textGray"
                                                    key={p}
                                                    isTruncated
                                                    fontFamily="mono"
                                                    w="full"
                                                    overflow="hidden"
                                                >
                                                    {p}
                                                </Text>
                                            ))}
                                        </Flex>
                                    </>
                                )}
                            </Flex>
                        </Flex>
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
        </MotionFlex>
    );
};

export default Detail;
